import { sortPosts } from "../../../store/actions/posts";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import './styles.css';

function PostsFilter(props) {
    const dispatch = useDispatch();
    const {
        loading,
        fetchFunc
    } = props;

    const [ sortValue, setSortValue ] = useState('');

    useEffect(() => {
        if (sortValue) {
            dispatch(sortPosts(sortValue));
        }
    }, [ sortValue, dispatch ])

    return (
        <Form
            onSubmit={ (e) => {
                e.preventDefault();

                const query = e.target.query.value;
                fetchFunc(query);
                setSortValue('');
            } }
        >
            <fieldset className='filter mb-5' disabled={ loading }>
                <Form.Group controlId="query" className='filter-item-search'>
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
                <Form.Group className='filter-item-sort'>
                    <Form.Select
                        onChange={ (e) => {
                            const sortType = e.target.value;
                            setSortValue(sortType);
                        } }
                        value={ sortValue }
                        as={ Col }
                        style={ {maxWidth: "fit-content"} }
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
                            Заголовок: по возрастанию
                        </option>
                        <option
                            value="DESC"
                        >
                            Заголовок: по убыванию
                        </option>
                    </Form.Select>
                </Form.Group>
            </fieldset>
        </Form>
    );
}

export default PostsFilter;