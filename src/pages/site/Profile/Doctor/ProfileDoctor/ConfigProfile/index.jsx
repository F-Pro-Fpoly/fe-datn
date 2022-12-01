import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { ToastContainer, toast } from "react-toastify";
import { DoctorAddProfile, DoctorProfile, UpdateDoctorProfile } from '../../../../../../services/UserService';

function ConfigProfile() {
    const [textEditer, setTextEditer] = useState({});
    const [textEdi, setTextEdi] = useState('');
    const addprofile = useRef();
    const updateprofile = useRef();
    const token = useSelector(state => state.auth.token);
    const param = useParams();
    const id = param.id;

    const start = async () => {
        let res = await DoctorProfile({token,id});
        let data = res.data;
        let dataArr = data.data
        setTextEditer(dataArr);
    }

    useEffect(() => {
        start()
    }, [])
   

    const AddProfile  = async (e) => {
        e.preventDefault();
        const formData = new FormData(addprofile.current)
        formData.append('introduce', textEdi.introduce);
        formData.append('context', textEdi.context);
        formData.append('level', textEdi.level);
        formData.append('experience', textEdi.experience);
        const req = {
            "token" : token,
            "data": formData,  
        }
      
        try {
            let res = await DoctorAddProfile(req)
            let message = res.data.message;
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
    const UpdateProfile  = async (e) => {
        e.preventDefault();
        const formData = new FormData(updateprofile.current)
        formData.append('introduce', textEditer.introduce);
        formData.append('context', textEditer.context);
        formData.append('level', textEditer.level);
        formData.append('experience', textEditer.experience);
        const req = {
            "token" : token,
            "data": formData,  
            "id" : id,
        }
      
        try {
            let res = await UpdateDoctorProfile(req)
            let message = res.data.message;
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
        <ToastContainer />
        <div className="vstack gap-4">              
            <div className="card border">              
                <div className="card-header border-bottom">
                    <h4 className="card-header-title">Hồ sơ chi tiết</h4>
                </div>

            {textEditer != "none" ? 
                  <div className="card-body">             
                    <form className="row g-3" method='Post' ref={updateprofile} onSubmit={UpdateProfile} > 
                    <div className="col-12">
                        <label className="form-label">Link mạng xã hội</label>
                        <input type="text" 
                        name='link'
                        defaultValue={textEditer.link ? textEditer.link : ""}
                        className='form-control' />
                    </div>

                    <div className="col-12">
                            <label className="form-label">Giới thiệu</label>
                            <Editor
                            apiKey='v7uxagccs26096o8eu0kae4sbg90s9bicobdondox6ybfxen'
                            // onInit={(evt, editor) => editorRef.current = editor}
                            value={textEditer.introduce ? textEditer.introduce : ""}
                            onEditorChange={(event, editor) => {
                                setTextEditer({...textEditer, introduce: editor.getContent()})
                            }}
                            init={{
                                height: 250,
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
                        </div>
                        <div className="col-12">
                          <label className="form-label">Thông tin chung</label>
                          <Editor
                          apiKey='v7uxagccs26096o8eu0kae4sbg90s9bicobdondox6ybfxen'
                          // onInit={(evt, editor) => editorRef.current = editor}
                          value={textEditer.context }
                          onEditorChange={(event, editor) => {
                            setTextEditer({...textEditer, context: editor.getContent()})
                          }}
                          init={{
                              height: 250,
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
                      </div>
                        <div className="col-12">
                            <label className="form-label">TRÌNH ĐỘ CHUYÊN MÔN</label>
                            <Editor
                            apiKey='v7uxagccs26096o8eu0kae4sbg90s9bicobdondox6ybfxen'
                            // onInit={(evt, editor) => editorRef.current = editor}
                            value={textEditer.level}
                            onEditorChange={(event, editor) => {
                                setTextEditer({...textEditer, level: editor.getContent()})
                            }}
                            init={{
                                height: 250,
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
                        </div>
                        <div className="col-12">
                            <label className="form-label">Kinh nghiệm</label>
                            <Editor
                            apiKey='v7uxagccs26096o8eu0kae4sbg90s9bicobdondox6ybfxen'
                            // onInit={(evt, editor) => editorRef.current = editor}
                            value={textEditer.experience}
                            onEditorChange={(event, editor) => {
                                setTextEditer({...textEditer, experience: editor.getContent()})
                            }}
                            init={{
                                height: 250,
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
                        </div>
            
                           
                        <div className="col-12 text-end">
                            <button type='submit'  className="btn btn-primary mb-0">Lưu thay đổi</button>
                        </div>
                    </form>                
                </div> :
                  <div className="card-body">             
                  <form className="row g-3" method='Post' onSubmit={AddProfile} ref = {addprofile}> 
                  <div className="col-12">
                      <label className="form-label">Link mạng xã hội</label>
                      <input type="text" 
                        name='link'
                      className='form-control' />
                  </div>

                  <div className="col-12">
                          <label className="form-label">Giới thiệu</label>
                          <Editor
                          apiKey='v7uxagccs26096o8eu0kae4sbg90s9bicobdondox6ybfxen'
                          // onInit={(evt, editor) => editorRef.current = editor}
                          
                          onEditorChange={(event, editor) => {
                              setTextEdi({...textEdi, introduce: editor.getContent()})
                          }}
                          init={{
                              height: 250,
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
                      </div>
                  <div className="col-12">
                          <label className="form-label">Thông tin chung</label>
                          <Editor
                          apiKey='v7uxagccs26096o8eu0kae4sbg90s9bicobdondox6ybfxen'
                          // onInit={(evt, editor) => editorRef.current = editor}
                          
                          onEditorChange={(event, editor) => {
                              setTextEdi({...textEdi, context: editor.getContent()})
                          }}
                          init={{
                              height: 250,
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
                      </div>
                      <div className="col-12">
                          <label className="form-label">TRÌNH ĐỘ CHUYÊN MÔN</label>
                          <Editor
                          apiKey='v7uxagccs26096o8eu0kae4sbg90s9bicobdondox6ybfxen'
                          // onInit={(evt, editor) => editorRef.current = editor}
                       
                          onEditorChange={(event, editor) => {
                            setTextEdi({...textEdi, level: editor.getContent()})
                          }}
                          init={{
                              height: 250,
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
                      </div>
                      <div className="col-12">
                          <label className="form-label">Kinh nghiệm</label>
                          <Editor
                          apiKey='v7uxagccs26096o8eu0kae4sbg90s9bicobdondox6ybfxen'
                          // onInit={(evt, editor) => editorRef.current = editor}
                      
                          onEditorChange={(event, editor) => {
                            setTextEdi({...textEdi, experience: editor.getContent()})
                          }}
                          init={{
                              height: 250,
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
                      </div>
            
                  
                  
                      <div className="col-12 text-end">
                          <button type='submit'  className="btn btn-primary mb-0">Lưu thay đổi</button>
                      </div>
                  </form>                
              </div> }
              
                
            </div>          
        </div>  
       </>
     );
}

export default ConfigProfile;