import {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import {useForm} from "react-hook-form";
// import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number, date, InferType, ref } from 'yup';
import { toast,ToastContainer } from 'react-toastify';


import {registerApi} from "../../../services/AuthService";


import "./Register.scss";
import LoadingGlobal from '../../../components/LoadingGlobal';
import { Link } from 'react-router-dom';

const schema = object({
    name: string().required('Họ tên không được bỏ trống').min(8, 'Họ tên quá ngắn'),
    email: string().required('email không được bỏ trống').min(8, 'Email quá ngắn').email('email không đúng định dạng'),
    username: string().required('Username không được bỏ trống').min(8, 'Username quá ngắn'),
    password: string().required('Password không được bỏ trống').min(8, 'password quá ngắn'),
    RePassword: string().required('Password không được bỏ trống').oneOf([ref('password')], "Nhập lại password không đúng")
}).required();

function Register() {
    const { register, handleSubmit, watch, formState: { errors }, reset, setError  } = useForm({
        resolver: yupResolver(schema)
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = async data => {
        setLoading(true);
        try {
            
            let res = await registerApi(data);
            // console.log(res);
             setLoading(false);

            reset();
            toast.success("Đăng ký thành công !");
        } catch (error) {
            setLoading(false);
            let data = error.response.data.data;
            console.log(data);
            setError('email', { type: 'custom', message: data.email[0] });
            setError('username', { type: 'custom', message: data.username[0] });
            // errors.email.message = ;
            errors.username.message = data.username[0];
        }

    };

    document.title = "Trang đăng ký";

    return ( 
        <>
        <div className="register">
        <ToastContainer />
            <div className="content">
                <h2>Login Form</h2>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
              
                    <div className="field">
                        <span className="fa fa-vcard"></span>
                        <input type="text" required placeholder="Nhập họ tên" {...register("name")} />
                        <p className='text-danger'>{errors.name?.message}</p>
                    </div>
                    <div className="field space">
                        <span className="fa fa-envelope"></span>
                        <input type="eamil" required placeholder="Nhập eamil"  {...register('email')} />
                        <p className='text-danger'>{errors.email?.message}</p>
        
                    </div>
                    <div className="field space">
                        <span className="fa fa-user"></span>
                        <input type="text"  required placeholder="Nhập Username"  {...register('username')} />
                        <p className='text-danger'>{errors.username?.message}</p>
        
                    </div>
                    <div className="field space">
                        <span className="fa fa-lock"></span>
                        <input type="password" className="password" required placeholder="Nhập password"  {...register('password')} />
                        <p className='text-danger'>{errors.password?.message}</p>
        
                    </div>
                    <div className="field space">
                        <span className="fa fa-lock"></span>
                        <input type="password" className="password" required placeholder="Nhập lại Password"  {...register('RePassword')} />
                        <p className='text-danger'>{errors.RePassword?.message}</p>
        
                    </div>
                    <div className="pass">
                       
                    </div>
                    <div className="field">
                        <button className='btn btn-primary' type="submit">Đăng ký</button>
                    </div>
                    <div className="login">Hoặc đăng ký bằng</div>
                    <div className="link">
                        <div className="facebook">
                            <i className="fa fa-facebook-f"><span>Facebook</span></i>
                        </div>
                        <div className="instagram">
                            <i className="fa fa-instagram"><span>Instagram</span></i>
                        </div>
                    </div>
                    <div className="signup">
                       <Link to={"/login"}> Đăng nhập ngay</Link>
                    </div>
                </form>
            </div>
        </div>
    {loading && <LoadingGlobal />}</>

    );
}

export default Register;