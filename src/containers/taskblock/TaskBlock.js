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
        cards: null,
    };

    switchAddFormHandler = () => {
        this.setState(state => {
            return {show: !state.show}
        });
    };
    onchangeTextAreaHandler = (event) => {
        this.setState({newItemText: event.target.value});
    };
    onSend = () => {
        console.log(this.state.newItemText);
    };
    getCards = () => {
        const cards = this.props.cards.map((card, index) => {
            return <TaskItem key={index} value={card}/>
        });
        return cards;
    };

    render() {
        let cards = this.getCards();
        return (
            <div className={style.taskBlock}>
                <div className={style.taskBlock_content}>
                    <h1>{this.props.title}</h1>
                    <IconButton/>
                    <div className={style.cardContainer}>
                        {cards}
                    </div>
                    <Button onclick={this.switchAddFormHandler} img={add} content="Добавить еще одну карточку"/>
                    {this.state.show ?
                        <TaskAddNew value={this.state.newItemText} onChange={this.onchangeTextAreaHandler}
                                    closeHandler={this.switchAddFormHandler}/> : null}
                </div>


            </div>
        );
    }
}

export default TaskBlock;
