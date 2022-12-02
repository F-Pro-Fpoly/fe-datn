import { useEffect, useRef } from 'react';
import { useState } from 'react';
import {getListUsersAPI} from "../../../../services/UserService";
import Loading from '../../../../components/Loading/Loading';
import Pagination from 'react-bootstrap/Pagination';
import Paginate from '../../../../components/Paginate/Paginate';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from "react-redux";
import { toast,ToastContainer } from 'react-toastify';


import {EditUserApi} from "../../../../services/UserService"

function UpdateUser() {
  const token = useSelector((state)=>state.auth.token);
  const FormRep = useRef();
  const [UpdateUser, getListUser] = useState([]);
  const [loading, getLoading] = useState(false);
  const [paginate, setPaginate] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(()=>{
    const start = async () =>{
      getListUser([]);
      getLoading(true);
      let res = await getListUsersAPI(token, null, page);
      let data = res.data;
      let dataArr = data.data;

      getLoading(false);
      getListUser(dataArr);

      // handle paginate
      let pagination = data.meta.pagination;
      setPaginate(pagination);
      
    }

    start();
  },[page]);


  const onChangePage = (number) =>{
    setPage(number);
  }

  const submitForm = async (event) =>{
    event.preventDefault();
    const formData = new FormData(FormRep.current);
    const req = {
      "token": token,
      "data": formData
    };
    try {
      let res = await EditUserApi(req);

      toast.success(res.data.message) ;     
    } catch (error) {
      let res = error.response;
      let data = res.data;
      let messages = data.message;
      toast.error(messages);
    }

  }


  return (
    <>
      {
          UpdateUser.map((val)=>(
    <Form onSubmit={submitForm} ref={FormRep} enctype='multipart/form-data'>
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
        <Form.Control type="text" name="username" placeholder="Nhập username" vale={val.username}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control type="password" name="password" placeholder="Nhập mật khẩu"  value={val.password}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Nhập Email"  value={val.email}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control type="text" name="name" placeholder="Nhập họ và tên"  value={val.name}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formActive">
        <Form.Label>Kích hoạt</Form.Label>
        <Form.Select aria-label="Default select example" name="active"value={val.active}>
          <option>--Chọn--</option>
          <option value="1">Kích hoạt</option>
          <option value="0">Không kích hoạt</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRole">
        <Form.Label>Chức vụ</Form.Label>
        <Form.Select aria-label="Default select example" name="role_id"value={val.role_id}>
          <option>--Chọn--</option>
          <option value="1">Admin</option>
          <option value="2">Bác sĩ</option>
          <option value="3">Người dùng</option>
        </Form.Select>
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formRole">
        <Form.Label>Chuyên Khoa</Form.Label>
        <Form.Select aria-label="Default select example" name="role_id"value={val.role_id}>
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
     ))
    }

    {
      loading && <Loading />
    }

    {paginate && <Paginate pagination = {paginate} onChangePage={onChangePage} />}
    
  </>
  );
}

export default UpdateUser;