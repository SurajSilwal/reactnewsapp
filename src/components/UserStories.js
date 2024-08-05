import React from 'react';

const UserStories = ({ stories }) => (
  <div className="user-stories">
    <h3>User Stories</h3>
    <ul>
      {stories.map((story, index) => (
        <li key={index}>{story}</li>
      ))}
    </ul>
  </div>
);

export default UserStories;
