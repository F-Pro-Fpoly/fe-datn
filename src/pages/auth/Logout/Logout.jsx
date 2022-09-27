import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {logout} from "../../../redux/slices/AuthSlice";
import {useNavigate} from "react-router-dom"

function Logout() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(logout());
        navigate('/');
    },[])

    return ( 
        <>
        </>
     );
}

export default Logout;