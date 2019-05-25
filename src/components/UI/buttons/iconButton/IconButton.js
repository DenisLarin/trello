import React from 'react';
import removeSVG from './../../../../assets/cross.svg';
import addSVG from './../../../../assets/add.svg';
import style from './iconButton.module.scss'

function IconButton(props) {
    let img = removeSVG;
    if (props.add)
        img = addSVG;

    return (
        <button className={style.iconButton}><img src={img}/></button>
    );
}

export default IconButton;