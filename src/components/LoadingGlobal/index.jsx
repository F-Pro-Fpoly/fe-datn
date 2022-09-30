import { Spinner } from "react-bootstrap";
import "./LoadingGlobal.scss";

function LoadingGlobal() {
    return ( 
        <div className="loadingGlobal">
            <div className="man-mo"></div>
            <Spinner animation="grow" variant="primary" />
        </div>
     );
}

export default LoadingGlobal;