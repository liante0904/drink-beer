import React from 'react';

const BeerListTemplate = () => {
    return (
        <main className="beer-list-template">
            <div className="title">
            맥주 목록
            </div>
            <section className="form-wrapper">
            여기는 form
            </section>
            <section className="beers-wrapper">
            여기는 children
            </section>
        </main>
    );
};

export default BeerListTemplate;