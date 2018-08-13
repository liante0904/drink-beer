import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BeerAddForm } from '../pages';
const BeerForm = ({value, onChange}) => {
    
    return (
        <div className="form">
            <input value={value} onChange={onChange}/>
            <div>
                
            </div>
        </div>
    );
};
export default BeerForm;