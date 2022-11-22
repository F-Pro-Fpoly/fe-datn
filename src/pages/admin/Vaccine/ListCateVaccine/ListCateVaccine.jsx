import { useEffect } from "react";
import { useState } from "react";
import { Form, Modal, Table } from "react-bootstrap";   
import { useSelector } from "react-redux";
import { listVaccineCategory } from "../../../../services/VaccineCategory";
import AddCateVaccine from "./AddCateVaccine";
import ReactPaginate from 'react-paginate';

function ListCateVaccine() {
    const [modal, setModal] = useState(false);
    const token = useSelector(state => state.auth.token);
    const [listCate, setListCate] = useState([]);
    const [pagination, setPagination] = useState({});

    const handleShowModel = () => {

        setModal(true);
    }
    const handleHideModel = () => {

        setModal(false);
    }
    const start = async () => {
        try {
            let res = await listVaccineCategory({token, limit: 10});
            let data = res.data.data;
            let pagination = res.data.meta.pagination ?? {};
            setListCate(data);
            setPagination(pagination);
        } catch (error) {
            
        }
    }
    const handlePageClick = async (page) =>{
        try {
            page = page + 1; 
            let res = await listVaccineCategory({token, limit: 10, page: page ?? null});
            let data = res.data.data;
            setListCate(data);
        } catch (error) {
            
        }
    }
    const updateCategory = async (id) => {

    }
    useEffect(() => {start()}, [])

    return ( 
        <div className="adminWrapper">
            <h3>DANH MỤC VACCINE</h3>
            <div className="adminItem">
                <div className="row">
                    <Form.Group className="col-3">
                        <Form.Label htmlFor="" className="form-lable-fro">Mã danh mục</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="col-3">
                        <Form.Label htmlFor="" className="form-lable-fro">Tên danh mục</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </div>
            </div>
            <div className="adminItem">
                <div className="my-2">
                    <button className="btn btn-success" onClick={handleShowModel}>Thêm mới</button>
                </div>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã danh mục</th>
                            <th>Tên danh mục</th>
                            <th>Slug</th>
                            <th>Danh mục cha</th>
                            <th>Action</th>
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
                                    <td>{item.parent_name ?? "Không"}</td>
                                    <td>
                                        <button type="button" className="btn" onClick={()=>updateCategory(item.id)}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </button>
                                        <button type="button" className="btn">
                                            <i className="fa-solid fa-trash"></i>
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
            <Modal size="lg" show={modal} onHide={handleHideModel}>
                <Modal.Header closeButton>
                    <h4>THÊM DANH MỤC VACCINE</h4>
                </Modal.Header>
                <Modal.Body style={{maxHeight: "600px"}} className="overflow-auto">
                    <AddCateVaccine handleHideModel={handleHideModel} handleShowModel={handleShowModel} startList={start} />
                </Modal.Body>
            </Modal>
        </div>
     );
}

export default ListCateVaccine;