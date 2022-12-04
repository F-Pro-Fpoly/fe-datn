import { useEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { useSelector } from "react-redux";
import Loading from "../../../../components/Loading/Loading";
import { getListServiceV2,deleteSicks } from "../../../../services/SicksService";
import Pagination from 'react-bootstrap/Pagination';
import Paginate from '../../../../components/Paginate/Paginate';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
function ListSick() {

    const token = useSelector(state => state.auth.token);

    const [listSick, getListSick] = useState([]);
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
      "code": "",
    });
    const [page, setPage] = useState(1);
    // paginate
  
    const start = async () =>{
      getListSick([]);
      getLoading(true);
      let res = await getListServiceV2({token,search:{limit:5, page:page}});
      let data = res.data;
      let dataArr = data.data;
      getLoading(false);
      getListSick(dataArr);
  
      // handle paginate
      let pagination = data.meta.pagination ?? null;
      setPaginate(pagination);
      
    }
    useEffect(()=>{
  
      start();
    },[page]);
    const hanleSearch = async () =>{
      getListSick([]);
      getLoading(true);
      let res = await getListServiceV2(token, search,page);
      let data = res.data;
      let dataArr = data.data;
  
      getLoading(false);
      getListSick(dataArr);
  
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
          <input type="text" className='form-control' value={search.code} 
            onChange={(e)=>setSearch({...search, "code": e.target.value})}
            placeholder="Mã bệnh" />
        </div>
        <div className="col-2">
          <input type="text" className='form-control'
            onChange={(e)=>setSearch({...search, "name": e.target.value})}
           value={search.name} placeholder="Tên bệnh" />
        </div>
        <div className='col-2 mb-3'>
          <button className='btn btn-primary' onClick={hanleSearch}>Tìm kiếm</button>
        </div>
      </div>

      <div className='table_admin'>
        
        <Table striped bordered hover responsive className='table-striped'>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã Bệnh</th>
              <th>Tên bệnh</th>
              <th>Đường đẫn</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {
              listSick.map((val, index)=>(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{val.code}</td>
                  <td>{val.name}</td>
                  <td>{val.slug}</td>
                  <td className="button" >
                      <Link to={`/admin/sick/update/${val.id}`} className="btn">
                        <i style={{cursor: "pointer"}} className="fas fa-edit"></i>
                      </Link>                   
                      | <i onClick={
                              async()=>{
                                  if(window.confirm("Bạn có thật sự muốn xóa"))
                                  {
                                    await deleteSicks({token: token, id: val.id});
                                    start();
                                  }
                                    }
                              }
                              style={{cursor: "pointer"}} className="fa fa-trash">
                        </i>
                  </td>
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

export default ListSick;