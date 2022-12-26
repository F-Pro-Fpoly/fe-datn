import { Button, Form } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import {createNewsCatgoryAPI} from "../../../../services/NewsCategory"
import Loading from "../../../../components/Loading/Loading";
import LoadingBtn from "../../../../components/LoadingBtn/LoadingBtn";
function NewsCategory() {
    const token = useSelector((state)=>state.auth.token);
    const [loading, getLoading] = useState(false);
    const FormRep = useRef();
    const submitForm = async (event) =>{
      event.preventDefault();
      const formData = new FormData(FormRep.current);
      const req = {
        "token": token,
        "data": formData
      };
      try {
        getLoading(true);
        let res = await createNewsCatgoryAPI(req);
        FormRep.current.reset();
        getLoading(false);
        toast.success(res.data.message) ;     
      } catch (error) {
        getLoading(false);
        let res = error.response;
        let data = res.data;
        let messages = data.message;
        toast.error(messages);
      }
  
    }

    return ( 
        <div className="addNews">
            {loading && <Loading />}
            <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        {/* Same as */}
      <ToastContainer />
            <Form method="post" onSubmit={submitForm} ref={FormRep}>
                <div className="row">
                    <div className="col-6">
                        <Form.Group>
                            <Form.Label>Code</Form.Label>
                            <Form.Control type="text" placeholder="Mã code" name="code" />
                        </Form.Group>
                    </div>
                    <div className="col-6">
                        <Form.Group>
                            <Form.Label>Tên loại tin</Form.Label>
                            <Form.Control type="text" placeholder="Tên loại tin" name="name" />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Form.Group>
                            <Form.Label>Đường dẫn</Form.Label>
                            <Form.Control type="text" placeholder="Slug" name="slug" />
                        </Form.Group>
                    </div>
                    <div className="col-6">
                            <label htmlFor="" className="form-label">Kích hoạt</label>
                            <select name="status" id="" className="form-control">
                                <option>--Chọn--</option>
                                <option value="0">Không kích hoạt</option>
                                <option value="1">Kích hoạt</option>
                            </select>
                    </div>
        
                </div>
                <Form.Group className="mt-2">
                    <Button variant="primary" type="submit">{loading ?  (<LoadingBtn />) : "Thêm"}</Button>
                </Form.Group>
            </Form>
        </div>
     );
}

export default NewsCategory;