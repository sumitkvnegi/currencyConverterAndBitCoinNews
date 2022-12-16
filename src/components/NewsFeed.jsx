import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/news"
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.articles);
        setArticles(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  const first7Articles = articles?.slice(0,7);
  return <div className="news-feed">
    <h2>NewsFeed</h2>
    {first7Articles?.map((article) => (<div className="anchor" key={article.url}><a href={article.url}><p>{article.title}</p></a></div>))}
  </div>;
};

export default NewsFeed;
