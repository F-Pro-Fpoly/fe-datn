import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import {getListUsersAPI, deleteUser} from "../../../../services/UserService";
import {useDispatch, useSelector} from "react-redux";
import Loading from '../../../../components/Loading/Loading';
import Pagination from 'react-bootstrap/Pagination';
import ReactPaginate from 'react-paginate';


import "./ListUser.scss";
import Paginate from '../../../../components/Paginate/Paginate';
import { Link } from 'react-router-dom';


function ListUser() {
  const token = useSelector(state => state.auth.token);

  const [listUser, getListUser] = useState([]);
  const [loading, getLoading] = useState(false);
  const [paginate, setPaginate] = useState({
    'total': '',
    'count': '',
    'per_page':'',
    'current_page': '',
    'total_pages': '',
    'links': {}
  });
  const [search, setSearch] = useState({
    "name": "",
    "email": "",
    "active": "",
    "role_code":""
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
  const handlePageClick = async  (page1) => {
    try {
    
      page1 = page1.selected
      page1 = page1 + 1;
      getListUser([]);
      getLoading(true);
      let res = await getListUsersAPI(token,search, page1);
      let data = res.data;
      let dataArr = data.data;

      getLoading(false);
      getListUser(dataArr);

      // handle paginate
      let pagination = data.meta.pagination ?? null;
      setPaginate(pagination);
    } catch (error) {
      
    }
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
        <div className="col-2">
          <select  className='form-control'  onChange={(e)=>setSearch({...search, "role_code": e.target.value})}
           value={search.role_code}>
          <option>--Ch???n--</option>
          <option value="admin">Admin</option>
          <option value="doctor">B??c s??</option>
          <option value="customer">Ng?????i d??ng</option>
          </select>
        </div>
      </div>
      <div className='mt-3 mb-3'>
        <button className='btn btn-primary' onClick={hanleSearch}>T??m ki???m</button>
      </div>
      <div className='table_admin'>
        
        <Table striped bordered hover responsive className='table-striped'>
          <thead>
            <tr>
              <th>STT</th>
              <th>H??? v?? t??n</th>
              <th>Email</th>
              <th>?????a ch???</th>
              <th>S??? ??i???n tho???i</th>
              <th>K??ch ho???t</th>
              <th>Role</th>
              <th>???nh ?????i di???n</th>
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
                  <td>{val.active === 1 ?"??ang k??ch ho???t":"Ng???ng k??ch ho???t"}</td>
                  <td>{val.role_name}</td>
                  <td >
                    <img className='listUser-img' src={val.avatar} alt="???nh user" />
                  </td>
                  <td>
                  <Link to={`/admin/update-user/${val.id}`}><i style={{cursor: "pointer"}} className="fas fa-edit"></i></Link>
                  | <i 
                  onClick={async()=>{if(window.confirm("B???n c?? th???t s??? mu???n x??a")){
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

      {/* {paginate && <Paginate pagination = {paginate} onChangePage={onChangePage} />} */}
      <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={paginate.total_pages ?? 0}
            previousLabel="< previous"
            className="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeClassName="active"
            previousClassName="page-item"
            nextClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            
        />
    </>
  );
}

export default ListUser;