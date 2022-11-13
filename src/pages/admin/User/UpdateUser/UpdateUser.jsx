import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from "react-redux";
import { toast,ToastContainer } from 'react-toastify';
import {useParams, useNavigate} from "react-router-dom";

import {getUser, updateUser} from "../../../../services/UserService";
import {getAllRole} from "../../../../services/RoleService";
import {setLoading} from "../../../../redux/slices/InterfaceSile";


function UpdateUser() {
  let token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  let param = useParams();
  const [user, setUser] = useState({
    "username": "",
    "password": "",
    "email": "",
    "name": "",
    "active": "",
    "role_id": ""
  });
  const [roles, setRoles] = useState([]);
  const formRef = useRef();

  const start = async () => {
    dispatch(setLoading(true));
    try {
      let id = param.id;
      let res = await getUser({token, id});
      let resRole = await getAllRole({token});
      let dataRole = resRole.data;
      let data = res.data.data;
      setRoles(dataRole.data);
      setUser({
        ...user, 
        "username": data.username,
        "name": data.name,
        "password": "",
        "email": data.email,
        "active": data.active,
        "role_id": data.role_id
      });
      dispatch(setLoading(false));
    } catch (error) {
      // console.log(error);
      
    }
  }

  useEffect(()=>{
    start();
  }, [])

  const onSubmit = async (e) =>{
    e.preventDefault();
    let id = param.id;
    let data = {
      'name': user.name,
      'password': user.password,
      'active': user.active,
      'role_id': user.role_id
    };
    try {
      let res = await updateUser({token, id, data});
      let message = res.data.message;
      toast.success(message);

    } catch (error) {
      console.log(error);
      let res = error.response;
      let status = res.status;
      console.log(status);
      if(status == 422){
        let data = res.data;
        // let errors = data.errors;
        let message = data.message;
        console.log();
        toast.error(message);
      }
    }

  }

  return (
    <div className='adminItem'>
      <h4>Cập nhập người dùng</h4>
      <Form onSubmit={onSubmit} ref={formRef}>
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


      <Form.Group className="mb-3" controlId="FormUsername">
        <Form.Label>Tên đăng nhập</Form.Label>
        <Form.Control type="text" name="username" placeholder="Nhập username" disabled defaultValue={user.username} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control 
          type="password" name="password" 
          placeholder="Nhập mật khẩu" value={user.password}
          onChange={(e) => setUser({...user, "password": e.target.value})}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Nhập Email"  value={user.email} disabled  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control type="text" name="name" placeholder="Nhập họ và tên" onChange={(e) => setUser({...user, "name": e.target.value})} required  value={user.name} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formActive">
        <Form.Label>Kích hoạt</Form.Label>
        <Form.Select aria-label="Default select example" name="active" value={user.active} onChange={(e) => setUser({...user, "active": e.target.value})}>
          <option value="1" >Kích hoạt</option>
          <option value="0" >Không kích hoạt</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRole">
        <Form.Label>Chức vụ</Form.Label>
        <Form.Select  name="role_id" value={user.role_id} onChange={(e) => setUser({...user, "role_id": e.target.value})}>
          {/* {console.log(user.role_id)} */}
          {roles.map((val, index) => {
            return (
             <option value={val.id} key={index} >{val.name}</option>
            )
          })}
          {/* <option value="1">Admin</option>
          <option value="2">Bác sĩ</option>
          <option value="3">Người dùng</option> */}
        </Form.Select>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default UpdateUser;