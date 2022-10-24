import "./Dashboard.scss";
function Dashboard () {
    return (
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                    <i className="fa fa-usd opacity-10"></i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">Today's Money</p>
                    <h4 className="mb-0">$53k</h4>
                  </div>
                </div>
              <hr className="dark horizontal my-0"></hr>
                <div className="card-footer p-3">
                  <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+55% </span>than last week</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                    <i className="fa fa-user opacity-10"></i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">Today's Users</p>
                    <h4 className="mb-0">2,300</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0"></hr>
                <div className="card-footer p-3">
                  <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+3% </span>than last month</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                    <i className="fa fa-eye opacity-10"></i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">New Clients</p>
                    <h4 className="mb-0">3,462</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0"></hr>
                <div className="card-footer p-3">
                  <p className="mb-0"><span className="text-danger text-sm font-weight-bolder">-2%</span> than yesterday</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                    <i className="fa fa-bar-chart-o opacity-10"></i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">New Clients</p>
                    <h4 className="mb-0">3,462</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0"></hr>
                <div className="card-footer p-3">
                  <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+5% </span>than yesterday</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12 mt-4 mb-4">
              <div className="card z-index-2 ">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                    <div className="chart">
                      <canvas id="chart-bars" className="chart-canvas" height="170"></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="mb-0 ">Website Views</h6>
                  <p className="text-sm ">Last Campaign Performance</p>
                  <hr className="dark horizontal my-0"></hr>
                  <div className="d-flex ">
                    <i className="material-icons text-sm my-auto me-1">schedule</i>
                    <p className="mb-0 text-sm"> campaign sent 2 days ago </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    
            );
}

export default Dashboard ;