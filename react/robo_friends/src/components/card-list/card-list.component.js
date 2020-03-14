import React from 'react';

import Card from '../card/card.component';

/**
 * Take robots arry from index.js
 * Create a map from the array
 * Wrap all return state into div
 * Use card component for creating this component for each element
 */
const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((el, i) => {
          return (
            <Card 
              key={robots[i].id}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          );
        })
      }
    </div>
  );
};

export default CardList;