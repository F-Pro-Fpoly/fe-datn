import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../../../../../components/Loading/Loading';
import Paginate from "../../../../../components/Paginate/Paginate";
import { getListPatientServiceAPI } from '../../../../../services/UserService';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function ListPatient() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const token = useSelector(state => state.auth.token)
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [paginate, setPaginate] = useState(null);
    const [page, setPage] = useState(1);
    
    const [search,setSearch] = useState({
      "name" : "",
      "date" : "",
     
    });
    const start = async () => {
        setLoading(true)
        let res = await getListPatientServiceAPI(token,page,search);
        let data = res.data
        let dataArr = data.data;
        setLoading(false)
        setList(dataArr)

        // handle paginate
        let pagination = data.meta.pagination ?? null
        setPaginate(pagination)

    }

    const  onChangePage  = (number) => {
        setPage(number)
    }

    useEffect(() => {
        start()
    }, [page])
    

    const HandleSearch = async (e) => {
      e.preventDefault();
      setLoading(true)
      let res = await getListPatientServiceAPI(token,page,search) 
      let data = res.data 
      let dataArr = data.data
      setLoading(false)
      setList(dataArr)

      // handle paginate
      let pagination = data.meta.pagination ?? null;
      setPaginate(pagination);
  }

    return (  
        <>
        
        <div className="row g-3 mb-3 form-group">
        
        <div className="col-md-3">
            <input type="text" name="code" 
            placeholder="Nhập họ và tên người bệnh"
            className="form-control" 
            onChange={(e)=>setSearch({...search, "name": e.target.value})}
            />
        </div>
        <div className="col-md-3">
            <input type="date" name="date" 
            className="form-control"
            onChange={(e)=>setSearch({...search, "date": e.target.value})}
            />
        </div>

        <div className="col-md-2" >
          <button type="submit" onClick={HandleSearch} className="btn btn-primary">Tìm kiếm</button> 
        </div>
      </div>
      
      <div className="table-responsive">
            <Table  bordered hover>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Họ và tên</th>
                  <th>Ngày sinh</th>
                  <th>Ngày khám gần nhất</th>       
                  <th>Hồ sơ bệnh án</th>
                  <th>Thao tác</th>     
                </tr>
              </thead>
              <tbody>
                {
                  list.length == 0 ? 
                    <tr >
                     <td colSpan="5" style={{textAlign:"center"}}> { loading ? <Loading /> :  "Hiện chưa có người bệnh"} </td>
                  </tr>
                
                  :

                  list.map((val, index)=>(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{val.name}</td>
                      <td>{val.date}</td>
                      <td>{val.lastBooking ?
                       <span style={{color:"green"}}>{val.lastBooking}</span> 
                       :
                        <span className='text-warning'>Chưa đặt lịch khám bao giờ</span>}</td>
                      <td>
                        <Link onClick={handleShow}> Xem hồ sơ</Link>
                      </td>
                    
                      <td><Link to={`/ho-so-ca-nhan/chi-tiet-danh-sach-lich-kham/${val.id}`}><i className="fas fa-edit"></i></Link></td>
                    </tr>
                  ))
                }
                
              </tbody>
              {paginate && <Paginate pagination = {paginate} onChangePage={onChangePage} />}   
            </Table>      
         
        </div>


        <Modal show={show} onHide={handleClose}>
                    
                    <div className="mod" > 
                        <Modal.Header closeButton>
                        <Modal.Title>Hồ sơ bệnh án</Modal.Title>
                        </Modal.Header>
                 
                        <Modal.Body>

                            <h3>để gì trong đây giờ 😒😒😒😒😒</h3>

                                        {/* <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                            
                                            <Form.Control type="text" name="name" className="form-control" placeholder="Nhập họ tên" />
                                            
                                        </Form.Group>
                                        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                            
                                        <Form.Control type="hidden" name="type" className="form-control" value="1" />
                                            
                                        </Form.Group>
                                        <Form.Group className="mb-3 form-group " controlId="formBasicEmail">
                                            
                                            <Form.Control type="email" name="email" className="form-control" placeholder="Nhập địa chỉ email" />
                                            
                                        </Form.Group>
                                        <Form.Group className="mb-3 form-group " controlId="formBasicEmail">
                                            
                                            <Form.Control type="text" name="phone" className="form-control" placeholder="Nhập số điện thoại" />
                                            
                                        </Form.Group>
                                        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                        
                                            <Form.Control type="text" name="contents" className="form-control" placeholder="Nhập vấn đề quan tâm" />
                                            
                                        </Form.Group>
                                 */}
                                
                        </Modal.Body>
                        <Modal.Footer>
                       
                        <Button variant="primary"   onClick={handleClose}>
                            Đóng
                        </Button>
                        </Modal.Footer>
                       
                    </div>
                    </Modal>

        </>

    );
}

export default ListPatient;