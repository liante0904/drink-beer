import React from 'react';

const Form = ({value, onChange}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange}/>
            <div>
                추가
            </div>
        </div>
    );
};
export default Form;