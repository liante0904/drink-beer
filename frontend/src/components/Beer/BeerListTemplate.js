import React from 'react';
import HeaderContainer from 'containers/common/HeaderContainer';
import { Link } from 'react-router-dom';

const BeerListTemplate = ({form, children}) => {
    return (
        <main className="beer-list-template">
        {/* <Link to="/BeerAddForm">addBeer</Link>       */}
            <div className="title"></div>
            <h1>맥주 목록</h1>
            <section className="beers-wrapper">
                {children}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
        </main>
    );
};

export default BeerListTemplate;