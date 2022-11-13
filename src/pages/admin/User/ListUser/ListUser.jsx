import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import {getListUsersAPI, deleteUser} from "../../../../services/UserService";
import {useDispatch, useSelector} from "react-redux";
import Loading from '../../../../components/Loading/Loading';
import Pagination from 'react-bootstrap/Pagination';

import "./ListUser.scss";
import Paginate from '../../../../components/Paginate/Paginate';
import { Link } from 'react-router-dom';


function ListUser() {
  const token = useSelector(state => state.auth.token);

  const [listUser, getListUser] = useState([]);
  const [loading, getLoading] = useState(false);
  const [paginate, setPaginate] = useState(null);
  const [search, setSearch] = useState({
    "name": "",
    "email": "",
    "active": "",
  });
  const [page, setPage] = useState(1);
  // paginate

  const start = async () =>{
    getListUser([]);
    getLoading(true);
    let res = await getListUsersAPI(token, {}, page);
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

  const hanleSearch = async () =>{
    getListUser([]);
    getLoading(true); 
    let res = await getListUsersAPI(token, search, page);
    let data = res.data;
    let dataArr = data.data;

    getLoading(false);
    getListUser(dataArr);

    // handle paginate
    let pagination = data.meta.pagination ?? null;
    setPaginate(pagination);
  }


  const onChangePage = (number) =>{
    setPage(number);
  }


  return (
    <>
      <div className='row'>
        <div className="col-2">
          <input type="text" className='form-control' value={search.name} 
            onChange={(e)=>setSearch({...search, "name": e.target.value})}
            placeholder="Name" />
        </div>
        <div className="col-2">
          <input type="email" className='form-control'
            onChange={(e)=>setSearch({...search, "email": e.target.value})}
           value={search.email} placeholder="Email" />
        </div>
      </div>
      <div className='mt-3 mb-3'>
        <button className='btn btn-primary' onClick={hanleSearch}>Tìm kiếm</button>
      </div>
      <div className='table_admin'>
        
        <Table striped bordered hover responsive className='table-striped'>
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>Email</th>
              <th>Địa chỉ</th>
              <th>Số điện thoại</th>
              <th>Kích hoạt</th>
              <th>Ảnh đại diện</th>
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
                  <td>
                  <Link to={`/admin/update-user/${val.id}`}><i style={{cursor: "pointer"}} className="fas fa-edit"></i></Link>
                  | <i 
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
      </div>

      {
        loading && <Loading />
      }

      {paginate && <Paginate pagination = {paginate} onChangePage={onChangePage} />}
    </>
  );
}

export default ListUser;