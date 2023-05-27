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

    const [sortValue, setSortValue] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (sortValue){
            dispatch(sortPosts(sortValue));
        }
    }, [sortValue])

    useEffect(() => {
        if (searchQuery === ''){
            dispatch(getAllPosts());
            setSortValue('');
        }
    }, [searchQuery])

    return (
        <div>
            <Row className="filter">
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">🔎</InputGroup.Text>
                        <Form.Control
                            placeholder="Поиск..."
                            type="search"

                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                            }}
                        />
                        <Button
                            variant="primary"
                            disabled={searchQuery === ''}
                            onClick={() => {
                                dispatch(searchPosts(searchQuery));
                                setSortValue('');
                            }}
                        >
                            Найти
                        </Button>
                    </InputGroup>
                </Col>
                <Col>
                    <Form.Select
                        onChange={ (e) => {
                            const sortType = e.target.value;
                            setSortValue(sortType);
                        }}
                        value={sortValue}
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
