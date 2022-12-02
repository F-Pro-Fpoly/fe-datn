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
                <td >Báo cáo đơn hàng</td>
                <td><button className="btn btn-primary">Xuất báo cáo</button></td>
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