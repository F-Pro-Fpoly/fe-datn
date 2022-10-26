// import { get } from 'immer/dist/internal';
import { useEffect, useMemo, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from "react-redux";
import { toast,ToastContainer } from 'react-toastify';


import {createUserApi} from "../../../../services/UserService"

function AddUser() {
  const token = useSelector((state)=>state.auth.token);
  const FormRep = useRef();
  const submitForm = async (event) =>{
    event.preventDefault();
    const formData = new FormData(FormRep.current);
    const req = {
      "token": token,
      "data": formData
    };
    try {
      let res = await createUserApi(req);
      FormRep.current.reset();
      toast.success(res.data.message) ;     
    } catch (error) {
      let res = error.response;
      let data = res.data;
      let messages = data.message;
      toast.error(messages);
    }

  }

  return (
    <Form onSubmit={submitForm} ref={FormRep}>
      <ToastContainer
        position="top-right"
        autoClose={4000}
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


      <Form.Group className="mb-3" controlId="FormUsername">
        <Form.Label>Tên đăng nhập</Form.Label>
        <Form.Control type="text" name="username" placeholder="Nhập username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control type="password" name="password" placeholder="Nhập mật khẩu"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Nhập Email"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control type="text" name="name" placeholder="Nhập họ và tên"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formActive">
        <Form.Label>Kích hoạt</Form.Label>
        <Form.Select aria-label="Default select example" name="active">
          <option>--Chọn--</option>
          <option value="1">Kích hoạt</option>
          <option value="0">Không kích hoạt</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRole">
        <Form.Label>Chức vụ</Form.Label>
        <Form.Select aria-label="Default select example" name="role_id">
          <option>--Chọn--</option>
          <option value="1">Admin</option>
          <option value="2">Bác sĩ</option>
          <option value="3">Người dùng</option>
        </Form.Select>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddUser;