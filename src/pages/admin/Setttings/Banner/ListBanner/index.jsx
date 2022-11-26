import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/esm/Table";
import { useSelector } from "react-redux";
import Loading from "../../../../../components/Loading/Loading";
import Paginate from '../../../../../components/Paginate/Paginate';
import { deleteBanner, getListBanner } from "../../../../../services/BannerService";
// import "./ListMenu.scss";

function ListBanner() {

    const token = useSelector(state => state.auth.token);
    const [ListBanner, getListListBanner] = useState([]);
    const [loading, getLoading] = useState(false);
    const [paginate, setPaginate] = useState(null);
    const [page, setPage] = useState(1);
    
    
      
      const start = async () => {
          getLoading(true)
          getListListBanner([])
          let res = await getListBanner({token,page}) 
          let data = res.data 
          let dataArr = data.data
          getLoading(false)
          getListListBanner(dataArr)
          // handle paginate
          let pagination = data.meta.pagination ?? null;
          setPaginate(pagination);
      }
      
       
    useEffect(() => {
      start();
    }, [page])
    const onChangePage = (number) =>{
      setPage(number);
    }


    return ( 
        <>
 
        <div className="adminItem">
        <div className="a">   
            <Link to='/admin/quan-ly-banner/add'>
               <button className="btn btn-primary">Thêm slide</button>
            </Link>
        </div>
          <Table striped bordered hover className='table-striped'>
            <thead>
              <tr>
                <th>STT</th>
                <th>tên banner</th>
                <th>Trạng thái</th>
                <th>Ngày Cập nhật</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {
                ListBanner.map((val, index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{val.name}</td>
                    <td>{val.status == 1 ? "Đang kích hoạt" : " Đã tắt"}</td>
                    <td>{val.updated_at}</td>
                    <td className="button">
                    <Link to={`/admin/quan-ly-banner/update/${val.id}`} className="btn">
                                                <i className="fas fa-edit"></i>
                    </Link> |
                    <button className="btn" onClick={async () => {
                        if(window.confirm(`Bạn có muốn xóa ${val.name}`)){
                            const id = val.id
                            await deleteBanner({ token, id} )
                            start()
                        }
                    }}>
                        <i className="fas fa-trash"></i>
                    </button>
                    </td>
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
    )
}

export default ListBanner;