import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../../../components/Loading/Loading";
import Paginate from "../../../../components/Paginate/Paginate";
import {getDepartment} from "../../../../services/DepartmentService"

function ListDepartment() {
    const token = useSelector(state => state.auth.token);

    const [departments, setDepartments] = useState([]);
    const [loading, getLoading] = useState(false);
    const [paginate, setPaginate] = useState(null);
    const [page, setPage] = useState(1);

    const start = async () => {
        getLoading(true)
        setDepartments([])
        let res = await getDepartment({token,page}) 
        let data = res.data 
        let dataArr = data.data
        getLoading(false)
        setDepartments(dataArr)
    }

    const onChangePage = (number) =>{
        setPage(number);
    }

    useEffect(() =>{
        start();
    },[page])

    return ( 
        <div className="adminItem">
            <Table striped bordered hover className='table-striped'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Code</th>
                        <th>Chuyên khoa</th>
                        <th>Kích hoạt</th>
                        <th>Chỉnh sửa</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody> 
                    {departments.map((val, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{val.name}</td>
                                <td>{val.code}</td>
                                <td>{val.specialist_name}</td>
                                <td>
                                    {val.active === 0 ? <span className="text-success">Đang kích hoạt</span>:<span className="text-danger">Ngừng kích hoạt</span>}
                                </td>
                                <td>
                                    {val.update_by_name}
                                </td>
                                <td>
                                    <Link to={`/admin/phong-ban/update/${val.id}`} className="btn">
                                        <i className="fas fa-edit"></i>
                                    </Link> |
                                    <button className="btn">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            {loading && <Loading />}
            {paginate && <Paginate pagination = {paginate} onChangePage={onChangePage} />}
        </div>
     );
}

export default ListDepartment;