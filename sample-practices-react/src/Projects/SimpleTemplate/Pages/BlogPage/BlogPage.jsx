import { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import Card from "../../Components/Card/Card";
import "./style.css";
import { get } from "../../Services/Http";

const BlogPage = () => {
  const [dataPosts, setDataPost] = useState([]);
  useEffect(() => {
    get("/posts").then(({ data }) => setDataPost(data));
  }, []);

  const postsCard = dataPosts.map((post, index) => {
    const variant = index === 0 ? "item-1" : "item-2";
    return (
      <Card
        key={index}
        variant={variant}
        data={{
          target: `/post/${post.id}`,
          image: post.image,
          title: post.title,
          summary: post.summary,
        }}
      />
    );
  });

  return (
    <Layout>
      <div className="main">
        <header>
          <h1>Cool Articles</h1>
        </header>
        <div className="band">{postsCard}</div>
      </div>
    </Layout>
  );
};

export default BlogPage;
