
import {useEffect, useState,useRef} from 'react';
import { createCommentAPI} from "../../../services/normal/NewsService";
import { useDispatch, useSelector } from "react-redux";
import { toast,ToastContainer } from 'react-toastify';
import { useParams } from "react-router";
function InputComment(){
    const dispatch = useDispatch();
    const token = useSelector((state)=>state.auth.token);
    const param = useParams();
    const FormRep = useRef();
    const submitForm = async (event) =>{
        event.preventDefault();
        const slug = param.slug;
        const formData = new FormData(FormRep.current);
        const req = {
          "token": token,
          "data": formData,
          "slug":slug
        };
        try {
          let res = await createCommentAPI(req);
          FormRep.current.reset();
          toast.success(res.data.message) ;     
        } catch (error) {
          let res = error.response;
          let data = res.data;
          let messages = data.message;
          toast.error(messages);
        }
    
      }
    return(
       
            <form className="form-wrapper" onSubmit={submitForm} ref={FormRep}>
                <ToastContainer
                 position="top-right"
                  autoClose={4000}
                  hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover/>
                 <textarea className="form-control" placeholder="Nhập nội dung bình luận" name="content"></textarea>
                <button type="submit" className="btn btn-primary">Gửi bình luận</button>
            </form>

    )
}
export default InputComment;