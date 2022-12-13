import "../News/Blog.scss";
import { Link } from "react-router-dom";
import { getListCateAPI,getlistTopWeek1API,getlistTopWeek3API} from "../../../services/normal/NewsService";
import Loading from "../../../components/Loading/Loading";
import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import Paginate from '../../../components/Paginate/Paginate';
import Pagination from 'react-bootstrap/Pagination';
import { useParams } from "react-router";
import { ListConfigService } from '../../../services/normal/ConfigService';
function NewsCate(){
    const [getconfig, setConfig] = useState([])
    const [ListCate, getCate] = useState([]);
    const [ListTopWeek3, getListTopWeek3] = useState([]);
    const [ListTopWeek1, getListTopWeek1] = useState([]);
    const [loading, getLoading] = useState(false);
    const [paginate, setPaginate] = useState(null);
    const [page, setPage] = useState(1);
    const param = useParams();
    document.title = "Tin tức";  
    const start = async () => {
        getCate([]);
          getLoading(true);
          const id =param.id;
          let res = await getListCateAPI(id,{},page);
          let data = res.data;
          let dataArr = data.data;
          getCate(dataArr);

          let restw = await getlistTopWeek1API();
          let datatw1 = restw.data;
          let datatw = datatw1.data;
          getListTopWeek1(datatw);

          let resTW = await getlistTopWeek3API();
          let dataNew3 = resTW.data;
          let dataTW3 = dataNew3.data;
          getListTopWeek3(dataTW3);

          let respon = await ListConfigService();
          let dataa = respon.data;
          let dataArrr = dataa.data;
          setConfig(dataArrr);

          let Pagination = data.meta.pagination ?? null;
          setPaginate(Pagination);
          getLoading(false);
      }
      useEffect(()=>{
        start()
      },[param,page]);

      const onChangePage = (number) =>{
        setPage(number);
      }
      return(
        <div className="News">
        <div className="page-title wb">
            <div className="container news">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h1>Tin Tức {ListCate.category_name}</h1>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={"/"}>Trang chủ </Link></li>
                            <li className="breadcrumb-item">Tin tức thuộc {ListCate.category_name}</li>
                          
                        </ol>
                    </div>                   
                </div>
            </div>
        </div>
          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 left-side">   
                <>
                    <div className="page-wrapper">  
                        <div className="blog-list clearfix">    
                            {
                        ListCate.map((item,index) => {
                        return(
                        <div className="blog-box"  key={index}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="post-media">
                                        <Link to={`/chi-tiet/${item.slug}`}>
                                            <img src={`${process.env.REACT_APP_BE}${item.file}`} alt="" className="img-fluid"/>
                                            <div className="hovereffect"></div>
                                        </Link>
                                    </div>
                                </div>
                                                            
                                <div className="blog-meta big-meta col-md-8">
                                    <Link to={`/chi-tiet/${item.slug}`}>
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
                                {paginate && <Paginate pagination = {paginate} onChangePage={onChangePage} />}
                            </nav>
                        </div>
                    </div> 
                  </>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 right-side">
                  <div className="sidebar">
                        <div className="widget">
                            <div className="sf_right_featured--header"><h2>Xem nhiều tuần qua</h2></div>
                            {
                                ListTopWeek1.map((val,index) =>{
                                        return(
                                                <div className="sf_right_featured--box sf_right_featured--first-box" key={index}>
                                                    <div className="sf_right_featured--box-thumb"> 
                                                        <Link to={`/chi-tiet/${val.slug}`}>
                                                            <div className="sf_right_featured--thumbnail-container"> 
                                                                <img src={ `${process.env.REACT_APP_BE}${val.file}` } data-pin-no-hover="true"/>
                                                                <div className="sf_right_featured--thumb-overlay"></div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="sf_right_featured--box-content">
                                                        <Link to={`/chi-tiet/${val.slug}`}>{val.name}</Link>
                                                    </div>
                                                </div>
                                            )                                                 
                                })
                            }
                            </div>
                        <div className="widget">
                            <div className="blog-list-widget">
                         { ListTopWeek3.map((item,index) => {
                                    return(
                                        <div className="sf_right_featured--box sf_right_featured--small-box" key={index}>
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
                                                getconfig.SocialGroup ? getconfig.SocialGroup.link : "", "_blank")}
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
                  </div>
                </div>
              </div>
            </div>
        </section>
    </div>
  
      );
  }
export default NewsCate;