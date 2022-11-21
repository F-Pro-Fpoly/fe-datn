
import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/esm/Table";
import { useSelector } from "react-redux";

import "./listContac.scss";
import { getContact } from "../../../../services/ContactService";
import Paginate from "../../../../components/Paginate/Paginate";
import Loading from "../../../../components/Loading/Loading";


function ListContact() {

    const token = useSelector(state => state.auth.token);

    const [listContact, setListContact] = useState([]);
    const [loading, getLoading] = useState(false);
    const [paginate, setPaginate] = useState(null);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
      
        const start = async () => {
            getLoading(true)
            setListContact([])
            let res = await getContact({token,page}) 
            let data = res.data 
            let dataArr = data.data
            getLoading(false)
            setListContact(dataArr)
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
        {/* <div className="a">   
            <Link to='/admin/chinh-sua-menu/add'>
               <button className="btn btn-primary">Thêm trang mới</button>
            </Link>
        </div> */}
        <div className="adminItem">
          <Table striped bordered hover className='table-striped'>
            <thead>
              <tr>
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Email</th>
                <th>Trạng thái</th>
                <th>Ngày liên hệ</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {
                listContact.map((val, index)=>(
                  <tr key={index   }>
                    <td >{index+1}</td>
                    <td>{val.name}</td>
                    <td>{val.email} </td>
                    {val.status_id == 9 ? 
                      <td style={{color:"red"}}>{val.status}</td> 
                      :  
                      <td style={{color:"green"}}>{val.status}</td>
                    }
                    <td>{val.created_at}</td>
                    <td className="button" >

                    <Link to={`/admin/lien-he/tra-loi-lien-he/${val.id}`  } className="btn">
                                                <i className="fas fa-edit"></i>
                    </Link> |
                      <i className="fa fa-trash"></i>
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
     );
}
export default ListContact;