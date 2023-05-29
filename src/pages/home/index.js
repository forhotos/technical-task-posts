import PostCardList from "../../components/posts/post-card-list";
import { useDispatch, useSelector } from "react-redux";
import PostsFilter from "../../components/posts/posts-filter";
import Header from "../../components/layout/header";
import { useEffect, useState } from "react";
import { getAllPosts } from "../../store/actions/posts";
import PostPagination from "../../components/posts/posts-pagination";

function HomePage() {
    const dispatch = useDispatch();

    const postsState = useSelector((state) => state.posts) || [];
    const {
        commentsLoading,
        postsLoading,
        posts
    } = postsState;

    useEffect(() => {
        dispatch(getAllPosts());
    }, [ dispatch ]);

    const limit = 10;
    const totalPages = Math.ceil(posts.length / limit);

    const [ currentPage, setCurrentPage ] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [ posts ]);

    return (
        <>
            <Header/>
            <div className="p-4 p-md-5">
                <PostsFilter
                    loading={ commentsLoading || postsLoading }
                    fetchFunc={ (query) => dispatch(getAllPosts(query)) }
                />
                <PostCardList
                    posts={ posts.slice((currentPage - 1) * limit, currentPage * limit) }
                    commentsLoading={ commentsLoading }
                    postsLoading={ postsLoading }
                />
                <PostPagination
                    loading={postsLoading}
                    total={ totalPages }
                    current={ currentPage }
                    setCurrent={ setCurrentPage }
                />
            </div>
        </>
    )
}

export default HomePage;
