
import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { useSelector } from "react-redux";
import Loading from "../../../../components/Loading/Loading";
import { getListContactAPI,deleteContact } from "../../../../services/ContactService";
import Paginate from '../../../../components/Paginate/Paginate';
import "./ListContact.scss"
import { Link } from "react-router-dom";

function ListContact(){
  const token = useSelector(state => state.auth.token);

  const [ListContact, getContact] = useState([]);
  const [loading, getLoading] = useState(false);
  const [paginate, setPaginate] = useState(null);
  const [search, setSearch] = useState({
    "name": "",
    "email": "",
    "type": "",
    "phone":""
  });
  const [page, setPage] = useState(1);
  const start = async () =>{
    getContact([]);
    getLoading(true);
    let res = await getListContactAPI(token, {}, page);
    let data = res.data;
    let dataArr = data.data;

    getLoading(false);
    getContact(dataArr);

    // handle paginate
    let pagination = data.meta.pagination ?? null;
    setPaginate(pagination);
    
  }

  useEffect(()=>{

    start();
  },[page]);

const hanleSearch = async () =>{
    getContact([]);
    getLoading(true); 
    let res = await getListContactAPI(token, search, page);
    let data = res.data;
    let dataArr = data.data;

    getLoading(false);
    getContact(dataArr);

    // handle paginate
    let pagination = data.meta.pagination ?? null;
    setPaginate(pagination);
  }


  const onChangePage = (number) =>{
    setPage(number);
  }

    return( <>   <div className='row'>
    <div className="col-2">
      <input type="text" className='form-control' value={search.name} 
        onChange={(e)=>setSearch({...search, "name": e.target.value})}
        placeholder="Name" />
    </div>
    <div className="col-2">
      <input type="email" className='form-control'
        onChange={(e)=>setSearch({...search, "email": e.target.email})}
       value={search.email} placeholder="Email" />
    </div>
  </div>
  <div className='mt-3 mb-3'>
    <button className='btn btn-primary' onClick={hanleSearch}>Tìm kiếm</button>
  </div>
      
        <div className="listNews">
           
                <Table>
          <thead>
            <tr>

              <th>STT</th>
              <th>Họ tên</th>
              <th>Email</th>
              <th>Đăng ký lịch khám</th>
            </tr>
          </thead>
          <tbody>
          {
              ListContact.map((val, index)=>(
              <tr key={index}>
                  <td>{index+1}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>                                       
                  <td>{val.type === 1 ? <span className="text-success">Đã đăng ký</span>:<span className="text-danger">Chưa đăng ký</span>}</td>
                  <td> <i 
                  onClick={async()=>{if(window.confirm("Bạn có thật sự muốn xóa")){
                    await deleteContact({token: token, id: val.id});
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
     
        </div>  
       </>
    );
}
export default ListContact;