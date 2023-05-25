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

    console.log('posts from page', postsState);

    return (
        <div>
            <span>Hello</span>
            <PostCardList
                posts={ posts }
            />

        </div>
    )
}

export default HomePage;
