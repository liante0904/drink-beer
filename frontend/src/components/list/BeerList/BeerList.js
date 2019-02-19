import React from 'react';


const BeerItem = ({ title, body, publishedDate, tags, id}) => {
  /* TODO
  const tagList = tags.map(
    tag => <p>{tag},</p>
  );
  */
  return(
    <ul className="beer-list">
      <li key={id}>
        <div className="beer-key"><h2>Beer _id : {id}</h2></div>
        <div className="beer-title"><h2>Beer title : {title}</h2></div>
        <div className="beer-name">Beer body : {body}</div>
        <div className="beer-tag">Beer tag : 
          <div className="beer-tag-list"></div>
        </div>
        <div className="beer-publishedDate">Beer publishedDate : {publishedDate}</div>
      </li>
    </ul>
  )
};

const BeerList = ({beers}) => {
  const beerList = beers.map(
    (item, index) => {
//      const { _id, title, body, publishedDate, tags } = beer.toJS();

      return (
        <BeerItem
          title={item.title}
          body={item.body}
          publishedDate={item.publishedDate}
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