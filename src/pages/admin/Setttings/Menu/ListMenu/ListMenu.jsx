import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/esm/Table";
import { useSelector } from "react-redux";
import Loading from "../../../../../components/Loading/Loading";
import { getListServiceAPI } from "../../../../../services/MenuService";
import Paginate from '../../../../../components/Paginate/Paginate';
import "./ListMenu.scss";

function ListMenu() {

    const token = useSelector(state => state.auth.token);

    const [ListMenu, getListListMenu] = useState([]);
    const [loading, getLoading] = useState(false);
    const [paginate, setPaginate] = useState(null);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
      
        const start = async () => {
            getLoading(true)
            getListListMenu([])
            let res = await getListServiceAPI(token,page) 
            let data = res.data 
            let dataArr = data.data
            getLoading(false)
            getListListMenu(dataArr)
            // handle paginate
            let pagination = data.meta.pagination ?? null;
            setPaginate(pagination);
        }
      
        start();
    }, [page])


    const onChangePage = (number) =>{
      setPage(number);
    }

    return ( 
        <>
        <div className="a">   
            <Link to='/admin/chinh-sua-menu/add'>
               <button className="btn btn-primary">Thêm trang mới</button>
            </Link>
        </div>

        <Table striped bordered hover >
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên trang</th>
              <th>font</th>
              <th>Đường dẫn trang</th>
              <th>Trạng thái</th>
              <th>Sắp xếp</th>
              <th>Ngày tạo</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {
              ListMenu.map((val, index)=>(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{val.name}</td>
                  <td dangerouslySetInnerHTML={{__html: val.font}} /> 
                  <td>{val.slug}</td>
                  <td>{val.status === 1 ? <span style={{color: "green"}}>Đang kích hoạt</span> : <span style={{color: "red"}}>Ngừng kích hoạt</span> }</td>
                  <td>{val.sort}</td>
                  <td>{val.created_at}</td>
                  <td className="button"><i className="fas fa-edit"></i> | <i className="fa fa-trash"></i></td>
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

export default ListMenu;