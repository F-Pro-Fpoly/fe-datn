function MedicalRecord() {
    return (  
        <div className="vstack gap-4">              
        <div className="card border">              
            <div className="card-header border-bottom">
                <h4 className="card-header-title">Hồ sơ bệnh án</h4>
            </div>

            <div className="card-body">             
                   
                    <div className="col-12">
                        <label className="form-label">Link mạng xã hội</label>
                        <input type="text" 
                        name='link'
                       
                        className='form-control' />
                    </div>

                    {/* <div className="col-12">
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
             */}
                           
                       
                            
                </div> 
            
        </div>          
    </div>  
    );
}

export default MedicalRecord;