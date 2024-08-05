import React from 'react';
import './NewsItem.css';
<h3>Latest News</h3>
const NewsItem = ({ news }) => (
  <div className="news-item">
    <img src={news.image} alt={news.title} className="news-image" />
    <h2>{news.title}</h2>
    <p>{news.description}</p>
    <a href={news.url} target="_blank" rel="noopener noreferrer">Read more</a>
  </div>
);

export default NewsItem;
