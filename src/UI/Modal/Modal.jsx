import React from 'react';
import classes from "./modal.module.css";

const Modal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.mymodal];
    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div
            className={rootClasses.join(' ')}
            onClick={() => setVisible(false)}
        >
            <div
                className={classes.myModelContent}
                onClick={
                (event) => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default React.memo(Modal);
