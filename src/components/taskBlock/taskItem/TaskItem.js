import React from 'react';
import style from './taskItem.module.scss'
import IconButton from "../../UI/buttons/iconButton/IconButton";

function TaskItem(props) {
    return (
        <div className={style.taskItem}>
            <IconButton/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti facere ipsum itaque molestiae mollitia,
            natus quidem sunt? Ad delectus dicta distinctio error est eum id iure, minus perspiciatis, quo vero?
        </div>
    );
}

export default TaskItem;