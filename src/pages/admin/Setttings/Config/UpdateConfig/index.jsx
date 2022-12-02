import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetailSettingServiceAPI, putSettingServiceAPI } from "../../../../../services/SettingService";
import { toast,ToastContainer } from 'react-toastify';
import LoadingBtn from "../../../../../components/LoadingBtn/LoadingBtn";
import {useParams} from "react-router-dom";
function UpdateConfig() {

    const formRef = useRef();
    const param = useParams();
    const id = param.id;
    const token = useSelector(state => state.auth.token);
    const [loading, getLoading] = useState(false);
    const [getDetailConfig,setDetailConfig] = useState(
      {
        "code":"",
        "description":"",
        "status":"",
      }
    )
    const start = async () => {
       try {
      
        const res = await getDetailSettingServiceAPI({token, id})
        const data = res.data;
        const dataArr = data.data;
       
        setDetailConfig(dataArr)
       } catch (error) {
            console.log(error);
       }
    }

    useEffect(() => {
        start()     

    }, [])
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current)
        formData.append('status', getDetailConfig.status == true ? 1 : 0 );
        const req = {
            "token" : token,
            "id" : id,
            "data": formData,  
        }
        try {
            getLoading(true)
            let res = await putSettingServiceAPI(req);
            let message = res.data.message;
            getLoading(false)
            toast.success(message);
        } catch (error) {
            console.log(error);
            let res = error.response;
            let status = res.status;
            console.log(status);
            if(status === 422){
                let data = res.data;
                let message = data.message;
                toast.error(message);
            }
        }
    }

    return ( 
        <div className="addsetting">
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
 
            <h2 className="addSick-heading">Cập nhật cofig</h2>
            
            <form method="POST" onSubmit={handleSubmit} ref={formRef}>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Mã</label>
                    <input type="text"  id="code" name ="code" defaultValue={getDetailConfig.code}     
                    className="form-control" placeholder="Nhập mã" />
                </div>

                {
                    getDetailConfig.code == "Logo"
                    ?
                        <div className="d-flex align-items-center">
                        <label className="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
                            <span className="avatar avatar-xl">
                                <img id="uploadfile-1-preview" className="avatar-img rounded-circle border border-white border-3 shadow" src={`${process.env.REACT_APP_BE}${getDetailConfig.description}`}                            
                                alt="logo" />                      
                            </span>                       
                        </label>
                        
                        <label className="btn btn-sm btn-primary-soft mb-0" htmlFor="uploadfile-1">Thay đổi</label>
                        <input id="uploadfile-1"
                        name='logo'
                        className="form-control d-none" 
                        type="file" />
                        </div>
                    :

                    getDetailConfig.code == "Favicon"
                    ?
                        <div className="d-flex align-items-center">
                        <label className="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
                            <span className="avatar avatar-xl">
                                <img id="uploadfile-1-preview" className="avatar-img rounded-circle border border-white border-3 shadow" src={`${process.env.REACT_APP_BE}${getDetailConfig.description}`}                            
                                alt="favicon" />                      
                            </span>                       
                        </label>
                        
                        <label className="btn btn-sm btn-primary-soft mb-0" htmlFor="uploadfile-1">Thay đổi</label>
                        <input id="uploadfile-1"
                        name='favicon'
                        className="form-control d-none" 
                        type="file" />
                        </div>
                    :
                    getDetailConfig.code == "SocialFaceBook"
                    ?
                        <div className="d-flex align-items-center">
                        <label className="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
                            <span className="avatar avatar-xl">
                                <img id="uploadfile-1-preview" className="avatar-img rounded-circle border border-white border-3 shadow" src={`${process.env.REACT_APP_BE}${getDetailConfig.description}`}                            
                                alt="SocialFaceBook" />                      
                            </span>                       
                        </label>
                        
                        <label className="btn btn-sm btn-primary-soft mb-0" htmlFor="uploadfile-1">Thay đổi</label>
                        <input id="uploadfile-1"
                        name='socialFaceBook'
                        className="form-control d-none" 
                        type="file" />
                        </div>
                    :
                    getDetailConfig.code == "SocialYoutube"
                    ?
                        <div className="d-flex align-items-center">
                        <label className="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
                            <span className="avatar avatar-xl">
                                <img id="uploadfile-1-preview" className="avatar-img rounded-circle border border-white border-3 shadow" src={`${process.env.REACT_APP_BE}${getDetailConfig.description}`}                            
                                alt="SocialYoutube" />                      
                            </span>                       
                        </label>
                        
                        <label className="btn btn-sm btn-primary-soft mb-0" htmlFor="uploadfile-1">Thay đổi</label>
                        <input id="uploadfile-1"
                        name='socialYoutube'
                        className="form-control d-none" 
                        type="file" />
                        </div>
                    :
                    getDetailConfig.code == "SocialTiktok"
                    ?
                        <div className="d-flex align-items-center">
                        <label className="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
                            <span className="avatar avatar-xl">
                                <img id="uploadfile-1-preview" className="avatar-img rounded-circle border border-white border-3 shadow" src={`${process.env.REACT_APP_BE}${getDetailConfig.description}`}                            
                                alt="SocialTiktok" />                      
                            </span>                       
                        </label>
                        
                        <label className="btn btn-sm btn-primary-soft mb-0" htmlFor="uploadfile-1">Thay đổi</label>
                        <input id="uploadfile-1"
                        name='SocialTiktok'
                        className="form-control d-none" 
                        type="file" />
                        </div>
                    :
                    getDetailConfig.code == "SocialGroup"
                    ?
                        <div className="d-flex align-items-center">
                        <label className="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
                            <span className="avatar avatar-xl">
                                <img id="uploadfile-1-preview" className="avatar-img rounded-circle border border-white border-3 shadow" src={`${process.env.REACT_APP_BE}${getDetailConfig.description}`}                            
                                alt="SocialGroup" />                      
                            </span>                       
                        </label>
                        
                        <label className="btn btn-sm btn-primary-soft mb-0" htmlFor="uploadfile-1">Thay đổi</label>
                        <input id="uploadfile-1"
                        name='SocialGroup'
                        className="form-control d-none" 
                        type="file" />
                        </div>
                    :
                    <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Mô tả</label>
                    <input type="text" id="description" name ="description" defaultValue={getDetailConfig.description}          
                    className="form-control" placeholder="Nhập mô tả" />
                    </div>
                }

                <div className="form-group mb-2">
                    <label htmlFor="status" className="form-label">Trạng thái</label>
                    <span>
                        <label className="switch"> 
                            <input type="checkbox" checked={getDetailConfig.status == 1 ? true : false}  name="status" id="status" 
                              onChange={(e) => setDetailConfig({...getDetailConfig, "status": e.target.checked})}     
                            />
                            
                            <span className="slider round"></span>
                        </label>
                    </span> 
                </div>

                <div className="form-group mb-2">
                    <button className="btn btn-primary" type="submit" >{loading ?  (<LoadingBtn />) : "Cập nhật"}</button>
                    <Link className="btn btn-primary ms-2" to="/admin/cau-hinh-chung/list">Danh sách</Link>
                </div>
            </form>
        </div>
     );
}

export default UpdateConfig;