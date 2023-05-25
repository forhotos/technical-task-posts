import PostCardList from "../../components/posts/PostCardList";
import { useEffect } from "react";
import { getAllPosts } from "../../store/actions/posts";
import { useDispatch, useSelector } from "react-redux";

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
    }, []);

    return (
        <div>
            <PostCardList
                posts={posts}
                commentsLoading={commentsLoading}
                postsLoading={postsLoading}
            />

        </div>
    )
}

export default HomePage;
