import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import {useForm} from "react-hook-form";
import { object, string, ref } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {loginApi} from "../../../services/AuthService";
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from "../../../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const schema = object({
    email: string().required('email không được bỏ trống').min(8, 'Email quá ngắn').email('email không đúng định dạng'),
    password: string().required("Password không được bỏ trống").min(6, "Password quá ngắn")
})

function Login() {
    const {register, handleSubmit, formState: { errors }, reset, setError} = useForm({
        resolver: yupResolver(schema)
    });

    let navigate = useNavigate();

    document.title = "login"

    // redux
    const user = useSelector((state) => state.auth.user)
    // console.log(user);
    const dispatch = useDispatch()

    const [message, setMessage] = useState('');

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user]);

    const onSubmit = async response => {
        setMessage('');
        try {
            let res = await loginApi(response);
            let data = res.data;
            if(data.errCode == 2) {
                setMessage(data.message);
            }else{
                dispatch(addUser(data.data));

                
            }
        } catch (error) {
            // let res = error.response.data.data
            console.log(error);
        }

    }

    return (
        <div className="auth-wrapper">
            <h2 className='mb-4 text-center'>Đăng Nhập</h2>
            
            <Form method='post' action='#' onSubmit={handleSubmit(onSubmit)}>
                {message&&<p className="text-dange">{message}</p>}
                <Form.Group className='mb-3' controlId="formBasicEmail">
                    <Form.Label>Nhập email</Form.Label>
                    <Form.Control type="email" placeholder="Nhập email" {...register('email')} />
                    <p className='text-danger'>{errors.email?.message}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register('password')} />
                    <p className='text-danger'>{errors.password?.message}</p>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Đăng Nhập
                </Button>
            </Form>
        </div>
     );
}

export default Login;