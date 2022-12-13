
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Loading/Loading";
import { setLoading } from "../../../redux/slices/InterfaceSile";
import { getlistComment,deleteCommentAPI } from "../../../services/normal/NewsService";
import { useParams } from "react-router";
function Comment(){
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const param = useParams();
  const [loading, getLoading] = useState(false);
  const [Comment, getComment] = useState([]);
  const slug = param.slug;
document.title = "Chi tiết tin";
    const start = async () => {
      getComment([]);
      getLoading(true);
      let res = await getlistComment({token,slug});
      let data = res.data;
      let dataArr = data.data;
      getComment(dataArr);
      getLoading(false);
    }
    useEffect(()=>{
    start()
    },[param]);

    return(
      <>
      {loading && <Loading />}
              {
          Comment.map((item,index) => {
          return(
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={`${item.user_avatar}`} />
            </ListItemAvatar>
            <ListItemText
              primary={item.user_name}
              secondary={
                <React.Fragment>
                  <Typography
                  className='an'
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
            })
            }
            </>
    )
}
export default Comment;