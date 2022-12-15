
import {useEffect, useState,useRef, forwardRef, useImperativeHandle} from 'react';
import { createCommentAPI,getlistComment} from "../../../services/normal/NewsService";
import { useDispatch, useSelector } from "react-redux";
import { toast,ToastContainer } from 'react-toastify';
import Loading from "../../../components/Loading/Loading";
import { useParams } from "react-router";
import PropTypes from 'prop-types';
const InputComment = ({onSubmit}) =>{
    const dispatch = useDispatch();
    const token = useSelector((state)=>state.auth.token);
    const param = useParams();
    const FormRep = useRef();
    const [Comment, getComment] = useState([]);
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
          toast.success(res.data.message);
          let ress = await getlistComment(slug);
          let datalist = ress.data;
          getComment(datalist);
          onSubmit();

        } catch (error) {
          let res = error.response;
          let data = res.data;
          let messages = data.message;
          toast.error(messages);
        }
    
      }
      useEffect(()=>{
      },[param]);
    return(<>
   
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
            <form className="form-wrapper" onSubmit={submitForm} ref={FormRep}>
                 <input className="form-control" maxLength="100" placeholder="Nhập nội dung bình luận" name="content"/>
                <button type="submit" className="btn btn-primary">Gửi bình luận</button>
            </form>
            </>
    )
}

InputComment.propTypes = {
  onSubmit: PropTypes.func
}
export default InputComment;