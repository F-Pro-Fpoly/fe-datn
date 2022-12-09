
import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/esm/Table";
import { useSelector } from "react-redux";

// import "./listContac.scss";
import { deleteContact, getContact } from "../../../../../services/ContactService";
import Paginate from "../../../../../components/Paginate/Paginate";
import Loading from "../../../../../components/Loading/Loading";
import { toast,ToastContainer } from 'react-toastify';

function ListComment() {

    const token = useSelector(state => state.auth.token);

    const [listComment, setListComment] = useState([]);
    const [loading, getLoading] = useState(false);
    const [paginate, setPaginate] = useState(null);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState({
      "name" : ""
    });

    const type = 0;
        const start = async () => {
            getLoading(true)
            setListComment([])
            let res = await getContact({token,page,search, type}) 
            let data = res.data 
            let dataArr = data.data
            getLoading(false)
            setListComment(dataArr)
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
      setListComment([])
      let res = await getContact({token,page,search,type}) 
      let data = res.data 
      let dataArr = data.data
      getLoading(false)
      setListComment(dataArr)
      // handle paginate
      let pagination = data.meta.pagination ?? null;
      setPaginate(pagination);
    }
 
    
    return ( 
        <>

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
          <div className='row mt-3 mb-3' >
            <div className="col-2 form-group">
            <input type="text" className='form-control' value={search.name} 
        onChange={(e)=>setSearch({...search, "name": e.target.value})}
        placeholder="Họ tên" />
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
                <th>Ngày bình luận</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {
                listComment.map((val, index)=>(
                  <tr key={index   }>
                    <td >{index+1}</td>
                    <td>{val.name}</td>
                    <td>{val.email} </td>
                    <td>{val.created_at}</td>
                    <td className="button" >
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
export default ListComment;