import "./Blog.scss";
import { Link } from "react-router-dom"
import { getListNewsAPI,getlistNews3NewsAPI,getlistNews9FeaturedAPI,getlistNewsCategoryAPI} from "../../../services/normal/NewsService";
import Loading from "../../../components/Loading/Loading";
import { setNavb } from "../../../redux/slices/InterfaceSile";
import {useDispatch} from "react-redux"
import { useEffect, useState } from "react";
import Paginate from '../../../components/Paginate/Paginate';
function News(){

  const [ListNews, getNewsClient] = useState([]);
  const [ListNewsNew, getNewsNewClient] = useState([]);
  const [ListNewsFeatured, getNewsFeaturedClient] = useState([]);
  const [ListNewsCategory, getNewsCategoryClient] = useState([]);
  const [loading, getLoading] = useState(false);
  // const [paginate, setPaginate] = useState(null);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  
  useEffect(() => {
    document.title = "Tin tức"
    dispatch(setNavb(true))
    const start = async () => {
        getLoading(true)
        getNewsClient([])
        let res = await getListNewsAPI({status: 1,page})
        let data = res.data
        let dataArr = data.data
        // let pagination = data.meta.pagination ?? null;
        // setPaginate(pagination); 

        let resNew = await getlistNews3NewsAPI({status: 1})
        let dataNew = resNew.data
        let data3New = dataNew.data

        let resFeatured = await getlistNews9FeaturedAPI({status: 1})
        let dataFeatured = resFeatured.data
        let data9Featured = dataFeatured.data

        let resCategory = await getlistNewsCategoryAPI({status: 1})
        let dataCategory = resCategory.data
        let dataCy = dataCategory.data

       
        getLoading(false)
        getNewsClient(dataArr)
        getNewsNewClient(data3New)
        getNewsFeaturedClient(data9Featured)
        getNewsFeaturedClient(data9Featured)
        getNewsCategoryClient(dataCy)
      
      
    }

      start()
  
  }, [page])

  const onChangePage = (number) =>{
    setPage(number);
  }

    return(
      <div className="formBooking">
        <div className="page-title wb">
          <h1 className="text-center top-20">Tin tức </h1>
        </div>
        <section className="section wb">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                <div className="page-wrapper">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <div className="banner-spot clearfix">
                        <div className="banner-img"><img src="./img/banner_02.jpg" alt="website template image" className="img-fluid"/></div>
                      </div>
                    </div>
                  </div>
                  <hr className="invis"/>
                  <div className="blog-grid-system">
                    <div className="row">
                    {loading && <Loading />}
                        {
                    ListNews.map((item,index) => {
                    return(
                      <div className="col-md-6"  key={index}>
                        <div className="blog-box">
                          <div className="post-media">
                           <Link to={item.slug}>
                                <img src={ `${process.env.REACT_APP_BE}${item.file}` } alt="website template image" className="img-fluid"/>
                           </Link>   
                          </div>
                          <div className=" big-meta">
                            <h4><Link to={item.slug}>{item.name}</Link></h4>
                            <p className="an" dangerouslySetInnerHTML={{__html: item.content}}></p>
                            <small>24 July, 2045</small>
                          </div>
                        </div>
                      </div>
                           )
                                          
                          })
                          }
                    </div>
                  </div>
                </div>
                <hr className="invis3"/>
                <div className="row ">
                  <div className="col-md-12 ">
                    <nav aria-label="Page navigation">
                      {/* <>
                       {
                        loading && <Loading />
                      }
                      {paginate && <Paginate pagination = {paginate} onChangePage={onChangePage} />}
                      </> */}
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div className="sidebar">
                  <div className="widget">
                    <h2 className="widget-title">Tin mới</h2>
                    <div className="blog-list-widget">
                    {loading && <Loading />}
                        {
                    ListNewsNew.map((item,index) => {
                    return(
                      <div className="list-group" key={index}>
                          <Link to={item.slug}  className="list-group-item list-group-item-action flex-column align-items-start">
                          <div className="w-100 justify-content-between">
                            <div className="row">
                              <div className="col-md-3">
                                  <img src={ `${process.env.REACT_APP_BE}${item.file}` } alt="website template image" className="img-fluid float-left"/>
                              </div>
                              <div className="col-md-9">
                                <h5 className="mb-1">{item.name}</h5>
                                <small>12 Jan, 2045</small>
                              </div>
                            </div>
                            </div>
                          </Link>
                      </div>
                          )
                                          
                        })
                        }
                    </div>
                  </div>
                  <div className="widget">
                    <h2 className="widget-title">Tin nổi bật</h2>
                   
                    <div className="instagram-wrapper clearfix">
                    {loading && <Loading />}
                        {
                    ListNewsFeatured.map((item,index) => {
                    return(
                      <Link to={item.slug}  key={index}>
                        <img src={ `${process.env.REACT_APP_BE}${item.file}` } alt="website template image" className="img-fluid"/>
                      </Link>
                           )
                                          
                          })
                          }
                    </div>
                  
                  </div>
                  <div className="widget">
                    <h2 className="widget-title">Danh sách tin</h2>
                    <div className="link-widget">
                    {loading && <Loading />}
                        {
                    ListNewsCategory.map((item,index) => {
                    return(
                      <ul key={index}>
                        <li><Link>{item.name} <span>(21)</span></Link> </li>
                      </ul>
                       )
                                          
                      })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      </div>

    );
}
export default News;