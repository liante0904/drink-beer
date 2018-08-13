import React from 'react';
import { Link } from 'react-router-dom';

const BeerListTemplate = ({form, children}) => {
    return (
        <main className="beer-list-template">
            <div className="title">

            <Link to="/BeerAddForm">addBeer</Link>      
            맥주 목록
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="beers-wrapper">
                {children}
            </section>
        </main>
    );
};

export default BeerListTemplate;