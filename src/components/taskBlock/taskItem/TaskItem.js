import React from 'react';
import style from './taskItem.module.scss'
import IconButton from "../../UI/buttons/iconButton/IconButton";

function TaskItem(props) {
    console.log(1);
    return (
        <div className={style.taskItem}>
            <IconButton/>
            <p>{props.value}</p>
        </div>
    );
}

export default TaskItem;