import React, {useState} from 'react';
import Button from "../UI/Button/Button";
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
    const [isRemoving, setIsRemoving] = useState(false);

    const handleRemove = () => {
        setIsRemoving(true);
        setTimeout(() => {
            props.remove(props.post);
        }, 300);
    };

    const navigate = useNavigate();
    // console.log(navigate);

    const handleOpen = () => {
        navigate(`/posts/${props.post.id}`);
    };

    return (
        <div>
            <div className={`post ${isRemoving ? 'removing' : ''}`}>
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btn">
                    <Button onClick={handleOpen}>Open</Button>
                    <Button onClick={handleRemove}>Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(PostItem);
