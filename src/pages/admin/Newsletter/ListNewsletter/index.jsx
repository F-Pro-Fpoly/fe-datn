
import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/esm/Table";
import { useSelector } from "react-redux";

import Paginate from "../../../../components/Paginate/Paginate";
import Loading from "../../../../components/Loading/Loading";
import { toast,ToastContainer } from 'react-toastify';
import { getListNewletter } from "../../../../services/NewsletterService";

function ListNewsletter() {

    const token = useSelector(state => state.auth.token);

    const [listContact, setListContact] = useState([]);
    const [loading, getLoading] = useState(false);
    const [paginate, setPaginate] = useState(null);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState({
      "status" : ""
    });

    useEffect(() => {
        const start = async () => {
            getLoading(true)
            setListContact([])
            let res = await getListNewletter({token,page,search}) 
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
  
    // const HandleSearch = async (value) => {
    //   value.preventDefault();
    //   getLoading(true)
    //   setListContact([])
    //   let res = await getContact({token,page,search}) 
    //   let data = res.data 
    //   let dataArr = data.data
    //   getLoading(false)
    //   setListContact(dataArr)
    //   // handle paginate
    //   let pagination = data.meta.pagination ?? null;
    //   setPaginate(pagination);
    // }
 
    
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
          {/* <div className='row mt-3 mb-3' >
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
              <button className='btn btn-primary'  >Tìm kiếm</button>
            </div>
          </div> */}
     
  

          <Table striped bordered hover className='table-striped'>
            <thead>
              <tr>
                <th>STT</th>
                <th>Địa chỉ email</th>
                <th>Ngày đăng ký</th>
              </tr>
            </thead>
            <tbody>
              {
                listContact.map((val, index)=>(
                  <tr key={index}>
                    <td >{index+1}</td>

                    <td>{val.email} </td>
                 
                    <td>{val.created_at}</td>
          
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
export default ListNewsletter;