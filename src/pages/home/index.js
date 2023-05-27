import PostCardList from "../../components/posts/PostCardList";
import { useEffect, useState } from "react";
import { getAllPosts, searchPosts, sortPosts } from "../../store/actions/posts";
import { useDispatch, useSelector } from "react-redux";
import './styles.css';
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

function HomePage() {
    const dispatch = useDispatch();
    const postsState = useSelector((state) => state.posts) || [];
    const {
        commentsLoading,
        postsLoading,
        posts
    } = postsState;

    const [ sortValue, setSortValue ] = useState('');

    useEffect(() => {
        if (sortValue) {
            dispatch(sortPosts(sortValue));
        }
    }, [ sortValue ])

    useEffect(() => {
        dispatch(getAllPosts());
    }, [])

    return (
        <div>
            <Form
                className='filter container'
                onSubmit={ (e) => {
                    e.preventDefault();

                    const query = e.target.query.value;
                    dispatch(query === '' ? getAllPosts() : searchPosts(query));
                    setSortValue('');
                } }
            >
                <Form.Group controlId="query" as={ Col } className='filter-item'>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>🔎</InputGroup.Text>
                        <Form.Control
                            placeholder="Поиск..."
                            type="search"
                        />
                        <Button
                            variant="primary"
                            type="submit"
                        >
                            Найти
                        </Button>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={ Col } className='filter-item'>
                    <Form.Select
                        onChange={ (e) => {
                            const sortType = e.target.value;
                            setSortValue(sortType);
                        } }
                        value={ sortValue }
                        as={ Col }
                    >
                        <option
                            value=''
                            disabled
                        >
                            Сортировка
                        </option>
                        <option
                            value="ASC"
                        >
                            Заголовок: возрастание
                        </option>
                        <option
                            value="DESC"
                        >
                            Заголовок: убывание
                        </option>
                    </Form.Select>
                </Form.Group>
            </Form>
            <PostCardList
                posts={ posts }
                commentsLoading={ commentsLoading }
                postsLoading={ postsLoading }
            />

        </div>
    )
}

export default HomePage;
