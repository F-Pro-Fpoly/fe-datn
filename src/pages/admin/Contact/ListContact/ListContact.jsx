
import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/esm/Table";
import { useSelector } from "react-redux";

import "./listContac.scss";
import { deleteContact, getContact } from "../../../../services/ContactService";
import Paginate from "../../../../components/Paginate/Paginate";
import Loading from "../../../../components/Loading/Loading";
import { toast,ToastContainer } from 'react-toastify';

function ListContact() {

    const token = useSelector(state => state.auth.token);

    const [listContact, setListContact] = useState([]);
    const [loading, getLoading] = useState(false);
    const [paginate, setPaginate] = useState(null);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState({
      "status" : ""
    });

    const type = 2;
        const start = async () => {
            getLoading(true)
            setListContact([])
            let res = await getContact({token,page,search, type}) 
            let data = res.data 
            let dataArr = data.data
            getLoading(false)
            setListContact(dataArr)
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
  
    const HandleSearch = async (value) => {
      value.preventDefault();
      getLoading(true)
      setListContact([])
      let res = await getContact({token,page,search,type}) 
      let data = res.data 
      let dataArr = data.data
      getLoading(false)
      setListContact(dataArr)
      // handle paginate
      let pagination = data.meta.pagination ?? null;
      setPaginate(pagination);
    }
 
    
    return ( 
        <>
        {/* <div className="a">   
            <Link to='/admin/chinh-sua-menu/add'>
               <button className="btn btn-primary">Thêm trang mới</button>
            </Link>
        </div> */}

<ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />


        <div className="adminItem">
<h3>PHẢN HỒI LIÊN HỆ</h3>
          <div className='row mt-3 mb-3' >
            <div className="col-2 form-group">
                <select name="status" id="" defaultValue={0}
                  onChange={(e)=>setSearch({...search, "status": e.target.value})}
                className="form-control">
                    <option value="0" disabled>Chọn Trạng thái</option>
                    <option value="8">Đã phản hồi</option>
                    <option value="9">Chưa phản hồi</option>
                </select>
            </div>
            <div className="col-2">
              <button className='btn btn-primary' onClick={HandleSearch} >Tìm kiếm</button>
            </div>
          </div>
     
  

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
                    <button className="btn" onClick={async () => {
                        if(window.confirm(`Bạn có muốn xóa ${val.name}`)){
                            const id = val.id
                            await deleteContact({ token, id} )
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
     );
}
export default ListContact;