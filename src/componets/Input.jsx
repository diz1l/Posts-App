import React, {useState} from 'react';
import Counter from "./Counter";

const Input = () => {
    const [value, setValue] = useState("");

    return (
        <div>
            <h2>{value}</h2>
            <input type="text" placeholder="Type something..." value={value} onChange={e => setValue(e.target.value)} />
        </div>
    );
};

export default Input;