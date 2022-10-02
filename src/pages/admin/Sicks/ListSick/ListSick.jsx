// import { useEffect } from "react";
// import { useState } from "react";
import Table from "react-bootstrap/esm/Table";
// import { useSelector } from "react-redux";
// import Loading from "../../../../components/Loading/Loading";
// import { getListServiceAPI } from "../../../../services/SicksService";

function ListSick() {

    // const token = useSelector(state => state.auth.token);

    // const [listSick, getListSick] = useState([]);
    // const [loading, getLoading] = useState(false);

    // useEffect(() => {
      
    //     const start = async () => {
    //         getLoading(true)
    //         let res = await getListServiceAPI(token) 
    //         let data = res.data 
    //         let dataArr = data.data
    //         getLoading(false)
    //         getListSick(dataArr)
    //     }
      
    //     start();
    // }, [])


    return ( 
        <>
        <Table striped bordered hover >
          <thead>
            <tr>

              <th>STT</th>
              <th>Mã booking</th>
              <th>Tên phòng ban</th>
              <th>lịch trình</th>
              <th>Lịch khám</th>
              <th>tên người dùng</th>
              <th>Chỉnh sữa</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>1</td>
              <td>B0001</td>
              <td>Cơ xương khớp</td>
              <td>.../</td>
              <td>13:00 - 13:30</td>
              <td>Trần Văn A</td>
              <td><i className="fas fa-edit"></i></td>
              <td><i className="fa fa-trash"></i></td>
            </tr>
            {/* {
              listSick.map((val, index)=>(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{val.code}</td>
                  <td>{val.name}</td>
                  <td><i className="fas fa-edit"></i></td>
                  <td><i className="fa fa-trash"></i></td>
                </tr>
              ))
            } */}
            
          </tbody>
          
        </Table>
        {/* {
          loading && <Loading />
        } */}
        </>
     );
}

export default ListSick;