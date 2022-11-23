
function Dashboard () {
    return (
      <div className="body flex-grow-1 px-3">
         <div className="container-lg">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="card mb-4 text-white bg-primary">
                  <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                    <div>
                      <div className="fs-4 fw-semibold">26K 
                        <span className="fs-6 fw-normal">
                          (-12.4%
                            <i className="fa fa-long-arrow-down"></i>
                           )
                        </span>
                      </div>
                      <div>Người dùng</div>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="col-sm-6 col-lg-3">
                <div className="card mb-4 text-white bg-info">
                  <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                    <div>
                      <div className="fs-4 fw-semibold">$6.200
                        <span className="fs-6 fw-normal">
                          (-12.4%
                           <i className="fa fa-long-arrow-up"></i> 
                           )
                        </span>
                       </div> 
                      <div>Đặt lịch khám</div>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="col-sm-6 col-lg-3">
                <div className="card mb-4 text-white bg-warning">
                  <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                    <div>
                      <div className="fs-4 fw-semibold">2.49%
                          <span className="fs-6 fw-normal">
                            (-12.4%
                          <i className="fa fa-long-arrow-up"></i>
                          )
                          </span>
                      </div>
                      <div>Chuyên khoa</div>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="col-sm-6 col-lg-3">
                <div className="card mb-4 text-white bg-danger">
                  <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                    <div className="row">
                      <div className="fs-4 fw-semibold col-md-8">44K
                        <span className="fs-6 fw-normal">(-12.4%
                          <i className="fa fa-long-arrow-down"></i>
                        )
                        </span>
                      </div>
                      <div className="clo-md-4">Danh mục bệnh nhân</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h4 className="card-title mb-0">Biểu đồ</h4>
                    <div className="small text-medium-emphasis">Năm 2020</div>
                  </div>
                </div>
                <div className="c-chart-wrapper" >
                  <canvas className="chart" id="main-chart" height="600" width="1350" ></canvas>
                </div>
              </div>
              <div className="card-footer">
                <div className="row row-cols-1 row-cols-md-5 text-center">
                  <div className="col mb-sm-2 mb-0">
                    <div className="text-medium-emphasis">Visits</div>
                    <div className="fw-semibold">29.703 Users (40%)</div>
                  </div>
                  <div className="col mb-sm-2 mb-0">
                    <div className="text-medium-emphasis">Unique</div>
                    <div className="fw-semibold">24.093 Users (20%)</div>
                  </div>
                  <div className="col mb-sm-2 mb-0">
                    <div className="text-medium-emphasis">Pageviews</div>
                    <div className="fw-semibold">78.706 Views (60%)</div>
                  </div>
                  <div className="col mb-sm-2 mb-0">
                    <div className="text-medium-emphasis">New Users</div>
                    <div className="fw-semibold">22.123 Users (80%)</div>
                  </div>
                  <div className="col mb-sm-2 mb-0">
                    <div className="text-medium-emphasis">Bounce Rate</div>
                    <div className="fw-semibold">40.15%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    
            );
}

export default Dashboard ;