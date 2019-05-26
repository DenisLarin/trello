import React,{useState} from 'react';
import IconButton from "../../UI/buttons/iconButton/IconButton";
import styles from './taskAddNew.module.scss'
import Button from "../../UI/buttons/button/Button";

function TaskAddNew(props) {
    return (
        <div className={styles.addNew}>
            <textarea rows="5" value={props.value} onChange={props.onChange}/>
            <div className={styles.wrapper}>
                <IconButton onclick={props.closeHandler} />
                <Button content={props.content} onclick={props.onClick}/>
            </div>
        </div>
    );
}

export default TaskAddNew;