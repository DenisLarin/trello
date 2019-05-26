import React, {Component} from 'react';
import TaskBlock from "../taskblock/TaskBlock";
import {connect} from "react-redux";
import styles from './taskBlocks.module.scss'
import Button from "../../components/UI/buttons/button/Button";

class TaskBlocks extends Component {
    render() {
        const extraBlock= <TaskBlock key={this.props.taskblocks.length+1} id={this.props.taskblocks.length+1}/>
        const blocks = this.props.taskblocks.map((block,index) => {
            return <TaskBlock key={index} id={index}/>
        });
        return (
            <div className={styles.container}>
                {blocks}
                {extraBlock}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        taskblocks: state.Blockreducer.taskBlocks
    }
};
export default connect(mapStateToProps)(TaskBlocks);