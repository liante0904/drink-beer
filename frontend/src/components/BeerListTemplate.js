import React from 'react';

const BeerListTemplate = ({form, children}) => {
    return (
        <main className="beer-list-template">
            <div className="title">
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