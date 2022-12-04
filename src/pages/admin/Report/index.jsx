
import Table from "react-bootstrap/esm/Table";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
function Report() {

  
  const [show, setShow] = useState(false);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
  const [showdetail, setShowdetail] = useState(false);

  const handleCloseDetail = () => setShowdetail(false);
  const handleShowDetail = () => setShowdetail(true);

  const [date,setDate] = useState({
    'from' : '',
    'to' : '', 
  })

  const [code, setCode] = useState('')


  

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
                <a href={`${process.env.REACT_APP_BE}`+'normal/report/turnover'}  rel="noopener noreferrer" className="btn btn-primary" >Xuất báo cáo</a>
                </td>
         
            </tr>
            <tr>
                <td>Báo cáo lịch khám</td>

                <td>
                <a className="btn btn-primary"  rel="noopener noreferrer"  onClick={handleShow}>Xuất báo cáo</a>
                </td>

                <Modal show={show} onHide={handleClose}>
                        
                        <div className="mod" > 
                            <Modal.Header closeButton>
                            <Modal.Title>BÁO CÁO LỊCH KHÁM</Modal.Title>
                            </Modal.Header>
                            <Form  method = "Post" >
                            <Modal.Body>
           
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">Từ ngày</label>
                                    <input type="date" className="form-control" 
                                    name="from"
                                    onChange={(e) => setDate({...date, "from": e.target.value})}
                                
                                 />
                                </div>
                            
                                <div className="col-md-6">
                                    <label className="form-label">Đến ngày</label>
                                    <input type="date"  className="form-control" 
                                     name="to"
                                     onChange={(e) => setDate({...date, "to": e.target.value})}
                                    />
                                </div>
                             </div>
                                    
                                    
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Đóng
                            </Button>
                      
                            <a onClick={handleClose} href={`${process.env.REACT_APP_BE}`+`normal/report/bookingDay?from=${date.from}&to=${date.to}`}  rel="noopener noreferrer" className="btn btn-primary" >Xuất báo cáo</a>
                 
                            </Modal.Footer>
                            </Form>
                        </div>
                </Modal>
                
            </tr>
            <tr>
                <td>Báo cáo chi tiết của lịch khám</td>
                <td>
                    <a className="btn btn-primary"  rel="noopener noreferrer"  onClick={handleShowDetail}>Xuất báo cáo</a>
                </td>

                
                <Modal show={showdetail} onHide={handleCloseDetail}>
                        
                        <div className="mod" > 
                            <Modal.Header closeButton>
                            <Modal.Title>BÁO CÁO LỊCH KHÁM</Modal.Title>
                            </Modal.Header>
                            <Form  method = "Post" >
                            <Modal.Body>
           
                          
                                <div className="col-md-12">
                                    <label className="form-label">Mã lịch khám</label>
                                    <input type="text" className="form-control" 
                                    name="code"
                                    required
                                    onChange={(e) => setCode({ code : e.target.value})}
                                    placeholder="Nhập mã lịch khám"
                                 />
                                </div>
                            
                     
                                    
                                    
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseDetail}>
                                Đóng
                            </Button>
                      
                            <a  
                           
                            onClick={handleCloseDetail} href={`${process.env.REACT_APP_BE}`+`normal/report/bookingCode?code=${code.code}`}  rel="noopener noreferrer" className="btn btn-primary" >Xuất báo cáo</a>
                 
                            </Modal.Footer>
                            </Form>
                        </div>
                </Modal>


            </tr>
        </tbody>
        
      </Table>
    //   {
    //     loading && <Loading />
    //   }
     );
}





export default Report;