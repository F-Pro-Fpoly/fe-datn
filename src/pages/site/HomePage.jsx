import { useSelector, useDispatch } from 'react-redux';

function HomePage() {
    let user = useSelector((state => state.auth.user));

    return ( 
        <>
            <h2>Home page</h2>
            {
                user&&
                <div>
                    {user.name}    
                </div>
            }

        </>
     );
}

export default HomePage;