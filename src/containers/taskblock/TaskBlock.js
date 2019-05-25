import React,{Component} from 'react';
import style from './taskBlock.module.scss'
import TaskItem from "../../components/taskBlock/taskItem/TaskItem";
import IconButton from "../../components/UI/buttons/iconButton/IconButton";
import Button from "../../components/UI/buttons/button/Button";
import add from '../../assets/add.svg'
import TaskAddNew from "../../components/taskBlock/taskAddNewItem/TaskAddNew";

class TaskBlock extends Component{
    state={
        show: false,

    };
    render() {
        return (
            <div className={style.taskBlock}>
                <h1>Заголовок блока</h1>
                <IconButton/>
                <TaskItem/>
                <Button img={add} content="Добавить еще одну карточку"/>
                <TaskAddNew/>
            </div>
        );
    }
}

export default TaskBlock;
