import { Editor } from '@tinymce/tinymce-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { DoctorProfile } from '../../../../../../services/UserService';

function ConfigProfile() {
    const [textEditer, setTextEditer] = useState([]);

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
   
    return ( 
        <div className="vstack gap-4">              
            <div className="card border">              
                <div className="card-header border-bottom">
                    <h4 className="card-header-title">Hồ sơ chi tiết</h4>
                </div>
         
                <div className="card-body">             
                    <form className="row g-3" method='Post'> 
                    <div className="col-12">
                        <label className="form-label">Link mạng xã hội</label>
                        <input type="text" 
                        defaultValue={textEditer.link ? textEditer.link : ""}
                        className='form-control' />
                    </div>

                    <div className="col-12">
                            <label className="form-label">Giới thiệu</label>
                            <Editor
                            apiKey='v7uxagccs26096o8eu0kae4sbg90s9bicobdondox6ybfxen'
                            // onInit={(evt, editor) => editorRef.current = editor}
                            value={textEditer.introduce ? textEditer.introduce : ""}
                            // onEditorChange={(event, editor) => {
                            //     setTextEditer({...textEditer, description: editor.getContent()})
                            // }}
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
                            value={textEditer.level ? textEditer.level : ""}
                            // onEditorChange={(event, editor) => {
                            //     setTextEditer({...textEditer, description: editor.getContent()})
                            // }}
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
                            value={textEditer.introduce}
                            // onEditorChange={(event, editor) => {
                            //     setTextEditer({...textEditer, description: editor.getContent()})
                            // }}
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
                            <label className="form-label">Thông tin thêm</label>
                            <Editor
                            apiKey='v7uxagccs26096o8eu0kae4sbg90s9bicobdondox6ybfxen'
                            // onInit={(evt, editor) => editorRef.current = editor}
                            // value={silde.description}
                            // onEditorChange={(event, editor) => {
                            //     setTextEditer({...textEditer, description: editor.getContent()})
                            // }}
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
                </div>
                
            </div>          
        </div>  
     );
}

export default ConfigProfile;