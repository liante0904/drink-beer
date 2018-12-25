import React from 'react';
import styles from './BeerList.css';

const BeerItem = ({ title, body, publishedDate, tags, id}) => {
  const tagList = tags.map(
    tag => <p>{tag},</p>
  );
  return(
    <ul className="beer-list">
      <li key={id}>
        <div className="beer-key"><h2>Beer _id : {id}</h2></div>
        <div className="beer-title"><h2>Beer title : {title}</h2></div>
        <div className="beer-name">Beer body : {body}</div>
        <div className="beer-tag">Beer tag : 
          <div className="beer-tag-list">{tagList}</div>
        </div>
        <div className="beer-publishedDate">Beer publishedDate : {publishedDate}</div>
      </li>
    </ul>
  )
};

const BeerList = ({beers}) => {
  const beerList = beers.map(
    (beer) => {
      const { _id, title, body, publishedDate, tags } = beer.toJS();
      console.log(beer)
      return (
        <BeerItem
          title={title}
          body={body}
          publishedDate={publishedDate}
          tags={tags}
          key={_id}
          id={_id}
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