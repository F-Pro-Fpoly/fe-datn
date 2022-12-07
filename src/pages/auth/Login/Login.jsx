import { useState } from "react";
import "./Login.scss";
import {useForm} from "react-hook-form";
import { object, string, ref } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {loginApi, loginGoogleApi} from "../../../services/AuthService";
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from "../../../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoadingGlobal from "../../../components/LoadingGlobal";
import { toast,ToastContainer } from 'react-toastify';
import { Button as ButtonMui } from "@mui/material";
import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";
import { Link } from "react-router-dom";

const schema = object({
    email: string().required('email không được bỏ trống').min(8, 'Email quá ngắn').email('email không đúng định dạng'),
    password: string().required("Password không được bỏ trống").min(6, "Password quá ngắn")
})

function Login() {
    const {register, handleSubmit, formState: { errors }, reset, setError} = useForm({
        resolver: yupResolver(schema)
    });

    const clientId = "991219474491-720scu1n3qdf7224g2h9d7j92u3q7h5i.apps.googleusercontent.com";


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

        gapi.load("client:auth2", () => {
            gapi.auth2.init({clientId:clientId})
        })
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

    const responseGoogle = async (response) => {
        try {
            setLoading(true);
            let res = await loginGoogleApi({data: response});
            let data = res.data;
            dispatch(addUser(data.data));  
            setLoading(false); 
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const responseErrorGoogle = async (response) => {

    }

    // const handleFireBase = async () => {
    //     const auth = getAuth();
    //     signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed in 
    //         const user = userCredential.user;
    //         // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //     });
    // }

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
                        <Link to={'/forgetPassword'}>Quên mật khẩu?</Link>
                    </div>
                    <div className="field">
                        <button className='btn btn-primary' type="submit">Đăng nhập</button>
                    </div>
                    <div className="login">Hoặc đăng nhập bằng</div>
                    <div className="link">
                        {/* <div className="facebook">
                            <i className="fa fa-facebook-f"><span>Facebook</span></i>
                        </div>
                        <div className="instagram">
                            <i className="fa fa-instagram"><span>Instagram</span></i>
                        </div> */}
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseErrorGoogle}
                            cookiePolicy={'single_host_origin'}
                            render={renderProps => {
                                return(
                                    <div className="instagram" 
                                        onClick={renderProps.onClick} 
                                        disabled={renderProps.disabled}
                                    >
                                        <i className="fa-brands fa-google"><span>Google</span></i>
                                    </div>
                                )
                            }}
                        />
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