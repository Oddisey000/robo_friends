import React from 'react';

// Generate a card component by using robohash resource to generate new robot image
const Card = ({id, name, email}) => {
  return (
    <div className="bg-light-green dib br3 ma2 grow bw2 shadow-5 tc">
      <img src={`https://robohash.org/${id}?200x200`} alt="The robot for the card"/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;