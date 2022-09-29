import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import {getListUsersAPI} from "../../../../services/UserService";
import {useDispatch, useSelector} from "react-redux";
import Loading from '../../../../components/Loading/Loading';

import "./ListUser.scss";


function ListUser() {
  const token = useSelector(state => state.auth.token);

  const [listUser, getListUser] = useState([]);
  const [loading, getLoading] = useState(false);


  useEffect(()=>{
    const start = async () =>{
      getLoading(true);
      let res = await getListUsersAPI(token);
      let data = res.data;
      let dataArr = data.data;

      getLoading(false);
      getListUser(dataArr);
    }

    start();
  },[]);



  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Active</th>
          <th>Avata</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          listUser.map((val, index)=>(
            <tr key={index}>
              <td></td>
              <td>{index+1}</td>
              <td>{val.name}</td>
              <td>{val.username}</td>
              <td>{val.email}</td>
              <td>{val.address ?? null}</td>
              <td>{val.phone}</td>
              <td>{val.active === 1 ?"Đang kích hoạt":"Ngừng kích hoạt"}</td>
              <td >
                <img className='listUser-img' src={val.avatar} alt="Ảnh user" />
              </td>
              <td><i className="fas fa-edit"></i></td>
              <td><i className="fa fa-trash"></i></td>
            </tr>
          ))
        }
        
        
      </tbody>
      
    </Table>
    {
      loading && <Loading />
    }
    </>
  );
}

export default ListUser;