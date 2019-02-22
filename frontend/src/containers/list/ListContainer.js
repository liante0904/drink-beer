import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as listActions from 'store/modules/list';
import BeerListTemplate from 'components/Beer/BeerListTemplate';
import { bindActionCreators } from 'redux'

class ListContainer extends Component {

  componentDidUpdate(prevProps, prevState) {
    const { ListActions } = this.props;
    ListActions.getBeerList();
  }

  render(){
    console.log(JSON.stringify(this.props.list));
    return (
      <BeerListTemplate
      />
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