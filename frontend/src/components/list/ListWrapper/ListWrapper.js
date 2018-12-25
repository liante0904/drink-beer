import React from 'react';
import classNames from 'classnames/bind';

const cx = classNames.bind();

const ListWrapper = ({children}) => (
  <div className={cx('list-wrapper')}>
    {children}
  </div>
);

export default ListWrapper;
