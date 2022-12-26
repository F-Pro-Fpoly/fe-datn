import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useEffect, useLayoutEffect } from "react";
import { useState,  forwardRef, useImperativeHandle, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Loading/Loading";
import Paginate from '../../../components/Paginate/Paginate';
import { setLoading } from "../../../redux/slices/InterfaceSile";
import { getlistComment } from "../../../services/normal/NewsService";
import { useParams } from "react-router";
const Comment = forwardRef(({}, ref) => {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const param = useParams();
  const [loading, getLoading] = useState(false);
  const [Comment, getComment] = useState([]);
  const [paginate, setPaginate] = useState(null);
  const [page, setPage] = useState(1);
  const slug = param.slug;
  document.title = "Chi tiết tin";
   
    const start = async () => {
      getComment([]);
      getLoading(true);
      let res = await getlistComment(slug, page);
      let data = res.data;
      let dataArr = data.data;
  
      getLoading(false);
      getComment(dataArr);
  
      // handle paginate
      let pagination = data.meta.pagination ?? null;
      setPaginate(pagination);
    };
    useImperativeHandle(ref, () => ({
      async handleStart() {
        await start();
      }
    }))

    useEffect(()=>{
    start()
    },[param,page]);
    const onChangePage = (number) =>{
      setPage(number);
    }
    const an = (event)=>{
      let elementor = event.target;
      elementor.classList.toggle("an")
    }
    return(
      <>
      {Comment.length>0?(
      <>
     
      {Comment.map((item,index) => {
          return(
          <List sx={{ width: '100%', maxWidth: 850, bgcolor: 'background.paper' }} key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={`${item.user_avatar}`} />
            </ListItemAvatar>
            <ListItemText
              primary={item.user_name}
              secondary={
                <React.Fragment>
                  <Typography
                    onClick={an}
                    className="an"
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"

                  >
                    {item.content}
                    <br/>
                  </Typography>
                  <i className="far fa-clock"></i> {item.created_at}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
              )                  
            }
            
            )
            }
             {loading && <Loading />}

             {paginate && <Paginate pagination = {paginate} onChangePage={onChangePage} />}
           
            </>
    ):( <p>Bình luận đầu tiên</p> )}
    </>
       
    )
})
export default Comment;