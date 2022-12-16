
import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { useSelector } from "react-redux";
import Loading from "../../../../components/Loading/Loading";
import { getListNewsAPI,deleteNewsAPI } from "../../../../services/NewsService";

import Paginate from '../../../../components/Paginate/Paginate';
import "./ListNews.scss"
import { Link } from "react-router-dom";

function ListNews(){
  const token = useSelector(state => state.auth.token);
  const [ListNews, getNews] = useState([]);
  const [loading, getLoading] = useState(false);
  const [paginate, setPaginate] = useState(null);
  const [search, setSearch] = useState({
    "name": "",
    "status": "",
    "slug": "",
  });
  const [page, setPage] = useState(1);
  const start = async () =>{
    getNews([]);
    getLoading(true);
    let res = await getListNewsAPI(token, {}, page);
    let data = res.data;
    let dataArr = data.data;

    getLoading(false);
    getNews(dataArr);

    // handle paginate
    let pagination = data.meta.pagination ?? null;
    setPaginate(pagination);
    
  }

  useEffect(()=>{

    start();
  },[page]);
const hanleSearch = async () =>{
    getNews([]);
    getLoading(true); 
    let res = await getListNewsAPI(token, search, page);
    let data = res.data;
    let dataArr = data.data;

    getLoading(false);
    getNews(dataArr);

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
        placeholder="Tên tin" />
    </div>
    <div className="col-2">
      <input type="text" className='form-control'
        onChange={(e)=>setSearch({...search, "code": e.target.value})}
       value={search.code} placeholder="Mã tin " />
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
                  <th >Tên tin</th>
                  <th>Đường dẫn</th>
                  <th>Kích hoạt</th>
                  <th>Nổi bật</th>
                  <th>Danh mục tin</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
              {ListNews.map((val, index)=>(
                  <tr key={index}>
                      <td>{index+1}</td>
                      <td >{val.name}</td>
                      <td>{val.slug}</td>                
                      <td>{val.status === 1 ? <span className="text-success">Đang kích hoạt</span>:<span className="text-danger">Ngừng kích hoạt</span>}</td>
                      <td>{val.featured === 1 ? <span className="text-success">Nổi bật</span>:<span className="text-danger">Không nỗi bật</span>}</td>
                      <td>{val.category_name}</td>
                      <td>
                        <button  type="button" className="btn">
                          <Link to={`/admin/tin-tuc/edit/${val.id}`}>
                            <i style={{cursor: "pointer"}} className="fas fa-edit"></i>
                          </Link>
                        </button>         
                        <button  type="button" className="btn">
                          <i onClick={async()=>
                            {if(window.confirm("Bạn có thật sự muốn xóa"))
                              {await deleteNewsAPI({token: token, id: val.id});
                              start();
                            }}}
                          style={{cursor: "pointer"}} className="fa fa-trash"></i> 
                        </button>
                      </td>
                  </tr>
                ))}  
              </tbody>
          </Table>
          {loading && <Loading />}
          {paginate && <Paginate pagination = {paginate} onChangePage={onChangePage} />}
        </div>  
       </>
    );
}
export default ListNews;