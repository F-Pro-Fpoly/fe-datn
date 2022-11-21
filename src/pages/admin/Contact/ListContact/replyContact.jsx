import { useEffect, useLayoutEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./listContac.scss";
import { getContact, getDetailContact, putReplyContact } from "../../../../services/ContactService";
import Loading from "../../../../components/Loading/Loading";
import {useParams} from "react-router-dom";
import LoadingBtn from "../../../../components/LoadingBtn/LoadingBtn";
import { useForm } from "react-hook-form";
import { toast,ToastContainer } from 'react-toastify';
function ReplyContact() {
    const formRef = useRef();
    const token = useSelector(state => state.auth.token);
    const param = useParams();
    const id = param.id;

    const [listContact, setListContact] = useState([]);
    const [loading, getLoading] = useState(false);

    useEffect(() => {
        const start = async () => {
            getLoading(true)
            setListContact([])
            let res = await getDetailContact({token,id}) 
            let data = res.data 
            let dataArr = data.data
            getLoading(false)
            setListContact(dataArr)
        }
        start();
    }, [])

    const handleSubmit  = async (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current)
        const req = {
            "token" : token,
            "id" : id,
            "data": formData,  
        }
        try {
            getLoading(true)
            let res =  await putReplyContact(req);
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
        <>
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
 
        <div className="adminItem">
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Họ và tên người liên hệ</label>
                    <input type="text" 
                    defaultValue={listContact.name}
                    disabled
                    className="form-control" placeholder="Nhập tên trang" />
                 
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text"      
                      defaultValue={listContact.email}
                      disabled
                    className="form-control" placeholder="Nhập font" />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Nội dung</label>
                    <textarea disabled name="content" id="" className="form-control" style={{resize: "none"}} cols="10" rows="5"  defaultValue={listContact.content}>
                    </textarea>      
                </div>
            <form method="Post" onSubmit={handleSubmit} ref={formRef}>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Trả lời liên hệ</label>
                    <textarea  name="reply_contact" id="" className="form-control"
                    defaultValue={listContact.reply_contact ? listContact.reply_contact : "" }
                    disabled = {listContact.reply_contact ? true : false}
                    // flase
                    // disabled={true}
                    style={{resize: "none"}} cols="10" rows="5"  >
                    

                    </textarea>      
                </div>

                <div className="form-group mb-2">
                    <button className="btn btn-primary" >{loading ?  (<LoadingBtn />) : "Trả lời"}</button>
                    <Link className="btn btn-primary ms-2" to="/admin/lien-he/danh-sach-lien-he">Danh sách</Link>
                </div>
            </form>

       
         </div>
        </>
     );
}

export default ReplyContact;