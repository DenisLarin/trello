import React, {Component} from 'react';
import style from './taskBlock.module.scss'
import TaskItem from "../../components/taskBlock/taskItem/TaskItem";
import IconButton from "../../components/UI/buttons/iconButton/IconButton";
import Button from "../../components/UI/buttons/button/Button";
import add from '../../assets/add.svg'
import TaskAddNew from "../../components/taskBlock/taskAddNewItem/TaskAddNew";
import {connect} from "react-redux";
import * as actions from './../../store/actions/index'

class TaskBlock extends Component {
    state = {
        show: false,
        newItemText: "",
    };

    switchAddFormHandler = () => {
        this.setState(state => {
            return {show: !state.show}
        });
    };
    onchangeTextAreaHandler = (event) => {
        this.setState({newItemText: event.target.value});
    };
    onSend = (id) => {
        if (this.state.newItemText == "")
            return null;
        this.props.addNewCard(id, this.state.newItemText);
        this.setState({newItemText: "", show: false});
    };
    onDelete = (id, cardID) => {
        this.props.deleteCard(id, cardID);
        this.forceUpdate();
    };

    cards = {};
    getCards = () => {
        const cards = this.props.cards.map((card, index) => {
            if (!Object.prototype.hasOwnProperty.call(this.cards, card + "" + index + "" + this.props.id)) {
                this.cards[card + "" + index + "" + this.props.id] =
                    <TaskItem onDelete={() => this.onDelete(this.props.id, index)} key={index} value={card}/>;
            }
            return this.cards[card + "" + index + "" + this.props.id];
        });
        return cards;
    };

    deleteColumn = (id) => {
        this.props.deleteBlock(id);
    };

    render() {
        let cards = this.getCards();
        let buttonText='Добавить карточку';
        if (this.props.title=='Введите название')
            buttonText = 'Введите название блока';

        console.log(this.props);
        return (
            <div className={style.taskBlock}>
                <div className={style.taskBlock_content}>
                    <h1>{this.props.title}</h1>
                    <IconButton onclick={() => this.deleteColumn(this.props.id)}/>
                    <div className={style.cardContainer}>
                        {cards}
                    </div>
                    <Button onclick={this.switchAddFormHandler} img={add} content={buttonText}/>
                    {this.state.show ?
                        <TaskAddNew onClick={() => this.onSend(this.props.id)} value={this.state.newItemText}
                                    onChange={this.onchangeTextAreaHandler}
                                    closeHandler={this.switchAddFormHandler} content={buttonText}/> : null}
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        cards: state.Blockreducer.taskBlocks[props.id] ? state.Blockreducer.taskBlocks[props.id].cards : [],
        title: state.Blockreducer.taskBlocks[props.id] ? state.Blockreducer.taskBlocks[props.id].blockItem : "Введите название"
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addNewCard: (id, content) => dispatch(actions.addNewCard(id, content)),
        deleteCard: (id, cardID) => dispatch(actions.deleteCard(id, cardID)),
        deleteBlock: (id) => dispatch(actions.deleteColumn(id)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskBlock);
