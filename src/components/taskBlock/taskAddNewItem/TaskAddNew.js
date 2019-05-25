import React from 'react';
import IconButton from "../../UI/buttons/iconButton/IconButton";
import styles from './taskAddNew.module.scss'
import Button from "../../UI/buttons/button/Button";

function TaskAddNew(props) {
    return (
        <div className={styles.addNew}>
            <textarea rows="5"></textarea>
            <div className={styles.wrapper}>
                <IconButton/>
                <Button content="Добавить карточку"/>
            </div>
        </div>
    );
}

export default TaskAddNew;