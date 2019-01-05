import React from 'react';

const BeerSubmit = ({ onSubmit }) => (
  <div className="beer-submit">
    <button onClick={onSubmit}>Create Beer</button>
  </div>        
);

export default BeerSubmit;
