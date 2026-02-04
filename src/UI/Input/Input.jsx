import React from 'react';
import classes from "./input.module.css";

const Input = ({ children, className = '', ...props }) => {
    const cls = [classes.input, className].filter(Boolean).join(' ');

    return (
        <input
            {...props}
            className={cls}
        />
    );
};

export default React.memo(Input);
