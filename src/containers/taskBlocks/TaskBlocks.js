import React, {Component} from 'react';
import TaskBlock from "../taskblock/TaskBlock";
import {connect} from "react-redux";
import styles from './taskBlocks.module.scss'

class TaskBlocks extends Component {
    render() {
        let key = -1;
        const blocks = this.props.taskblocks.map(block => {
            key++;
            return <TaskBlock key={key} title={block.blockItem} cards={block.cards}/>
        });
        return (
            <div className={styles.container}>
                {blocks}
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