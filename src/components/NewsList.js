import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import { fetchTweets } from '../services/twitterService';
import './NewsList.css';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const newsData = await fetchTweets();
      setNews(newsData);
    };
    getNews();
  }, []);
<h3>Latest News</h3>
  return (
    <div className="news-container">
      <aside className="latest-news">
        {news.slice(0, 1).map((item, index) => (
          <div key={index} className="latest-news-item">
            <h3>Latest News</h3>
            {/* <img src={item.image} alt={item.title} className="news-image" /> */}
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </aside>
      <div className="news-grid">
        {news.slice(1).map((item, index) => (
          <NewsItem key={index} news={item} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
