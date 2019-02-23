import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as listActions from 'store/modules/list';
import BeerListTemplate from 'components/Beer/BeerListTemplate';
import BeerList from 'components/list/BeerList';

class ListContainer extends Component {
  getBeerList(){
    const { ListActions } = this.props;
    ListActions.getBeerList();
  }
  componentDidUpdate(prevProps, prevState) {
    this.getBeerList();
    console.log('componentDidUpdate');
  }

  render(){
    console.log(JSON.stringify(this.props.list));
    const { getBeerList } = this;
    const { list } = this.props;
    return (
      <div>
        <BeerListTemplate
        />
        <BeerList
          list={list}
        />
        <button onClick={getBeerList}>Call Api</button>
      </div>
    );  
  }
}

export default connect(
    (state) => ({
      list: state.list
    }),
    (dispatch) => ({
      ListActions: bindActionCreators(listActions, dispatch)
    })
  )(ListContainer);