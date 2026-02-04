import React from 'react';
import classes from "./select.module.css";

const Select = ({options, defaultValue, value, onChange}) => {
    return (<div className={classes.container}>
            <h4>Sort by:</h4>
            <select
                className={classes.select}
                value={value}
                onChange={e => onChange(e.target.value)}
            >
                <option value="asc" disabled={true}>{defaultValue}</option>
                {options.map(option => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.name}</option>
                ))}

            </select>
        </div>);
};

export default React.memo(Select);
