import { useEffect, useRef } from 'react';
import { Navigate, useParams } from 'react-router';
import { toast,ToastContainer } from 'react-toastify';
import { changePassApi } from '../../../services/AuthService';



function ChangPassword() {
    
        const formRefPass = useRef();
        const param = useParams()
        const id = param.id
        const ChangePassWord = async (e) => {
            e.preventDefault();
            const formData = new FormData(formRefPass.current)
            const req = {
                "data": formData,  
                "id" : id,
            }

            try {
                let res = await changePassApi(req);   
                let message = res.data.message;     
                toast.success(message);
                Navigate('/');
             


            } catch (error) {
                
                // let message = error.response.data.message
                console.log(error);
                // toast.error(message)
            }
        }
        useEffect(() => {
          
            document.title = "Thay đổi mật khẩu"
        }, [])
        

    return (
        <>
       
        <div className="login">
        <ToastContainer />
            <div className="content">
                <h2>Đổi mật khẩu</h2>
                <form className="card-body" ref={formRefPass}   method="Post" onSubmit={ChangePassWord}>
                
                
                <div className="mb-3">
                    <label className="form-label">Mật khẩu mới</label>
                    <div className="input-group">
                        <input className="form-control fakepassword"
                        name='new_pass'
                        placeholder="Nhập mật khẩu mới" type="password" id="psw-input" />
                        <span className="input-group-text p-0 bg-transparent">
                            <i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                        </span>
                    </div>
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Nhập lại mật khẩu</label>
                    <input className="form-control" type="password"
                    name='comfirm_pass'
                    placeholder="Nhập lại mật khẩu" />
                </div>

                <div className="text-end">
                 <button className='btn btn-primary mb-0' type='submit'>Xác nhận</button>
                </div>
            </form>
            
            </div>
        </div>
        </>
     );
}

export default ChangPassword;