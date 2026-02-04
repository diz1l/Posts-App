import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}>Posts not found!</h1>;
    }

    return (
        <div className="App">
            <h1>{title}</h1>
            {posts.map((post, index) => (
                <PostItem
                    remove={remove}
                    key={post.id}
                    post={post}
                    number={index + 1}/>
            ))}
        </div>
    );
};

export default React.memo(PostList);
