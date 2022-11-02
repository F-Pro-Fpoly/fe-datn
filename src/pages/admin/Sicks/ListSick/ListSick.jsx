import { useEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { useSelector } from "react-redux";
import Loading from "../../../../components/Loading/Loading";
import { getListServiceAPI } from "../../../../services/SicksService";
import Paginate from '../../../../components/Paginate/Paginate';
function ListSick() {

    const token = useSelector(state => state.auth.token);

    const [listSick, getListSick] = useState([]);
    const [loading, getLoading] = useState(false);
    const [paginate, setPaginate] = useState(null);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
      
        const start = async () => {
            getLoading(true)
            getListSick([])
            let res = await getListServiceAPI(token,page) 
            let data = res.data 
            let dataArr = data.data
            getLoading(false)
            getListSick(dataArr)

            // handle paginate
            let pagination = data.meta.pagination;
            setPaginate(pagination);
        }
      
        start();
    }, [page])


    const onChangePage = (number) =>{
      setPage(number);
    }

    return ( 
        <>
        <Table striped bordered hover  responsive>
          <thead>
            <tr>

              <th>STT</th>
              <th>Mã Bệnh</th>
              <th>Tên bệnh</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {
              listSick.map((val, index)=>(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{val.code}</td>
                  <td>{val.name}</td>
                  <td><i className="fas fa-edit" style={{cursor: "pointer"}}></i> | <i style={{cursor: "pointer"}} className="fa fa-trash"></i></td>
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

export default ListSick;