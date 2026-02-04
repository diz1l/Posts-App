import React, {useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import CommentsService from "../API/CommentsService";
import '../styles/PostByID.css';
import '../styles/comments.css';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = React.useState(null);
    const [comments, setComments] = React.useState([]);
    const [fetchPost, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const response = await CommentsService.getAll(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPost(params.id);
        fetchComments(params.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="App">
            <div className="post-detail-container">
                <Link to="/" className="back-button">
                    Back to Posts
                </Link>

                <div className="post-detail-header">
                    <h1>Post Details</h1>
                </div>

                {/*Post*/}

                {isLoading ? (
                    <div className="post-loading">
                        <div className="spinner"></div>
                        <h2>Loading post...</h2>
                    </div>
                ) : error ? (
                    <div className="post-error">
                        <h2>Error: {error}</h2>
                    </div>
                ) : post ? (
                    <div className="post-detail-card">
                        <h2 className="post-detail-title">
                            <span className="post-detail-id">{post.id}</span>
                            <span className="post-detail-title-text">{post.title}</span>
                        </h2>
                        <p className="post-detail-body">{post.body}</p>
                    </div>
                ) : null}
            </div>

            {/*Comments*/}

            {isCommentsLoading ? (
                <div className="post-loading">
                    <div className="spinner"></div>
                    <h2>Loading comments...</h2>
                </div>
            ) : commentsError ? (
                <div className="post-error">
                    <h2>Error loading comments: {commentsError}</h2>
                </div>
            ) : comments.length > 0 && (
                <div className="comments-section">
                    <h3>Comments ({comments.length})</h3>
                    {comments.map(comment => (
                        <div key={comment.id} className="comment-card">
                            <h4>{comment.name}</h4>
                            <p className="comment-email">{comment.email}</p>
                            <p>{comment.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostIdPage;