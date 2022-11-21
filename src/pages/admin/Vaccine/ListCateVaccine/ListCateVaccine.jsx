import { useState } from "react";
import { Form, Modal, Table } from "react-bootstrap";   
import AddCateVaccine from "./AddCateVaccine";

function ListCateVaccine() {
    const [modal, setModal] = useState(false);


    const handleShowModel = () => {

        setModal(true);
    }
    const handleHideModel = () => {

        setModal(false);
    }

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
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>
                                <button type="button" className="btn">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button type="button" className="btn">
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </div>
            <Modal size="lg" show={modal} onHide={handleHideModel}>
                <Modal.Header closeButton>
                    <h4>THÊM DANH MỤC VACCINE</h4>
                </Modal.Header>
                <Modal.Body style={{maxHeight: "600px"}} className="overflow-auto">
                    <AddCateVaccine handleHideModel={handleHideModel} handleShowModel={handleShowModel} />
                </Modal.Body>
            </Modal>
        </div>
     );
}

export default ListCateVaccine;