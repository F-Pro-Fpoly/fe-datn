import { useSelector, useDispatch } from 'react-redux';
import "./HomePage.scss";
function HomePage() {
    let user = useSelector((state => state.auth.user));
    return ( 
        <>
            <div className="banner">    
                <img src="https://cdn.dribbble.com/users/1904192/screenshots/11060755/media/e81d7ebcfbc9242fe271b7251a5ca931.png"
                    alt="Main Illustrations.png" />

                   <div className="text">
                    <h2>The race to find a covid-19 drug</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum possimus accusamus libero,
                        fugit amet nisi sit modi ipsum corrupti dicta dolores officia incidunt natus minus repellat nemo fuga,
                        aliquam blanditiis.</p> 
                        <button>Get Started</button>
                   </div>
                  
            </div>


            <h2>Home page</h2>
           
           

        </>
     );
}

export default HomePage;