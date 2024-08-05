import React from 'react';
import Persona from './Persona';
import UserStories from './UserStories';
import './PersonasPage.css';

const personasData = [
  // Your personas data here
];

const PersonasPage = () => (
  <div className="personas-page">
    {personasData.map((persona, index) => (
      <div key={index} className="persona-section">
        <Persona
          name={persona.name}
          age={persona.age}
          occupation={persona.occupation}
          background={persona.background}
          goals={persona.goals}
          techSavviness={persona.techSavviness}
        />
        <UserStories stories={persona.stories} />
      </div>
    ))}
  </div>
);

export default PersonasPage;
