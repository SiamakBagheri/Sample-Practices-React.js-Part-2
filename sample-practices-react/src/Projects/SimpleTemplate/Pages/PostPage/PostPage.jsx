import { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import { LoadPost } from "./LoadPost";

const PostPage = () => {
  const { id } = useParams();
  const [Post, setPost] = useState(null);
  console.log(Post);

  useEffect(() => {
    LoadPost(id).then((res) => setPost(res.data));
  }, [id]);

  return (
    <Layout>
      {!Post ? (
        <p>Loading</p>
      ) : (
        <>
          <h1> {Post.title} </h1>
          <small> ID: {Post.id} </small> <hr/>
          <small> Author: {Post.author} </small>
          <p> {Post.body} </p>
        </>
      )}
    </Layout>
  );
};

export default PostPage;
