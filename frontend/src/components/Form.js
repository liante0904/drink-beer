import React from 'react';

const Form = ({value}) => {
    return (
        <div className="form">
            <input value={value}/>
            <div>
                추가
            </div>
        </div>
    );
};
export default Form;