import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import {getListUsersAPI, deleteUser} from "../../../../services/UserService";
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

  


  const start = async () =>{
    getListUser([]);
    getLoading(true);
    let res = await getListUsersAPI(token, null, page);
    let data = res.data;
    let dataArr = data.data;

    getLoading(false);
    getListUser(dataArr);

    // handle paginate
    let pagination = data.meta.pagination ?? null;
    setPaginate(pagination);
    
  }
  useEffect(()=>{

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
          <th>Họ và tên</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Số điện thoại</th>
          <th>Kích hoạt</th>
          <th>Ảnh đại diện</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {
          listUser.map((val, index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.address ?? null}</td>
              <td>{val.phone}</td>
              <td>{val.active === 1 ?"Đang kích hoạt":"Ngừng kích hoạt"}</td>
              <td >
                <img className='listUser-img' src={val.avatar} alt="Ảnh user" />
              </td>
              <td><i style={{cursor: "pointer"}} className="fas fa-edit"></i> | <i 
              onClick={async()=>{if(window.confirm("Bạn có thật sự muốn xóa")){
                await deleteUser({token: token, id: val.id});
                start();
              }}}
              style={{cursor: "pointer"}} className="fa fa-trash"></i></td>
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