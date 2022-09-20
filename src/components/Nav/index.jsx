import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./Nav.scss"

function Nav (){
    let user = useSelector((state => state.auth.user));
    return(
     
       <>
       
       <div className="nav">
            <div className="logo">F-Pro</div>
            <div className="main-menu">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>      
                    </li>
                    <li>
                        <Link to="/home">About</Link>  
                    </li>
                    <li>
                        <Link to="/home">Product</Link>  
                    </li>
                    <li>
                        <Link to="/home">Investors</Link>  
                    </li>
                    <li>
                                
                    {
                        user ?
                        <a>
                            {user.name}
                        </a> 
                        :
                        <Link to="/login">Login</Link>          
                    }
                    </li>
                </ul>
            </div>
        </div>
       </>
       
    )
}   

export default Nav; 