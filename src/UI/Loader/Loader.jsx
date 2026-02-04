import React from 'react';
import classes from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={classes.loader}>
            Loading
            <div className={classes.loader_dots}>
                <span className={classes.loader_dot}></span>
                <span className={classes.loader_dot}></span>
                <span className={classes.loader_dot}></span>
            </div>
        </div>
    );
};

export default Loader;