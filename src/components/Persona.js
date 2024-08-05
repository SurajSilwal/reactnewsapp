import React from 'react';

const Persona = ({ name, age, occupation, background, goals, techSavviness }) => (
  <div className="persona">
    <h2>{name}</h2>
    <p><strong>Age:</strong> {age}</p>
    <p><strong>Occupation:</strong> {occupation}</p>
    <p><strong>Background:</strong> {background}</p>
    <p><strong>Goals:</strong> {goals.join(', ')}</p>
    <p><strong>Tech Savviness:</strong> {techSavviness}</p>
  </div>
);

export default Persona;
