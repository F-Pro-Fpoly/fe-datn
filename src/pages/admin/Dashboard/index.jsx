
function Dashboard () {
    return (
      <div className="body flex-grow-1 px-3">
         <div class="container-lg">
            <div class="row">
              <div class="col-sm-6 col-lg-3">
                <div class="card mb-4 text-white bg-primary">
                  <div class="card-body pb-0 d-flex justify-content-between align-items-start">
                    <div>
                      <div class="fs-4 fw-semibold">26K 
                        <span class="fs-6 fw-normal">
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
            
              <div class="col-sm-6 col-lg-3">
                <div class="card mb-4 text-white bg-info">
                  <div class="card-body pb-0 d-flex justify-content-between align-items-start">
                    <div>
                      <div class="fs-4 fw-semibold">$6.200
                        <span class="fs-6 fw-normal">
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
            
              <div class="col-sm-6 col-lg-3">
                <div class="card mb-4 text-white bg-warning">
                  <div class="card-body pb-0 d-flex justify-content-between align-items-start">
                    <div>
                      <div class="fs-4 fw-semibold">2.49%
                          <span class="fs-6 fw-normal">
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
            
              <div class="col-sm-6 col-lg-3">
                <div class="card mb-4 text-white bg-danger">
                  <div class="card-body pb-0 d-flex justify-content-between align-items-start">
                    <div className="row">
                      <div class="fs-4 fw-semibold col-md-8">44K
                        <span class="fs-6 fw-normal">(-12.4%
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
          
            <div class="card mb-4">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <div>
                    <h4 class="card-title mb-0">Biểu đồ</h4>
                    <div class="small text-medium-emphasis">Năm 2020</div>
                  </div>
                </div>
                <div class="c-chart-wrapper" >
                  <canvas class="chart" id="main-chart" height="600" width="1350" ></canvas>
                </div>
              </div>
              <div class="card-footer">
                <div class="row row-cols-1 row-cols-md-5 text-center">
                  <div class="col mb-sm-2 mb-0">
                    <div class="text-medium-emphasis">Visits</div>
                    <div class="fw-semibold">29.703 Users (40%)</div>
                  </div>
                  <div class="col mb-sm-2 mb-0">
                    <div class="text-medium-emphasis">Unique</div>
                    <div class="fw-semibold">24.093 Users (20%)</div>
                  </div>
                  <div class="col mb-sm-2 mb-0">
                    <div class="text-medium-emphasis">Pageviews</div>
                    <div class="fw-semibold">78.706 Views (60%)</div>
                  </div>
                  <div class="col mb-sm-2 mb-0">
                    <div class="text-medium-emphasis">New Users</div>
                    <div class="fw-semibold">22.123 Users (80%)</div>
                  </div>
                  <div class="col mb-sm-2 mb-0">
                    <div class="text-medium-emphasis">Bounce Rate</div>
                    <div class="fw-semibold">40.15%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    
            );
}

export default Dashboard ;