
import "./ListAdmin.scss";
function ListAdmin () {

    return(
    <div className="container">
        <div className="top">
        <p>Danh sách khách hàng</p>

       <div> 
            <input type="text" className="form-control" placeholder="Tìm kiếm? " />
       </div>
       
        </div>
        <table className="table table-striped" > 
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>         
            </tbody>
           
      </table>
        <nav aria-label="Page navigation example">
            {/* <ul className="pagination justify-content-start">
              
            </ul> */}
            <ul className="pagination justify-content-end">
                <li className="page-item">
                    <p>Hiện có 5 dòng trong 100 dòng</p>
                </li>
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </div>

    );


}

export default ListAdmin;