import React from 'react';

const PageTemplate = ({children}) => {
  return (
    <div>
      <div className="PageTemplate">
        {children}
      </div>
    </div>
  );
};

export default PageTemplate;
