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
            <div className="page-title">
            <div className="container news">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2>Tin Tuc</h2>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">News</a></li>
                        </ol>
                    </div>                   
                </div>
            </div>
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
                                                <div className="fb-comment-embed"
                                                  data-href="https://www.facebook.com/zuck/posts/10102735452532991?comment_id=1070233703036185"
                                                  data-width="500"></div>
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
                      {loading && <Loading />}
                          {
                      ListNewsNew.map((item,index) => {
                      return(
                        <div class="sf_right_featured--box sf_right_featured--small-box"key={index}>
                        <div class="sf_right_featured--box-thumb"> 
                                <Link to={item.slug}>
                                <div class="sf_right_featured--thumbnail-container">
                                    <img src={ `${process.env.REACT_APP_BE}${item.file}` } alt="website template image" className="img-fluid float-left"/>
                                    <div class="sf_right_featured--thumb-overlay"></div>
                                </div> 
                                </Link>
                        </div>
                        <div class="sf_right_featured--box-content"> 
                            <Link to={item.slug}>{item.name}</Link>
                            <p>{item.created_at}</p>
                        </div>
                                    
                        </div>
                      )
                                            
                    })
                    }
                          
                      </div>
                    </div>
                    <div class="widget">
                    <div class="elementor-widget-container">
                        <div class="sf-social">
                            <div class="sf-social__wrapper">
                                <div class="sf-social--header">
                                    <h2>Kết nối với Sforum</h2>
                                </div>
                                <div class="sf-social-icons">
                                    <div class="sf-social-icon--container"> 
                                        <a href="https://www.facebook.com/SforumTech" target="_blank" rel="nofollow">
                                            <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2021/12/facebook-icon.png"
                                            alt="Facebook" data-pin-no-hover="true"/> 
                                        </a>
                                    </div>
                                    <div class="sf-social-icon--container"> 
                                        <a href="https://www.facebook.com/groups/sforum28" target="_blank"> 
                                            <img src="https://cdn.cellphones.com.vn/media/wysiwyg/Group_Facebookrs.png" alt="Instagram" data-pin-no-hover="true"/>
                                        </a>
                                    </div>
                                    <div class="sf-social-icon--container"> 
                                        <a href="https://www.tiktok.com/@sforumvn" target="_blank" rel="nofollow">
                                            <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2021/12/tiktok-1.png" alt="Tiktok" data-pin-no-hover="true"/>
                                        </a>
                                    </div>
                                    <div class="sf-social-icon--container"> 
                                        <a href="https://www.youtube.com/channel/UCjxjHD44GP4EZWgLyV-NnWg" target="_blank" rel="nofollow">
                                            <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2021/12/youtube-1.png" alt="Youtube" data-pin-no-hover="true"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="widget">
                                <div class="banner-spot clearfix">
                                    <div class="banner-img">
                                       <Link><img src="../img/banner_03.jpg" alt="" class="img-fluid"/></Link> 
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