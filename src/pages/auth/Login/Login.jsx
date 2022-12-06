import { useState } from "react";
import "./Login.scss";
import {useForm} from "react-hook-form";
import { object, string, ref } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {loginApi} from "../../../services/AuthService";
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from "../../../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoadingGlobal from "../../../components/LoadingGlobal";
import { toast,ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom";

const schema = object({
    email: string().required('email không được bỏ trống').min(8, 'Email quá ngắn').email('email không đúng định dạng'),
    password: string().required("Password không được bỏ trống").min(6, "Password quá ngắn")
})

function Login() {
    const {register, handleSubmit, formState: { errors }, reset, setError} = useForm({
        resolver: yupResolver(schema)
    });

    const [loading, setLoading] = useState(false);

    let navigate = useNavigate();


    // redux
    const user = useSelector((state) => state.auth.user)
    // console.log(user);
    const dispatch = useDispatch()

    const [message, setMessage] = useState('');

    useEffect(() => {
        document.title = "login"
        if (user) {
            navigate('/')
        }
    }, [user]);

    const onSubmit = async response => {
        setLoading(true);
        setMessage('');
        try {
            let res = await loginApi(response);
            let data = res.data;
            if(data.errCode == 2) {
                setLoading(false);
                setMessage(data.message);
                toast.error(data.message);
                
            }else{
                setLoading(false);
                dispatch(addUser(data.data));   
            }
        } catch (error) {
            // let res = error.response.data.data
            console.log(error);
            setLoading(false);
        }

    }

    return (
        <>
        {/* {loading && <LoadingGlobal />} */}
        <div className="login">
        <ToastContainer />
            <div className="content">
                <h2>Đăng nhập</h2>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                
                    <div className="field">
                        <span className="fa fa-envelope"></span>
                        <input type="text" required placeholder="Nhập email"  {...register('email')}/>
                        <p className='text-danger'>{errors.email?.message}</p>
                    </div>
                    <div className="field space">
                        <span className="fa fa-lock"></span>
                        <input type="password" className="password" required placeholder="Nhập mật khẩu"  {...register('password')} />
                        <p className='text-danger'>{errors.password?.message}</p>
        
                    </div>
                    <div className="pass">
                        <Link>Quên mật khẩu?</Link>
                    </div>
                    <div className="field">
                        <button className='btn btn-primary' type="submit">Đăng nhập</button>
                    </div>
                    <div className="login">Hoặc đăng nhập bằng</div>
                    <div className="link">
                        <div className="facebook">
                            <i className="fa fa-facebook-f"><span>Facebook</span></i>
                        </div>
                        <div className="instagram">
                            <i className="fa fa-instagram"><span>Instagram</span></i>
                        </div>
                    </div>
                    <div className="signup">Không có tài khoản? 
                       <Link to={"/register"}> Đăng ký ngay</Link>
                    </div>
                </form>
            </div>
        </div>
        </>
     );
}

export default Login;