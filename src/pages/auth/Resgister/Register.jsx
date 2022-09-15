import {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import {useForm} from "react-hook-form";
// import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number, date, InferType, ref } from 'yup';
import { toast,ToastContainer } from 'react-toastify';


import {registerApi} from "../../../services/AuthService";


import "./Register.scss";

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

    const onSubmit = async data => {
        try {
            let res = await registerApi(data);
            // console.log(res);
            reset();
            toast.success("Đăng ký thành công !");
        } catch (error) {
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
        <div className="auth-wrapper">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
                {/* Same as */}
            <ToastContainer />
            <h2 className='mb-4 text-center'>Đăng ký</h2>
            <Form method='post' action='#' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className='mb-3' controlId="formBasicName">
                    <Form.Label>Nhập tên</Form.Label>
                    <Form.Control type="text" placeholder="Nhập họ và tên" {...register("name")} />
                    <p className='text-danger'>{errors.name?.message}</p>
                </Form.Group>
                <Form.Group className='mb-3' controlId="formBasicEmail">
                    <Form.Label>Nhập email</Form.Label>
                    <Form.Control type="email" placeholder="Nhập email" {...register("email")} />
                    <p className='text-danger'>{errors.email?.message}</p>
                </Form.Group>
                <Form.Group className='mb-3' controlId="formBasicUsername">
                    <Form.Label>Nhập username</Form.Label>
                    <Form.Control type="text" placeholder="Nhập username" {...register("username")} />
                    <p className='text-danger'>{errors.username?.message}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password")} />
                    <p className='text-danger'>{errors.password?.message}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRePassword">
                    <Form.Label>Nhập lại password</Form.Label>
                    <Form.Control type="password" placeholder="Nhập lại password" {...register("RePassword")} />
                    <p className='text-danger'>{errors.RePassword?.message}</p>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Đăng ký
                </Button>
            </Form>
        </div> 
    );
}

export default Register;