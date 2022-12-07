import { useEffect, useState } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import { forgetPassApi } from '../../../services/AuthService';

function ForgetPassword() {
   
    const [email, setEmail] = useState('')

    const onCick = async (e) => {
        e.preventDefault();
        try {
            
            let res = await forgetPassApi(email)
            let message = res.data.message;
            toast.success(message)
        } catch (error) {
           let message = error.response.data.message
            toast.error(message)

        }

    }

    useEffect(() => {
        document.title = "Quên mật khẩu"
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
        </>
     );
}

export default ForgetPassword;