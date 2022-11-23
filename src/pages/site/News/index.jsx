import "./Blog.scss";
import { Link } from "react-router-dom";
import { getListNewsAPI,getlistNews3NewsAPI,getlistNews9FeaturedAPI,getlistNewsCategoryAPI} from "../../../services/normal/NewsService";
import Loading from "../../../components/Loading/Loading";
import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import Paginate from '../../../components/Paginate/Paginate';
import Pagination from 'react-bootstrap/Pagination';
import ReactPaginate from 'react-paginate';
import ListUser from "../../admin/User/ListUser/ListUser";
function News(){
  const token = useSelector(state => state.auth.token);

  const [ListNews, getNews] = useState([]);
  const [loading, getLoading] = useState(false);
  const [paginate, setPaginate] = useState(null);
  const [search, setSearch] = useState({
    "name": "",
    "status": "",
    "slug": "",
  });
  const [page, setPage] = useState(1);
  const start = async () =>{
    getNews([]);
    getLoading(true);
    let res = await getListNewsAPI(token, {status:1}, page);
    let data = res.data;
    let dataArr = data.data;

    getLoading(false);
    getNews(dataArr);

    // handle paginate
    let pagination = data.meta.pagination ?? null;
    setPaginate(pagination);
    
  }

  useEffect(()=>{

    start();
  },[page]);
const hanleSearch = async () =>{
    getNews([]);
    getLoading(true); 
    let res = await getListNewsAPI(token, search, page);
    let data = res.data;
    let dataArr = data.data;

    getLoading(false);
    getNews(dataArr);

    // handle paginate
    let pagination = data.meta.pagination ?? null;
    setPaginate(pagination);
  }

  const onChangePage = (number) =>{
    setPage(number);
  }


    return( <>
      <div className="formBooking ">
        <div className="page-title wb ">
            <div className="news">
              <h1 className="text-center">Tin tức </h1>
            </div>
        </div>
        <section className="section ">
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
                            <small>{item.created_at}</small>
                          </div>
                        </div>
                      </div>
                           )
                                          
                          })
                          }
                    </div>
                  </div>
                </div>
                {loading && <Loading />}
                    {paginate && <Paginate pagination = {paginate} onChangePage={onChangePage} />}
                {/* <hr className="invis3"/>
                <div className="row ">
                  <div className="col-md-12 ">
                    <nav aria-label="Page navigation">
                    
                    </nav>
                  </div>
                </div>  */}
              
              </div>
              {/* <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
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
                                <small>{item.created_at}</small>
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
                        <li><Link>{item.name} <span></span></Link> </li>
                      </ul>
                       )
                                          
                      })
                      }
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
      </section>
      </div>  
      </>

    );
}
export default News;