import React, {useState} from 'react';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const NewPost = ({create}) => {

    const [post, setPost] = useState({title: "", body: ""});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''});
    }

    return (
        <div>
            <form className="form">
                <Input
                    value={post.title}
                    placeholder="Post name"
                    onChange={e => setPost({...post, title: e.target.value})}
                />
                <Input
                    value={post.body}
                    placeholder="Description"
                    onChange={e => setPost({...post, body: e.target.value})}
                />
                <Button onClick={addNewPost}>
                    Создать пост
                </Button>
            </form>
        </div>
    );
};

export default React.memo(NewPost);
