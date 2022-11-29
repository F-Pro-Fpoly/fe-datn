import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Navigate } from "react-router-dom";


function RoleMiddleware(role = [], Element) {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    if (user) {
        let next = false;
        role.forEach((val)=>{
            if (user.role_id === val) {
                next = true;
            }
        });
        if(next) {
            return Element;
        }else{
            return (<Navigate to="/NotFound" />)
        }
        
        
    }else {
        return (
            <Navigate to="/login" />
        );
    }
}

function AuthMiddlware(Element) {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    console.log('oke');
    return (
        user ? Element : <Navigate to="/login" />
    );
}

export {RoleMiddleware, AuthMiddlware}; 