import React from 'react';

const Button = (props) => {
    return (
        <button style={{width: `${props.width}px`, height:`${props.width/3}px`}}>{props.children}</button>
    )
};

export default Button;