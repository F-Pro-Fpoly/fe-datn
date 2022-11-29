import {  useRef, useState } from "react";
import { useSelector } from "react-redux";
import {  Link } from "react-router-dom";

import { toast,ToastContainer } from 'react-toastify';
import Loading from "../../../../../components/Loading/Loading";
import LoadingBtn from "../../../../../components/LoadingBtn/LoadingBtn";
import { Postslider } from "../../../../../services/BannerService";
import { Editor } from '@tinymce/tinymce-react';
function AddBanner() {

    const token = useSelector(state => state.auth.token);
    const formRef = useRef();
    const [loading, getLoading] = useState(false);
    const [textEditer, setTextEditer] = useState('');

    const hanndleSubmit = async (data) => {
        data.preventDefault();
        const formData = new FormData(formRef.current)
        formData.append('description', textEditer.description);
        const req = {
            "token" : token,
            "data": formData,  
        }
        try {      
            getLoading(true)
            let add = await Postslider(req);
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

        <h2 className="addSick-heading">Thêm silder</h2>
            <form action="" onSubmit={hanndleSubmit} ref={formRef}>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Tên silder</label>
                    <input type="text" name="name" className="form-control" placeholder="Nhập tên silder" />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Mô tả</label>

                    <Editor
                            apiKey='v7uxagccs26096o8eu0kae4sbg90s9bicobdondox6ybfxen'
                            // onInit={(evt, editor) => editorRef.current = editor}
                            value={textEditer.description}
                            onEditorChange={(event, editor) => {
                                setTextEditer({...textEditer, description: editor.getContent()})
                            }}
                            init={{
                                height: 500,
                                menubar: true,
                                plugins: [
                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                ],
                                toolbar: 'undo redo | blocks | ' +
                                    'bold italic forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />


                    {/* <CKEditor
                            editor={ ClassicEditor }
                            data={textEditer}
                            onChange={(event, editor) => {
                                setTextEditer(editor.data.get())
                            }}
                        /> */}

                    {/* <input type="text" name="description" className="form-control" placeholder="Nhập mô tả" /> */}
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">tên button</label>
                    <input type="text" name="button" className="form-control" placeholder="Nhập tên button" />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Đường dẫn</label>
                    <input type="text" name="link" className="form-control" placeholder="Nhập đường dẫn" />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Hình ảnh</label>
                    <input type="file" name="image" className="form-control"  />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="form-label">Trạng thái</label>
                    <select id="" name="status" className="form-control" defaultValue={5}>
                        <option value="5" disabled>Chọn trạng thái kịch hoạt</option>
                        <option value="1" >Bật</option>
                        <option value="0" >Tắt</option>
                    </select>
                </div>
                <br/>
                <div className="form-group mb-3">
                    <button  type="submit" className="btn btn-primary" >{loading ?  (<LoadingBtn />) : "Thêm"}</button>
                    <Link className="btn btn-primary ms-2" to="/admin/quan-ly-banner/list">Danh sách</Link>
                </div>
            </form>
  
        </div>
     );
}

export default AddBanner;