import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../../components/Loading/Loading";
import { listVaccine,deleteVaccine } from "../../../services/VaccineService";
import { Form, Modal, Table } from "react-bootstrap";
import AddVaccine from "./AddVaccine";  
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
function ListVaccine() {
    const token = useSelector(state => state.auth.token);
    const [listCate, setListCate] = useState([]);
    const [pagination, setPagination] = useState({});
    const [modal, setModal] = useState(false);
    const [update, setUpdate] = useState({
        'isUpdate': false,
        'id': null,
    });

    const handleShowModel = () => {

        setModal(true);
    }
    const handleHideModel = () => {
        setUpdate({...update, isUpdate: false, id: null});
        setModal(false);
    }
    const start = async () => {
        try {
            let res = await listVaccine({token, limit: 10});
            let data = res.data.data;
            let pagination = res.data.meta.pagination ?? {};
            setListCate(data);
            setPagination(pagination);
        } catch (error) {
            
        }
    }
    const handlePageClick = async (page) =>{
        try {
            page = page.selected;
            page = page + 1; 
            let res = await listVaccine({token, limit: 10, page: page ?? null});
            let data = res.data.data;
            setListCate(data);
        } catch (error) {
            
        }
    }
    const updateVaccine = async (id) => {
        setUpdate({...update, isUpdate: true, id: id});
        setModal(true)
    }
    useEffect(() => {start()}, [])
    
    return ( 
        <div className="adminWrapper">
            <h3>DANH SÁCH VACCINE</h3>
            <div className="adminItem">
                <div className="row">
                    <Form.Group className="col-3">
                        <Form.Label htmlFor="" className="form-lable-fro">Mã Vaccine</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="col-3">
                        <Form.Label htmlFor="" className="form-lable-fro">Tên Vaccine</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </div>
            </div>
            
            <div className="adminItem">
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã Vaccine</th>
                            <th>Tên Vaccine</th>
                            <th>Slug</th>
                            <th>Giá</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listCate.map((item, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.code}</td>
                                    <td>{item.name}</td>
                                    <td>{item.slug}</td>
                                    <td>{item.price_formated}</td>
                                    <td>
                                        <Link 
                                            type="button" 
                                            className="btn"
                                            to={`/admin/vaccine/update/${item.id}`}
                                        >
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </Link>
                                        <button type="button" className="btn">
                                        <i 
                                            onClick={async()=>{if(window.confirm("Bạn có thật sự muốn xóa")){
                                                await deleteVaccine({token: token, id: item.id});
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
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pagination.total_pages ?? null}
                    previousLabel="< previous"
                    className="pagination"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    activeClassName="active"
                    previousClassName="page-item"
                    nextClassName="page-item"
                    previousLinkClassName="page-link"
                    nextLinkClassName="page-link"
                />
            </div>
        </div>
     );
}

export default ListVaccine;