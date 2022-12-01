import "./DetailBlog.scss";
import "../News/Blog.scss";
import { Link } from "react-router-dom"
import {useEffect, useState} from 'react';
import { useParams } from "react-router";
import {  getNewsDetailClient,getlistNews3NewsAPI,getlistNews9FeaturedAPI,getlistNewsCategoryAPI } from "../../../services/normal/NewsService";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Loading/Loading";
import { setLoading } from "../../../redux/slices/InterfaceSile";
import { ListConfigService } from '../../../services/normal/ConfigService';
export default function DitailNews(){
    const [getconfig, setConfig] = useState([])
  const param = useParams();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const [NewsDetail, setDetail] = useState({
    "code": "",
    "name":"",
    "file":"",
    "views": null,
    "content": "", 
}); 


  const [ListNewsNew, getNewsNewClient] = useState([]);
  const [ListNewsFeatured, getNewsFeaturedClient] = useState([]);
  const [ListNewsCategory, getNewsCategoryClient] = useState([]);
  const [loading, getLoading] = useState(false);
  const slug = param.slug;
  document.title = "Chi tiết tin";
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

          let respon = await ListConfigService()
          let dataa = respon.data;
          let dataArrr = dataa.data;
          setConfig(dataArrr)


          let resCategory = await getlistNewsCategoryAPI({status: 1})
          let dataCategory = resCategory.data
          let dataCy = dataCategory.data
          setDetail({
              ...NewsDetail,
              code: data.code ?? null,
              name: data.name ?? null,
              file: data.file ?? null,
              content: data.content ?? null,
              views: data.views ?? 0,
          });
          dispatch(setLoading(false))
          setDetail(data);
          getNewsNewClient(data3New)
          getNewsFeaturedClient(data9Featured)
          getNewsCategoryClient(dataCy)
          getLoading(false)

  }

  useEffect (()=>{
      start();
  }, []);
    return(
      <div className="Newsdetail">
            <div className="page-title wb">
                <div className="container news">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <h1>Chi tiết tin</h1>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={"/"}>Trang chủ</Link></li>
                                <li className="breadcrumb-item"><Link to={"/tin-tuc"}>Tin tức</Link></li>
                                <li className="breadcrumb-item">Chi tiết tin</li>
                            </ol>
                        </div>                   
                    </div>
                </div>
            </div>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                            <div className="page-wrapper">
                                <div className="blog-title-area">
                                    <h2>{NewsDetail.name}</h2>
                                    <div className="blog-meta big-meta">
                                        <small>
                                            <Link>
                                                <i className="far fa-clock"></i>
                                                {NewsDetail.created_at}
                                            </Link>
                                        
                                        </small>
                                        <small>
                                            <Link>
                                                <i className="fa fa-eye"></i> {NewsDetail.views}
                                            </Link> 
                                        </small>
                                            <Link>
                                            Danh Mục: {NewsDetail.category_name}
                                            </Link>
                                    </div>
                                </div>
                                <br/>
                                <div className="single-post-media">
                                    <img src={ `${process.env.REACT_APP_BE}${NewsDetail.file}` } alt="website template image" className="img-fluid"/>
                                </div>
                                <div className="blog-content">
                                    <div className="pp"  dangerouslySetInnerHTML={{__html: NewsDetail.content}}> 
                                    </div>
                                </div>
                            <hr className="invis2"/>
                                <div className="custombox clearfix">
                                    <h4 className="small-title">Bình luận</h4>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="comments-list">
                                                <div className="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="" data-numposts="5"></div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
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
                                </div>
                                <div className="widget">
                                <div className="blog-list-widget">
                                    {
                                ListNewsNew.map((item,index) => {
                                return(
                                    <div className="sf_right_featured--box sf_right_featured--small-box"key={index}>
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