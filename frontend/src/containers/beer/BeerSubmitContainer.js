import React, { Component } from 'react';
import BeerSubmit from 'components/BeerSubmit';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux'
//import * as beerActions from 'store/modules/beer';

class BeerSubmitContainer extends Component {
  handleSubmit = () => {
    console.log('handleSubmit');
    alert('TODO handleSubmit');
  }

  render() {
    const { handleSubmit } = this;

    return (
      <BeerSubmit
        onSubmit={handleSubmit}
      />
    );
  }
}
export default (BeerSubmitContainer);
/*
export default connect(
  (state) => ({
    beers: state.list.get('beers'),
    loading: state.pender.pending['list/GET_POST_LIST']
  }),
  (dispatch) => ({
    BeerActions: bindActionCreators(beerActions, dispatch)
  })
)(BeerSubmitContainer);
*/
