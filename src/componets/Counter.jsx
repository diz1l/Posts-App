import React, {useState} from 'react';

const Counter = () => {

    const [likes, setLikes] = useState(0);

    const  handleLike = () => {
        setLikes(likes + 1);
    };

    const handleDislike = () => {
        setLikes(likes - 1);
    };

    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={handleLike}>Likes</button>
            <button onClick={handleDislike}>DisLikes</button>
        </div>
    );
};

export default Counter;