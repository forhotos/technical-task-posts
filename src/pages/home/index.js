import PostCardList from "../../components/posts/PostCardList";
import { useEffect } from "react";
import { getAllPosts, sortPosts } from "../../store/actions/posts";
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

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);

    return (
        <div>
            <Row className="filter">
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">🔎</InputGroup.Text>
                        <Form.Control
                            placeholder="Поиск..."
                            type="search"
                        />
                        <Button
                            variant="primary"
                            onClick={ () => {
                            } }
                        >
                            Найти
                        </Button>
                    </InputGroup>
                </Col>
                <Col>
                    <Form.Select
                        onChange={ (e) => {
                            const sortType = e.target.value;
                            sortType && dispatch(sortPosts(sortType));
                        } }
                    >
                        <option
                            selected
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
                </Col>
            </Row>
            <PostCardList
                posts={ posts }
                commentsLoading={ commentsLoading }
                postsLoading={ postsLoading }
            />

        </div>
    )
}

export default HomePage;
