import { useEffect } from "react";
import "./NotFound.scss"
function NotFound() {
    useEffect(()=>{
        document.title = "Not found";
    }, []);
    return ( 
        <section class="notFound section">
        <div class="img">
        <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
        <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly"/>
        </div>
        <div class="text">
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <h3>BACK TO HOME?</h3>
        <a href="#" class="yes">YES</a>
        <a href="#">NO</a>
        </div>
    </section>
     );
}

export default NotFound;