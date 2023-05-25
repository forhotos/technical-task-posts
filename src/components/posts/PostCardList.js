import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PostCardList(props) {
    const history = useNavigate();
    const {posts} = props;

    return (
        <div className="cards">
            {
                posts && posts.length
                    ? posts.map(
                    (post) => {
                        return (
                            <Card
                                bg="light"
                            >

                                <Card.Img
                                    variant="top"
                                    src="holder.js/100px180"
                                    onClick={ () => history.push(`/user/${ post.userId }`) }
                                />
                                <Card.Body>
                                    <Card.Title>{ post.title }</Card.Title>
                                    <Card.Text>
                                        { post.body }
                                    </Card.Text>
                                    <Button
                                        variant="link"
                                        onClick={() => {

                                        }}
                                    >
                                        Комментарии
                                    </Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                    : <></> }

        </div>
    )
}

export default PostCardList;