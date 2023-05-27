import { Toast, ToastContainer } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from "../../store/actions/toast";

function ToastHelper() {
    const dispatch = useDispatch();
    const toastState = useSelector(state => state.toast);
    const {
        isShown,
        message
    } = toastState;

    return (
        <ToastContainer
            position={ "bottom-end" }
        >
            <Toast
                onClose={ () => dispatch(hideToast()) }
                show={ isShown }
                bg={ 'danger' }
                autohide
            >
                <Toast.Header>
                    <strong className="me-auto">Ошибка!</strong>
                </Toast.Header>
                <Toast.Body>
                    { message }
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default ToastHelper;