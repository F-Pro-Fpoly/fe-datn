import { useEffect } from "react";
import { useState } from "react";
import { Form, Modal, Table } from "react-bootstrap";   
import { useSelector, useDispatch } from "react-redux";
import { listVaccineCategory,deleteVaccinetCategory } from "../../../../services/VaccineCategory";
import AddCateVaccine from "./AddCateVaccine";
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {setLoading} from "../../../../redux/slices/InterfaceSile"

function ListCateVaccine() {
    const [modal, setModal] = useState(false);
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const [listCate, setListCate] = useState([]);
    const [pagination, setPagination] = useState({});
    const [update, setUpdate] = useState({
        'isUpdate': false,
        'id': null,
    });
    const [search, setSearch] = useState({
        code: '',
        name: ''
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
            dispatch(setLoading(true))
            let res = await listVaccineCategory({token, limit: 10});
            let data = res.data.data;
            let pagination = res.data.meta.pagination ?? {};
            setListCate(data);
            setPagination(pagination);
            dispatch(setLoading(false))
        } catch (error) {
            dispatch(setLoading(false))
        }
    }
    const handlePageClick = async (page) =>{
        try {
            dispatch(setLoading(true))
            page = page + 1; 
            let res = await listVaccineCategory({token, limit: 10, page: page ?? null});
            let data = res.data.data;
            setListCate(data);
            dispatch(setLoading(false))

        } catch (error) {
            dispatch(setLoading(false))
            
        }
    }
    const updateCategory = async (id) => {
        setUpdate({...update, isUpdate: true, id: id});
        setModal(true)
    }
    useEffect(() => {start()}, []);

    const  handleSearch = async () => {
        try {
            dispatch(setLoading(true))
            let res = await listVaccineCategory({token, limit: 10, search: search});
            let data = res.data.data;
            let pagination = res.data.meta.pagination ?? {};
            setListCate(data);
            setPagination(pagination);
            dispatch(setLoading(false))
        } catch (error) {
            dispatch(setLoading(false))
        }
    }

    return ( 
        <div className="adminWrapper">
            <h3>DANH MỤC VACCINE</h3>
            <div className="adminItem">
                <div className="row">
                    <Form.Group className="col-3">
                        <Form.Label htmlFor="" className="form-lable-fro">Mã danh mục</Form.Label>
                        <Form.Control 
                            type="text"
                            value={search.code}
                            onChange={(e) => setSearch({...search, code: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group className="col-3">
                        <Form.Label htmlFor="" className="form-lable-fro">Tên danh mục</Form.Label>
                        <Form.Control 
                            type="text"
                            value={search.name}
                            onChange={(e) => setSearch({...search, name: e.target.value})}
                        />
                    </Form.Group>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={handleSearch}
                        >Tìm kiếm</Button>
                    </div>
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
                                    <td>{item.parent_name ?? "Không"}</td>
                                    <td>
                                        <button 
                                            type="button" 
                                            className="btn"
                                            onClick={()=>updateCategory(item.id)}
                                        >
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </button>
                                        <button type="button" className="btn">
                                        <i 
                                            onClick={async()=>{if(window.confirm("Bạn có thật sự muốn xóa")){
                                                await deleteVaccinetCategory({token: token, id: item.id});
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
            <Modal size="lg" show={modal} onHide={handleHideModel}>
                <Modal.Header closeButton>
                    <h4>CÂP NHẬT DANH MỤC VACCINE</h4>
                </Modal.Header>
                <Modal.Body style={{maxHeight: "600px"}} className="overflow-auto">
                    <AddCateVaccine 
                        handleHideModel={handleHideModel} 
                        handleShowModel={handleShowModel} 
                        startList={start}
                        update={update} 
                    />
                </Modal.Body>
            </Modal>
        </div>
     );
}

export default ListCateVaccine;