import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import {getListUsersAPI} from "../../../../services/UserService";
import {useDispatch, useSelector} from "react-redux";
import Loading from '../../../../components/Loading/Loading';
import Pagination from 'react-bootstrap/Pagination';

import "./ListUser.scss";
import Paginate from '../../../../components/Paginate/Paginate';


function ListUser() {
  const token = useSelector(state => state.auth.token);

  const [listUser, getListUser] = useState([]);
  const [loading, getLoading] = useState(false);
  const [paginate, setPaginate] = useState(null);
  const [page, setPage] = useState(1);
  // paginate

  


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


  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>STT</th>
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

    {paginate && <Paginate pagination = {paginate} onChangePage={onChangePage} />}
    
    </>
  );
}

export default ListUser;