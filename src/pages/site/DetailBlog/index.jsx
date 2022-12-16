import "./DetailBlog.scss";
import "../News/Blog.scss";
import { Link } from "react-router-dom"
import {useEffect, useState,useRef} from 'react';
import { useParams } from "react-router";
import {
        getNewsDetailClient,
        getlistTopWeek1API,
        getlistTopWeek3API,
        getListNewsDMAPI
    } from "../../../services/normal/NewsService";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Loading/Loading";
import { setLoading } from "../../../redux/slices/InterfaceSile";
import { ListConfigService } from '../../../services/normal/ConfigService';
import { toast,ToastContainer } from 'react-toastify';
import Comment from "./Comment";
import InputComment from "./InputComment";
export default function DitailNews(){
    const [getconfig, setConfig] = useState([])
    const user = useSelector(state => state.auth.user);
    const param = useParams();
    const dispatch = useDispatch();
    const token = useSelector((state)=>state.auth.token);
    const FormRep = useRef();
    const [NewsDetail, setDetail] = useState({
        "code": "",
        "name":"",
        "file":"",
        "views": null,
        "content": "", 
    }); 
    const comentRef = useRef(null);

    const [ListDM, getListDM] = useState([]);
    const [ListTopWeek3, getListTopWeek3] = useState([]);
    const [ListTopWeek1, getListTopWeek1] = useState([]);
    const [loading, getLoading] = useState(false);
    const slug = param.slug;
    document.title = "Chi tiết tin";
    const start = async () =>{
          setDetail([]);
          getLoading(true);
          let res = await getNewsDetailClient(token,slug);
          let data = res.data.data;

          let restw = await getlistTopWeek1API();
          let datatw1 = restw.data;
          let datatw = datatw1.data;
          getListTopWeek1(datatw);
          let resTW = await getlistTopWeek3API();
          let dataNew3 = resTW.data;
          let dataTW3 = dataNew3.data;
          getListTopWeek3(dataTW3);
          let resDM = await getListNewsDMAPI();
          let dataDM = resDM.data;
          let dataDMT = dataDM.data;
          getListDM(dataDMT);
          let respon = await ListConfigService()
          let dataa = respon.data;
          let dataArrr = dataa.data;
          setConfig(dataArrr);
          setDetail(data);
          getLoading(false);
    }
    useEffect (()=>{
        start();
    }, [param]);
    const handleInputComent = () => {
        comentRef.current.handleStart();
    }
    return(
      <div className="Newsdetail">
          {loading && <Loading />}
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
                                                <i className="far fa-clock"></i>
                                                {NewsDetail.created_at}
                                        </small>
                                        <small>
                                                <i className="fa fa-eye"></i> {NewsDetail.views}
                                        </small>
                                            <Link to={`/danh-muc-tin/${NewsDetail.category_id}`}>
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
                                        {
                                            user ? (
                                                <InputComment
                                                    onSubmit={handleInputComent}
                                                />
                                            ):(
                                                <h5>Vui lòng 
                                                <Link to={"/login"} className="text-primary"> đăng nhập </Link>    
                                                 để bình luận</h5>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            
                            <hr className="invis2"/>
                            <div className="custombox clearfix">
                                <h4 className="small-title">Chi tiết bình luận</h4>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Comment
                                            ref={comentRef}
                                        />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                            <div className="sidebar">
                                <div className="widget">

                                            <div className="sf_right_featured--header"><h2>Xem nhiều tuần qua</h2></div>
                                            {
                                ListTopWeek1.map((item,index) => {
                                    return(
                                <div className="sf_right_featured--box sf_right_featured--first-box"key={index}>
                                    <div className="sf_right_featured--box-thumb"> 
                                        <Link to={`/chi-tiet/${item.slug}`}>
                                            <div className="sf_right_featured--thumbnail-container"> 
                                                <img src={ `${process.env.REACT_APP_BE}${item.file}` } data-pin-no-hover="true"/>
                                                <div className="sf_right_featured--thumb-overlay"></div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="sf_right_featured--box-content">
                                    <Link to={`/chi-tiet/${item.slug}`}>{item.name}</Link>
                                    </div>
                                </div>
                                          )                                                 
                                        })
                                    }  
                                </div>
                                <div className="widget">
                                <div className="blog-list-widget">
                                    {
                                ListTopWeek3.map((item,index) => {
                                return(
                                    <div className="sf_right_featured--box sf_right_featured--small-box"key={index}>
                                    <div className="sf_right_featured--box-thumb"> 
                                            <Link to={`/chi-tiet/${item.slug}`}>
                                            <div className="sf_right_featured--thumbnail-container">
                                                <img src={ `${process.env.REACT_APP_BE}${item.file}` } alt="website template image" className="img-fluid float-left"/>
                                                <div className="sf_right_featured--thumb-overlay"></div>
                                            </div> 
                                            </Link>
                                    </div>
                                    <div className="sf_right_featured--box-content"> 
                                        <Link to={`/chi-tiet/${item.slug}`}>{item.name}</Link>
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
                                                <h2>Kết nối với FPro</h2>
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
                                                <Link   
                                                onClick={()=> window.open(
                                                    getconfig.SocialGroup ? getconfig.SocialGroup.link : ""
                                                    , "_blank")}
                                                    target="_blank" rel="nofollow">
                                                    <img src={`${process.env.REACT_APP_BE}${ getconfig.SocialGroup ? getconfig.SocialGroup.description : ""}`} alt="Group" data-pin-no-hover="true" className="img-icon" />
                                                </Link>  
                                                </div>
                                                <div className="sf-social-icon--container"> 
                                                <Link   
                                                onClick={()=> window.open(
                                                    getconfig.SocialTiktok ? getconfig.SocialTiktok.link : ""
                                                    , "_blank")}
                                                    target="_blank" rel="nofollow">
                                                    <img src={`${process.env.REACT_APP_BE}${ getconfig.SocialTiktok ? getconfig.SocialTiktok.description : ""}`} alt="TikTok" data-pin-no-hover="true" className="img-icon" />
                                                </Link>  
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
                                <h2 className="widget-title">Danh mục tin tức</h2>
                              
                                        <div className="link-widget">
                                        {ListDM.map((item,index) => {
                                    return( 
                                        <ul>
                                            <li><Link to={`/danh-muc-tin/${item.id}`}>
                                             {item.name}
                                            </Link></li>
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