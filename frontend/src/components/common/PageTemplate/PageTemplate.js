import React from 'react';
import styles from './PageTemplate.css';

const PageTemplate = ({children}) => {
  return (
    <div>
      <h1>(((((PageTemplate)))))</h1>
      <div className="PageTemplate">
        {children}
      </div>
    </div>
  );
};

export default PageTemplate;
