import "./DetailBlog.scss";
import { Link } from "react-router-dom"
import {useEffect, useState} from 'react';
import { useParams } from "react-router";
import {  getNewsDetailClient,getlistNews3NewsAPI,getlistNews9FeaturedAPI,getlistNewsCategoryAPI } from "../../../services/normal/NewsService";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Loading/Loading";
import { setLoading } from "../../../redux/slices/InterfaceSile";
export default function DitailNews(){
  const param = useParams();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const [NewsDetail, setDetail] = useState({
    "code": "",
    "name":"",
    "file":"",
    "view": null,
    "content": "", 
}); 
  const [ListNewsNew, getNewsNewClient] = useState([]);
  const [ListNewsFeatured, getNewsFeaturedClient] = useState([]);
  const [ListNewsCategory, getNewsCategoryClient] = useState([]);
  const [loading, getLoading] = useState(false);
  const slug = param.slug;

  const start = async () =>{
          dispatch(setLoading(true))
          let res = await getNewsDetailClient({token, slug});
          let data = res.data.data;

          let resNew = await getlistNews3NewsAPI({status: 1})
          let dataNew = resNew.data
          let data3New = dataNew.data
  
          let resFeatured = await getlistNews9FeaturedAPI({status: 1})
          let dataFeatured = resFeatured.data
          let data9Featured = dataFeatured.data
  
          let resCategory = await getlistNewsCategoryAPI({status: 1})
          let dataCategory = resCategory.data
          let dataCy = dataCategory.data
          setDetail({
              ...NewsDetail,
              code: data.code ?? null,
              name: data.name ?? null,
              file: data.file ?? null,
              content: data.content ?? null,
              view: data.view ?? 0,
          });
          dispatch(setLoading(false))
          setDetail(data);
          getNewsNewClient(data3New)
          getNewsFeaturedClient(data9Featured)
          getNewsFeaturedClient(data9Featured)
          getNewsCategoryClient(dataCy)
          getLoading(false)

  }

  useEffect (()=>{
      start();
  }, []);
    return(
      <div className="formBooking">
      <div className="page-title wb">
      </div>
        <section className="section wb formBooking">
            <div className="container ">
        
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                    <div className="page-wrapper">
                        <div className="blog-title-area">
                            <h2>{NewsDetail.name}</h2>
                            <div className="blog-meta big-meta">
                                <small>
                                    <a href="">{NewsDetail.created_at}</a>
                                </small>
                                <small>
                                    <a href="">
                                        <i className="fa fa-eye"></i> {NewsDetail.view}
                                    </a>
                                </small>
                                <small>
                                    <a href="">{NewsDetail.category_id}</a>
                                </small>
                            </div>
                        </div>
                        <br/>
                        <div className="single-post-media">
                            <img src={ `${process.env.REACT_APP_BE}${NewsDetail.file}` } alt="website template image" className="img-fluid"/>
                        </div>
                        <div className="blog-content">
                            <div className="pp"> 
                                <p dangerouslySetInnerHTML={{__html: NewsDetail.content}}></p>
                            </div>
                        </div>
                    <hr className="invis1"/>
                        <div className="custombox clearfix">
                            <h4 className="small-title">Bình luận</h4>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="comments-list">  
                                        <div id="fb-root"></div>
                                            <div className="fb-comments " 
                                                 data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
                                                 data-width="" data-numposts="3">
                                            </div>     
                                        </div>
                                    </div>
                                </div>
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
              </div>
            </div>
        </div>
  </section>
  </div>
);
}