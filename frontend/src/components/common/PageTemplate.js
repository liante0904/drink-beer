import React from 'react';
import classNames from 'classnames/bind';
import HeaderContainer from 'containers/common/HeaderContainer';
import FooterContainer from 'containers/common/FooterContainer';

const cx = classNames.bind();

const PageTemplate = ({children}) => (
  <div className={cx('page-template')}>
    <HeaderContainer/>
    <main>
      {children}
    </main>
    <FooterContainer />
  </div>
);

export default PageTemplate;
