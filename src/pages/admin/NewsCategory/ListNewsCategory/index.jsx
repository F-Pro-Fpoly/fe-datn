
import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { useSelector } from "react-redux";
import Loading from "../../../../components/Loading/Loading";
import { getListNewsCatgoryAPI,deleteNewsCategory } from "../../../../services/NewsCategory";
import ReactPaginate from 'react-paginate';

// import "./ListSpecialist.scss"
import { Link } from "react-router-dom";

function ListNewsCategory(){
  const token = useSelector(state => state.auth.token);

  const [listNewsCategory, getListNewsCatgory] = useState([]);
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
    "code": ""
  });
  const [page, setPage] = useState(1);
  // paginate

  const start = async () =>{
    getListNewsCatgory([]);
    getLoading(true);
    let res = await getListNewsCatgoryAPI(token, {}, page);
    let data = res.data;
    let dataArr = data.data;

    getLoading(false);
    getListNewsCatgory(dataArr);

    // handle paginate
    let pagination = data.meta.pagination ?? null;
    setPaginate(pagination);
    
  }
  useEffect(()=>{

    start();
  },[page]);

  const hanleSearch = async () =>{
    getListNewsCatgory([]);
    getLoading(true); 
    let res = await getListNewsCatgoryAPI(token, search, page);
    let data = res.data;
    let dataArr = data.data;

    getLoading(false);
    getListNewsCatgory(dataArr);

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
      getListNewsCatgory([]);
      getLoading(true);
      let res = await getListNewsCatgoryAPI(token,search, page1);
      let data = res.data;
      let dataArr = data.data;

      getLoading(false);
      getListNewsCatgory(dataArr);

      // handle paginate
      let pagination = data.meta.pagination ?? null;
      setPaginate(pagination);
    } catch (error) {
      
    }
  }

    return(
    <>
    <div className='row'>
    <div className="col-2">
      <input type="text" className='form-control' value={search.name} 
        onChange={(e)=>setSearch({...search, "name": e.target.value})}
        placeholder="Tên loại tin" />
    </div>
    <div className="col-2">
      <input type="text" className='form-control'
        onChange={(e)=>setSearch({...search, "code": e.target.code})}
       value={search.code} placeholder="Mã danh mục" />
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
              <th>Mã Tin</th>
              <th>Tên tin</th>
              <th>Đường dẫn</th>
              <th>Kích hoạt</th>
            </tr>
          </thead>
          <tbody>
          {
              listNewsCategory.map((val, index)=>(
              <tr key={index}>
                  <td>{index+1}</td>
                  <td>{val.code}</td>
                  <td>{val.name}</td>
                  <td>{val.slug}</td>
                  <td>{val.status === 1 ? <span className="text-success">Đang kích hoạt</span>:<span className="text-danger">Ngừng kích hoạt</span>}</td>
                  <td>
                  <Link to={`/admin/danh-muc/update/${val.id}`}><i style={{cursor: "pointer"}} className="fas fa-edit"></i></Link>
                  | <i 
                  onClick={async()=>{if(window.confirm("Bạn có thật sự muốn xóa")){
                    await deleteNewsCategory({token: token, id: val.id});
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
        
        </div>
        </>
    );
}
export default ListNewsCategory;