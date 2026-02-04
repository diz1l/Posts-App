import React from 'react';
import {Link} from 'react-router-dom';
import classes from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className="App">
            <div className={classes.notFound}>
                <div className={classes.content}>
                    <h1 className={classes.title}>404</h1>
                    <h2 className={classes.subtitle}>Page Not Found</h2>
                    <p className={classes.description}>
                        Sorry, the page you are looking for does not exist or has been moved.
                    </p>
                    <Link to="/" className={classes.homeButton}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
