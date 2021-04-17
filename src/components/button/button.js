import React from 'react';
import './button.css';

const Button = ({content, type, buttonOnClick}) => {

    return (
        <button className={`button ${content === '0'  ? "long-button" : ""} ${type || ""}`}
            onClick={buttonOnClick(content)}>{content}</button>
    )
}

export default Button;