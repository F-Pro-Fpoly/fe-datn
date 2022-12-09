import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast,ToastContainer } from 'react-toastify';
import LoadingGlobal from '../../../components/LoadingGlobal';
import { forgetPassApi } from '../../../services/AuthService';

function ForgetPassword() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false);
    const onCick = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            
            let res = await forgetPassApi(email)
            let message = res.data.message;
            setLoading(false);
            toast.success(message)
            navigate('/tomail')
        } catch (error) {
            setLoading(false);
           let message = error.response.data.message
            toast.error(message)

        }

    }

    useEffect(() => {
        document.title = "Kiểm tra email"
    }, [])
    


    return (
        <>

        <div className="login">
        <ToastContainer />
            <div className="content">
                <h2>Quên mật khẩu</h2>

                    <div className="field">
                        <span className="fa fa-envelope"></span>
                        <input type="email" name='email' 
                        onChange={(e) => setEmail({...email, email: e.target.value})}
                        required placeholder="Nhập email"  />
                 
                    </div>
                    <br />
                    <div className="field">
                        <button className='btn btn-primary' onClick={onCick} type="submit">Xác nhận</button>
                    </div>
               
                
            </div>
        </div>
        {loading && <LoadingGlobal />}
        </>
     );
}

export default ForgetPassword;