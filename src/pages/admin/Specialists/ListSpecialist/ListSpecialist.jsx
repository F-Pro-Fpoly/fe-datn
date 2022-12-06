import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { useSelector } from "react-redux";
import Loading from "../../../../components/Loading/Loading";
import { getListServiceAPI,deleteSpecialist } from "../../../../services/SpecialistService";
import Paginate from '../../../../components/Paginate/Paginate';
import "./ListSpecialist.scss"
import { Link } from "react-router-dom";

function ListSpecialist() {

    const token = useSelector(state => state.auth.token);

    const [ListSpecialist, getListListSpecialist] = useState([]);
    const [loading, getLoading] = useState(false);
    const [paginate, setPaginate] = useState(null);
    const [page, setPage] = useState(1);
    
   
      
        const start = async () => {
            getLoading(true)
            getListListSpecialist([])
            let res = await getListServiceAPI(token,page) 
            let data = res.data 
            let dataArr = data.data
            getLoading(false)
            getListListSpecialist(dataArr)

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
        <Table striped bordered hover responsive >
          <thead>
            <tr>

              <th>STT</th>
              <th>Mã chuyên khoa</th>
              <th>Tên chuyên khoa</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {
              ListSpecialist.map((val, index)=>(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{val.code}</td>
                  <td>{val.name}</td>
                  <td className="button">
                  <Link to={`/admin/specialist/update/${val.id}`}><i className="fas fa-edit"></i></Link>  
                  | 
                  <button type="button" className="btn">
                                        <i 
                                            onClick={async()=>{if(window.confirm("Bạn có thật sự muốn xóa")){
                                                await deleteSpecialist({token: token, id: val.id});
                                                start();
                        }}}
                     style={{cursor: "pointer"}} className="fa fa-trash"></i>
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
        </>
     );
}

export default ListSpecialist;