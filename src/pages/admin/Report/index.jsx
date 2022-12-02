
import Table from "react-bootstrap/esm/Table";

function Report() {




    return ( 
        <Table striped bordered hover responsive >
        <thead>
          <tr>
            <th>BÁO CÁO</th>
            <th>CÔNG CỤ</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td >Báo cáo doanh thu theo chuyên khoa</td>      
                <td>
                <a href={`${process.env.REACT_APP_BE}`+'/normal/report/turnover'}  rel="noopener noreferrer" className="btn btn-primary" >Xuất báo cáo</a>

                </td>
         
            </tr>
            <tr>
                <td>Báo cáo đơn hàng</td>
                <td>Báo cáo đơn hàng</td>
            </tr>
            <tr>
                <td>Báo cáo đơn hàng</td>
                <td>Báo cáo đơn hàng</td>
            </tr>
        </tbody>
        
      </Table>
    //   {
    //     loading && <Loading />
    //   }
     );
}





export default Report;