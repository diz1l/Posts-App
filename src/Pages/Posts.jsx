import React, {useState, useCallback, useEffect} from 'react';
import '../styles/App.css';
import PostList from "../componets/PostList";
import NewPost from "../componets/NewPost";
import PostFilter from "../componets/PostFilter";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import {usePosts} from "../hooks/usePost";
import PostListService from "../API/PostService";
import Loader from "../UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../componets/utils/pages";
import Pagination from "../UI/Pagination/Pagination";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostListService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    useEffect(() => {
        fetchPosts();
    }, [page]);

    const createPost = useCallback((newPost) => {
        setPosts(prev => [...prev, newPost]);
        setModal(false);
    }, []);

    const deletePost = useCallback((post) => {
        setPosts(prev => prev.filter(p => p.id !== post.id));
    }, []);

    const openModal = useCallback(() => {
        setModal(true);
    }, []);

    return (<div className="App">
        <div className="posts-controls">
            <div className="posts-controls__top">
                <Button onClick={openModal}>
                    Create Post
                </Button>
                <Button onClick={fetchPosts}>
                    Get Posts
                </Button>
            </div>
            <PostFilter posts={posts} filter={filter} setFilter={setFilter}/>
        </div>

        <Modal visible={modal} setVisible={setModal}>
            <NewPost create={createPost}/>
        </Modal>
        {isPostsLoading ?
            <Loader/>
            : <PostList
                posts={sortedAndSearchedPosts}
                title="List 1"
                remove={deletePost}
            />
        }
        <Pagination page={page} totalPages={totalPages} changePage={setPage}/>
        {postError && <h1>Error - {postError}</h1>}
    </div>);
}

export default Posts;
