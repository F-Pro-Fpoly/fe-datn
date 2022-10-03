import Spinner from "react-bootstrap/esm/Spinner";

function LoadingBtn() {
    return ( 
        <div>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </div>
     );
}

export default LoadingBtn;