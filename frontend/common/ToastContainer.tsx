import { ToastContainer as Container, Zoom } from "react-toastify";

export default function ToastContainer() {
    return (
        <Container
            role="alert"
            autoClose={4000}
            transition={Zoom}
            draggable={false}
            closeOnClick={false}
            pauseOnHover={false}
            pauseOnFocusLoss={false}
            hideProgressBar
            position="bottom-center"
            theme="colored"
            style={{ fontSize: 13 }}
        />
    );
}
