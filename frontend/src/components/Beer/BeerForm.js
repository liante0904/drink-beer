import React from 'react';

const BeerForm = ({value, onKeyPress, onChange, onCreate}) => {
    
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <button className="create-button" onClick={onCreate}>
             추가
            </button>
        </div>
    );
};
export default BeerForm;