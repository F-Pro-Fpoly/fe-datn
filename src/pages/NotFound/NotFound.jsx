import { useEffect } from "react";

function NotFound() {
    useEffect(()=>{
        document.title = "Not found";
    }, []);
    return ( 
        <div className="notFound">
            <h2>Trang 404</h2>
        </div>
     );
}

export default NotFound;