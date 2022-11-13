import Table from "react-bootstrap/esm/Table";


function ListNews(){
    return(
        <div className="listNews">
                <Table>
          <thead>
            <tr>

              <th>STT</th>
              <th>Chủ đề</th>
              <th>Mã tin tức</th>
              <th>Đường dẫn</th>
              <th>Kích hoạt</th>
              <th>Nổi bật</th>
              <th>Nội dung</th>

            </tr>
          </thead>
          <tbody>
         
                <tr >
                  <td>1</td>
                  <td>Vacsin covid</td>
                  <td>gnt123</td>
                  <td>vacsin-covid</td>
                  <td>Kích hoạt</td>
                  <td>Nổi bật</td>
                  <td>Lịch tiêm chủ đã có tại trang chủ</td>

                  <td><i className="fas fa-edit" ></i> | <i  className="fa fa-trash"></i></td>
                </tr>
          
            
            
          </tbody>
          
          </Table>
        </div>
    );
}
export default ListNews;