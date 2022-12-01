import "./Blog.scss";
import { Link } from "react-router-dom";
import { getListNewsAPI,getlistNews3NewsAPI} from "../../../services/normal/NewsService";
import Loading from "../../../components/Loading/Loading";
import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import Paginate from '../../../components/Paginate/Paginate';
import Pagination from 'react-bootstrap/Pagination';
import ReactPaginate from 'react-paginate';
import ListUser from "../../admin/User/ListUser/ListUser";
import { ListConfigService } from '../../../services/normal/ConfigService';
function News(){
    const token = useSelector(state => state.auth.token);
    const [getconfig, setConfig] = useState([])
    const [ListNews, getNews] = useState([]);
    const [ListNewsNew, getNewsNewClient] = useState([]);
    const [ListNewsFeatured, getNewsFeaturedClient] = useState([]);
    const [ListNewsCategory, getNewsCategoryClient] = useState([]);
    const [loading, getLoading] = useState(false);
    const [paginate, setPaginate] = useState(null);
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
  
          let respon = await ListConfigService()
          let dataa = respon.data;
          let dataArrr = dataa.data;
          setConfig(dataArrr)

          getNewsNewClient(data3New);

  
          getNews(dataArr);
          let Pagination = data.meta.pagination ?? null;
          setPaginate(Pagination);
  
          getLoading(false);
        
      };
      useEffect(()=>{

        start();
      },[page]);
      const onChangePage = (number) =>{
        setPage(number);
      }

      return(
        <div className="News">
        <div className="page-title wb">
            <div className="container news">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h1>Tin Tức</h1>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                            <li className="breadcrumb-item">News</li>
                          
                        </ol>
                    </div>                   
                </div>
            </div>
        </div>
          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 leftBlock">   
                <>
                    <div className="page-wrapper">  
                        <div className="blog-list clearfix">
                        {loading && <Loading />}
                            {
                        ListNews.map((item,index) => {
                        return(
                        <div className="blog-box"  key={index}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="post-media">
                                        <Link to={item.slug}>
                                            <img src={`${process.env.REACT_APP_BE}${item.file}`} alt="" className="img-fluid"/>
                                            <div className="hovereffect"></div>
                                        </Link>
                                    </div>
                                </div>
                                                            
                                <div className="blog-meta big-meta col-md-8">
                                    <Link to={item.slug}>
                                        <h4>{item.name}</h4>
                                        <p className="an " dangerouslySetInnerHTML={{__html: item.content}}></p>
                                    </Link>
                                    <samp><p><i className="far fa-clock"></i> {item.created_at}</p></samp>
                                </div> 
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
                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 rightBlock">
                  <div className="sidebar">
                    <div className="widget">
                        <div className="sf_right_featured--header"><h2>Xem nhiều tuần qua</h2></div>
                            <div className="sf_right_featured--box sf_right_featured--first-box">
                                <div className="sf_right_featured--box-thumb"> 
                                    <Link>
                                        <div className="sf_right_featured--thumbnail-container"> 
                                            <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2022/11/Apple-Watch-cuu-song-nguoi-5.jpg" alt="Apple Watch cứu sống một cậu bé ở Ấn Độ khi rơi ở thung lũng cao gần 50 mét" data-pin-no-hover="true"/>
                                            <div className="sf_right_featured--thumb-overlay"></div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="sf_right_featured--box-content">
                                    <Link>
                                        Apple Watch cứu sống một cậu bé ở Ấn Độ khi rơi ở thung lũng cao gần 50 mét
                                    </Link>
                                </div>
                            </div>
                            <div className="blog-list-widget">
                            {loading && <Loading />}{
                                ListNewsNew.map((item,index) => {
                                    return(
                                        <div className="sf_right_featured--box sf_right_featured--small-box" key={index}>
                                            <div className="sf_right_featured--box-thumb"> 
                                                    <Link to={item.slug}>
                                                    <div className="sf_right_featured--thumbnail-container">
                                                        <img src={ `${process.env.REACT_APP_BE}${item.file}` } alt="website template image" className="img-fluid float-left"/>
                                                        <div className="sf_right_featured--thumb-overlay"></div>
                                                    </div> 
                                                    </Link>
                                            </div>
                                            <div className="sf_right_featured--box-content"> 
                                                <Link to={item.slug}>{item.name}</Link>
                                            </div>                                                   
                                        </div>
                                    )                                                 
                                })
                            }   
                            </div>
                    </div>
                    <div className="widget">
                        <div className="elementor-widget-container">
                            <div className="sf-social">
                                <div className="sf-social__wrapper">
                                    <div className="sf-social--header">
                                        <h2>Kết nối với Sforum</h2>
                                    </div>
                                    <div className="sf-social-icons">
                                        <div className="sf-social-icon--container"> 
                                        <Link   
                                        onClick={()=> window.open(
                                            getconfig.SocialFaceBook ? getconfig.SocialFaceBook.link : ""
                                            , "_blank")}
                                            target="_blank" rel="nofollow">
                                            <img src={`${process.env.REACT_APP_BE}${ getconfig.SocialFaceBook ? getconfig.SocialFaceBook.description : ""}`} alt="Facebook" data-pin-no-hover="true" className="img-icon" />
                                        </Link>       
                                        </div>
                                        <div className="sf-social-icon--container"> 
                                            <a href="https://www.facebook.com/groups/" target="_blank"> 
                                                <img src="https://cdn.cellphones.com.vn/media/wysiwyg/Group_Facebookrs.png" alt="Instagram" data-pin-no-hover="true" className="img-icon"/>
                                            </a>
                                        </div>
                                        <div className="sf-social-icon--container"> 
                                            <a href="https://www.tiktok.com/" target="_blank" rel="nofollow">
                                                <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2021/12/tiktok-1.png" alt="Tiktok" data-pin-no-hover="true" className="img-icon"/>
                                            </a>
                                        </div>
                                        <div className="sf-social-icon--container"> 
                                        <Link   
                                            onClick={()=> window.open(
                                                getconfig.SocialYoutube ? getconfig.SocialYoutube.link : ""
                                                , "_blank")}
                                                target="_blank" rel="nofollow">
                                            <img src={`${process.env.REACT_APP_BE}${ getconfig.SocialYoutube ? getconfig.SocialYoutube.description : ""}`}alt="Youtube" data-pin-no-hover="true" className="img-icon" />
                                        </Link>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget">
                        <div className="banner-spot clearfix">
                            <div className="banner-img">
                                <Link><img src="../img/banner_03.jpg" alt="" className="img-fluid"/></Link> 
                            </div>
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