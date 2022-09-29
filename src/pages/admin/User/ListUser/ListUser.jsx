import Table from 'react-bootstrap/Table';
function ListUser() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Active</th>
          <th>Phone</th>
          <th>Avata</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>222 Ngô Thì Nhậm </td>
          <td></td>
          <td>099292222</td>
          <td>hinh1.pnv</td>
          <td><i className="fas fa-edit"></i></td>
          <td><i className="fa fa-trash"></i></td>
        </tr>
        <tr>
        <td></td>
          <td>2</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>222 Ngô Thì Nhậm </td>
          <td></td>
          <td>099292222</td>
          <td>hinh1.pnv</td>
          <td><i className="fas fa-edit"></i></td>
          <td><i className="fa fa-trash"></i></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ListUser;