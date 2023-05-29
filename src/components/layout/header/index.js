import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import './styles.css';

function Header() {
    const [ show, setShow ] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    const handleLinkClick = () => {
        handleClose();
        window.scrollTo(0, 0);
    }

    return (
        <div className='header'>
            <Button
                variant="link"
                onClick={ toggleShow }
            >
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png'
                    alt={ 'burger' }
                    width='40'
                />
            </Button>

            <Offcanvas
                show={ show }
                onHide={ handleClose }
                placement={ "start" }
            >
                <Offcanvas.Header closeButton style={{justifyContent: 'flex-end'}}/>
                <Offcanvas.Body>
                    <div className='header-inner'>
                        <div className='header-links p-2'>
                            <Link to='/' onClick={ handleLinkClick }>
                                <span>Список постов</span>
                            </Link>
                            <Link to='/about' onClick={ handleLinkClick }>
                                <span>Обо мне</span>
                            </Link>
                        </div>
                        <div className='header-info'>
                            <img
                                src={'https://img.hhcdn.ru/photo/620167004.jpeg?t=1685302444&h=0HDMmARpg_RqAQsR6SGK3w'}
                                alt='my-img'
                                height={100}
                            />
                            <div className='header-info-data'>
                                <div>
                                    <strong>Имя: </strong><span>Алексей</span>
                                </div>
                                <div>
                                    <strong>E-mail: </strong><span>forhotos@gmail.com</span>
                                </div>

                            </div>

                        </div>
                    </div>

                </Offcanvas.Body>


            </Offcanvas>
        </div>
    );
}

export default Header;