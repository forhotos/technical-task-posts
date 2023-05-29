import { Pagination } from "react-bootstrap";
import './styles.css';

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

    const isManyPages = total >= 7;
    const pagesLimit = 3;

    const pagesArray = Array.from({length: total}, (_, i) => i + 1);
    const resultPagesArray = isManyPages
    ? pagesArray.splice(
        current <= Math.ceil(pagesLimit / 2)
            ? 0
            : current > total - Math.floor(pagesLimit / 2)
            ? total - pagesLimit
            : (current - 1) - Math.floor(pagesLimit / 2),
        isManyPages ? pagesLimit : 0)
    : pagesArray;

    return (
        total > 1 && !loading
            ? <Pagination className='pagination'>
                {
                    isManyPages
                        ? <Pagination.First
                            disabled={ current === 1 }
                            onClick={ () => changePage(1) }
                        />
                        : <></>
                }
                <Pagination.Prev
                    disabled={ current === 1 }
                    onClick={ () => changePage(current - 1) }
                />
                {
                    isManyPages && current > Math.ceil(pagesLimit / 2)
                        ? <Pagination.Ellipsis disabled/>
                        : <></>
                }

                {
                    resultPagesArray
                        .map(number => {
                            return (
                                <Pagination.Item
                                    key={ number }
                                    active={ number === current }
                                    onClick={ () => changePage(number) }
                                >
                                    { number }
                                </Pagination.Item>
                            );
                        })
                }
                {
                    isManyPages && current <= total - Math.ceil(pagesLimit / 2)
                        ? <Pagination.Ellipsis disabled/>
                        : <></>
                }
                <Pagination.Next
                    disabled={ current === total }
                    onClick={ () => changePage(current + 1) }
                />
                {
                    isManyPages
                        ? <Pagination.Last
                            disabled={ current === total }
                            onClick={ () => changePage(total) }
                        />
                        : <></>
                }
            </Pagination>
            : <></>
    )
}

export default PostPagination;