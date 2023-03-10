import React from "react";

import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../axios"
import ReactMarkdown from 'react-markdown'
export const FullPost = () => { 
  const navigate = useNavigate()
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const {id} = useParams();
  
  React.useEffect(() => {
    axios.get(`/posts/${id}`).then(res => {
      setData(res.data);
      setLoading(false);
    }).catch(err => {
      console.warn(err);
      navigate('/');
    });
  }, []);

  if(isLoading) {
    return <Post isLoading={isLoading} isFullPost/>;
  }

  return (
    <>
      <Post
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl ? `${process.env.REACT_APP_API_URL}${data.imageUrl}`: ''}
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        tags={data.tags}
        isFullPost
      >
      <ReactMarkdown children={data.text}/>
      </Post>
    </>
  );
};
