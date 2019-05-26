import React from 'react';
import style from './button.module.scss'

function Button(props) {
    let content = <p>{props.content}</p>;
    let classes = [style.button];
    if (props.img) {
        classes = [style.buttonWithIMG];
        content = <div>
            <img src={props.img} alt=""/>
            <p>{props.content}</p>
        </div>
    }
    return (
        <button onClick={props.onclick} className={classes.join(' ')}>{content}</button>
    );
}

export default Button;
