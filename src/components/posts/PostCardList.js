import { Accordion, AccordionContext, Button, Card, useAccordionButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import './styles.css';
import { useDispatch } from "react-redux";
import { geCommentsByPost } from "../../store/actions/posts";
import ReactLoading from "react-loading";
import { useContext } from "react";

function PostCardList(props) {
    const dispatch = useDispatch();
    const {
        commentsLoading,
        postsLoading,
        posts
    } = props;

    function CustomToggle({children, eventKey}) {
        const { activeEventKey } = useContext(AccordionContext);

        const isCurrentEventKey = activeEventKey === eventKey;

        const decoratedOnClick = useAccordionButton(eventKey, () => {

            !isCurrentEventKey && dispatch(geCommentsByPost(eventKey));
            console.log(posts);
        });

        return (
            <Button
                variant="link"
                onClick={ decoratedOnClick }
            >
                { children }
            </Button>
        );
    }

    return (
        <div className='container'>
            {
                postsLoading
                    ? (
                        <div className='loader'>
                            <ReactLoading type='spin' color='#fff'/>
                        </div>
                    )
                    : (
                        <Accordion className="posts">
                            {
                                posts && posts.length
                                    ? posts.map(
                                    (post) => {
                                        return (
                                            <Card
                                                bg="light"
                                            >
                                                <div className="post">
                                                    <Link to={ `/user/${ post.userId }` }>
                                                        <Card.Img
                                                            variant="top"
                                                            src="logo512.png"
                                                            style={ {width: '8rem', cursor: 'pointer'} }
                                                        />
                                                    </Link>
                                                    <Card.Body>
                                                        <Card.Title>{ post.title }</Card.Title>
                                                        <Card.Text>
                                                            { post.body }
                                                        </Card.Text>
                                                        <CustomToggle eventKey={ post.id }>
                                                            Комментарии
                                                        </CustomToggle>

                                                    </Card.Body>
                                                </div>
                                                <Accordion.Collapse eventKey={ post.id }>
                                                    {
                                                        commentsLoading
                                                            ? <div className='loader'>
                                                                <ReactLoading type='bubbles' color='#000'/>
                                                            </div>
                                                            : <div className='comments'>
                                                                {
                                                                    post.comments && post.comments.length
                                                                        ? post.comments.map(
                                                                        item => {
                                                                            return (
                                                                                <Card className='comment'>
                                                                                    <Card.Header>
                                                                                        { item.email }
                                                                                    </Card.Header>
                                                                                    <Card.Body>
                                                                                        { item.body }
                                                                                    </Card.Body>
                                                                                </Card>
                                                                            )
                                                                        })
                                                                        : <></>
                                                                }
                                                            </div>
                                                    }

                                                </Accordion.Collapse>
                                            </Card>
                                        )
                                    })
                                    : <></> }

                        </Accordion>
                    )
            }
        </div>
    );


}

export default PostCardList;