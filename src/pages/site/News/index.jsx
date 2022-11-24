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
    const [ListNewsNew, getNewsNewClient] = useState([]);
    const [ListNewsFeatured, getNewsFeaturedClient] = useState([]);
    const [ListNewsCategory, getNewsCategoryClient] = useState([]);
  
    const [loading, getLoading] = useState(false);
    const [paginate, setPaginate] = useState(null);
    const [search, setSearch] = useState({
      "name": "",
      "status": "",
      "slug": "",
    });
    const [page, setPage] = useState(1);
      document.title = "Tin tức";
  
      const start = async () => {
          getNews([]);
          getLoading(true);
    
          let res = await getListNewsAPI(token, {status:1}, page);
          let data = res.data;
          let dataArr = data.data;
          
  
          let resNew = await getlistNews3NewsAPI(token);
          let dataNew = resNew.data;
          let data3New = dataNew.data;
  
          let resFeatured = await getlistNews9FeaturedAPI(token);
          let dataFeatured = resFeatured.data;
          let data9Featured = dataFeatured.data;
  
          let resCategory = await getlistNewsCategoryAPI(token);
          let dataCategory = resCategory.data;
          let dataCy = dataCategory.data;
  
          getNewsNewClient(data3New);
          getNewsFeaturedClient(data9Featured);
          getNewsCategoryClient(dataCy);
  
          getNews(dataArr);
          let Pagination = data.meta.pagination ?? null;
          setPaginate(Pagination);
  
          getLoading(false);
        
      };
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
      return(
        <div className="formBooking ">
        <div className="page-title wb">
            <div className="container news">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2>Tin Tuc</h2>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Blog</a></li>
                            <li className="breadcrumb-item active">Food</li>
                        </ol>
                    </div>                   
                </div>
            </div>
        </div>
          <section className="section ">
            <div className="container">
              <div className="row">
             
                <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">   
                <>
                  <div className="page-wrapper">  
                    <div className="blog-list clearfix">
                    {loading && <Loading />}
                          {
                      ListNews.map((item,index) => {
                      return(
                        <div className="blog-box row" key={index}>
                            <div className="col-md-4">
                                <div className="post-media">
                                    <Link to={item.slug}>
                                        <img src={`${process.env.REACT_APP_BE}${item.file}`} alt="" className="img-fluid"/>
                                        <div className="hovereffect"></div>
                                    </Link>
                                </div>
                            </div>

                            <div className="blog-meta big-meta col-md-8">
                                <h4><Link to={item.slug}>{item.name}</Link></h4>
                                <p className="an" dangerouslySetInnerHTML={{__html: item.content}}></p>
                                 <small><Link ></Link></small>
                            </div>  
                            <hr className="invis"/>
                        </div>
                      
                           )                  
                          })
                          } 
                    </div> 
                   
                       
                  </div>
                  <hr className="invis3"/>
                  <div className="row ">
                    <div className="col-md-12 ">
                      <nav aria-label="Page navigation">
                      {loading && <Loading />}
                      {paginate && <Paginate pagination = {paginate} onChangePage={onChangePage} />}
                      </nav>
                    </div>
                  </div> 
                  </>
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
                      <h2 className="widget-title">Tin Hot</h2>
                     
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
                </div>
              </div>
            </div>
        </section>
        </div>
  
      );
  }
export default News;