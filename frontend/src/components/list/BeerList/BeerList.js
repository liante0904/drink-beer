import React from 'react';

const BeerItem = ({ beerId, beerName, publishedDate, key}) => {
  /* TODO
  const tagList = tags.map(
    tag => <p>{tag},</p>
  );
  */
  return(
    <ul className="beer-list">
      <li key={key}>
        <div className="beer-title"><h2>Beer id : {beerId}</h2></div>
        <div className="beer-name">Beer name : {beerName}</div>
      </li>
    </ul>
  )
};


const BeerList = ({list}) => {
  const beerList = list.map(
    (beerItem, index) => {
      const { beerId, beerName } = beerItem.toJS();
      return (
        <BeerItem
          beerId={beerId}
          beerName={beerName}
          //tags={tags}
          key={index}
          //id={_id}
        />
      )
    }
  );

  return (
    <div className="beer-list">
      {beerList}
    </div>
  );
};


export default BeerList;