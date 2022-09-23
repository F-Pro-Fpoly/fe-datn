import { useSelector, useDispatch } from 'react-redux';
import Banner from '../../components/Client/Banner';

import "./HomePage.scss";
function HomePage() {
    let user = useSelector((state => state.auth.user));
    return ( 
        <>
            <Banner/>
           <div className='main'>
           <h2>Home page</h2>
           </div>
           
        </>
     );
}

export default HomePage;