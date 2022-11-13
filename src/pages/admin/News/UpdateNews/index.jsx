import "./UpdateNews.scss";
import { Button, Form } from "react-bootstrap";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



function UpdateNews(){
    return(
        <div className="updateNews">
            <div className="row">
            <h2 className="UpdateNews-heading">Cập nhật tin tức</h2>
                <form method="post" >
                <div className="col-4">
                            <label htmlFor="" className="form-label">Kích hoạt</label>
                            <select name="active" id="" className="form-control">
                                <option>--Chọn--</option>
                                <option value="0">Không kích hoạt</option>
                                <option value="1">Kích hoạt</option>
                            </select>
                        </div>

                    <div className="form-group mb-2">
                        <label htmlFor="" className="form-label">Nhập tiêu đề</label>
                        <input type="text" className="form-control" placeholder="Mã tiêu đề" />
                        <p className='text-danger'></p>
                    </div>

                    <div className="form-group mb-2">
                        <label htmlFor="" className="form-label">Nhập đường dẫn </label>
                        <input type="text" className="form-control" placeholder="Đường dẫn" />
                        <p className='text-danger'></p>
                    </div>
                    <div className="col-12">
                        <Form.Group>
                            <Form.Label>Nội dung</Form.Label>
                            <CKEditor editor={ ClassicEditor }/>

                        </Form.Group>
                    </div>

                   

                    
                    <div className="col-4">
                        <label htmlFor="" className="form-label">Tin nổi bật</label>
                        <select name="active" id="" className="form-control">
                            <option>--Chọn--</option>
                            <option value="0">Không nổi bật</option>
                            <option value="1">Nổi bật</option>
                        </select>
                    </div>

                    <div className="col-4">
                        <Form.Group>
                            <Form.Label>Hình</Form.Label>
                            <Form.Control type="file" placeholder="Hình" name="file" />
                        </Form.Group>
                    </div>
                    <div className="col-6 ">
                        <div className="mt-4" style={{width: "200px",height:"200px", background: "gray", borderRadius: "8px", border: "1px solid black", overflow:"hidden",     }}> 
                              <img src="" style={{'width': "100%","height":"100%", "objectFit": "cover"}} />
                        </div>
                    </div>
                    <Form.Group className="mt-2">
                    <Button variant="primary" type="submit">Cập nhật tin tức</Button>
                    </Form.Group>

               
                </form>




        </div>
        </div>
          );
    }
export default UpdateNews;