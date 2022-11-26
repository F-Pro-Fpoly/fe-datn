import {  useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {  Link, useParams } from "react-router-dom";

import { toast,ToastContainer } from 'react-toastify';
import Loading from "../../../../../components/Loading/Loading";
import LoadingBtn from "../../../../../components/LoadingBtn/LoadingBtn";
import { getDetailBanner,  Putslider } from "../../../../../services/BannerService";

function UpdateBanner() {

    const token = useSelector(state => state.auth.token);
    const param = useParams();
    const id = param.id

    const formRef = useRef();
    const [loading, getLoading] = useState(false);
    const [silde,setSilde] = useState([])
    const start = async () => {
        let res = await getDetailBanner({token,id})
        let data = res.data
        let dataArr = data.data
        setSilde(dataArr)
    }

    useEffect(() => {

        start()

    }, [])
    

    const hanndleSubmit = async (data) => {
        data.preventDefault();
        const formData = new FormData(formRef.current)

        const req = {
            "token" : token,
            "data": formData,  
            "id" : id
        }
        try {      
            getLoading(true)
            let add = await Putslider(req);
            getLoading(false)
            toast.success(add.data.message) ;     
        } catch (error) {
            let res = error.response;
            let data = res.data;
            let messages = data.message;
            toast.error(messages);
        }
    }

    return ( 
        <div className="adminItem">
            <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />

        <h2 className="addSick-heading">Cập nhật silder</h2>
            <form action="" onSubmit={hanndleSubmit} ref={formRef}>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Tên silder</label>
                    <input type="text" name="name" className="form-control"
                    defaultValue={silde.name}
                    placeholder="Nhập tên silder" />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Mô tả</label>
                    <input type="text" name="description" 
                    defaultValue={silde.description}
                    className="form-control" placeholder="Nhập mô tả" />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Tên button</label>
                    <input type="text" name="button" 
                    defaultValue={silde.button}
                    className="form-control" placeholder="Nhập tên button" />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Đường dẫn</label>
                    <input type="text" name="link" 
                    defaultValue={silde.link}
                    className="form-control" placeholder="Nhập đường dẫn" />
                   
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Hình ảnh</label>
                    <input type="file" name="image" className="form-control"  />
                    {
                        silde.image ?
                        <div className="form-group mb-2">
                            <br />
                            <img src={`${process.env.REACT_APP_BE}${silde.image}`} width={200} height={200}      />
                        </div>
                        :
                        ""
                    }
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Trạng thái</label>
                    <select id="" name="status" className="form-control" 

                     value={ silde.status ? silde.status : 5}
                     onChange ={(e) => setSilde( {...silde, status: e.target.value})}
                     >
                        <option value="5" disabled>Chọn trạng thái kịch hoạt</option>
                        <option value="1" >Bật</option>
                        <option value="2" >Tắt</option>
                    </select>
                </div>
                <br/>
                <div className="form-group mb-3">
                    <button  type="submit" className="btn btn-primary" >{loading ?  (<LoadingBtn />) : "Cập nhật"}</button>
                    <Link className="btn btn-primary ms-2" to="/admin/quan-ly-banner/list">Danh sách</Link>
                </div>
            </form>
  
        </div>
     );
}

export default UpdateBanner;