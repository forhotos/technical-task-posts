import { Pagination } from "react-bootstrap";

function PostPagination(props) {
    const {
        total,
        current,
        setCurrent,
        loading
    } = props;

    const changePage = (page) => {
        setCurrent(page);
        window.scrollTo(0, 0);
    }

    return (
        total > 1 && !loading
            ? <Pagination className='pagination'>
                <Pagination.First
                    disabled={current === 1}
                    onClick={() => changePage(1)}
                />
                <Pagination.Prev
                    disabled={current === 1}
                    onClick={() => changePage(current - 1)}
                />
                {
                    Array.from({length: total}, (_, i) => i + 1)
                        .map(number => {
                            return (
                                <Pagination.Item
                                    key={ number }
                                    active={ number === current }
                                    onClick={() => changePage(number)}
                                >
                                    { number }
                                </Pagination.Item>
                            );
                        })
                }
                <Pagination.Next
                    disabled={current === total}
                    onClick={() => changePage(current + 1)}
                />
                <Pagination.Last
                    disabled={current === total}
                    onClick={() => changePage(total)}
                />
            </Pagination>
            : <></>
    )
}

export default PostPagination;