import React from 'react';
import style from './taskItem.module.scss'
import IconButton from "../../UI/buttons/iconButton/IconButton";

function TaskItem(props) {
    return (
        <div className={style.taskItem}>
            <IconButton onclick={props.onDelete}/>
            <p>{props.value}</p>
        </div>
    );
}

export default TaskItem;