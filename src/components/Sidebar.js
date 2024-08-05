import React from 'react';
import './Sidebar.css';

const Sidebar = ({ news }) => (
  <aside className="sidebar">
    <h3>Latest News</h3>
    {news.map((item, index) => (
      <div key={index} className="latest-news-item">
        <img src={item.image} alt={item.title} className="news-image" />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    ))}
  </aside>
);

export default Sidebar;
