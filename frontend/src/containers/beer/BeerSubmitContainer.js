import React, { Component } from 'react';
import BeerSubmit from 'components/BeerSubmit';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from 'store/modules/editor';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux'
//import * as beerActions from 'store/modules/beer';

class BeerSubmitContainer extends Component {
  handleSubmit = () => {
    const { EditorActions } = this.props;
    EditorActions.addBeer();
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
export default connect(
  (state) => ({
      beerId: state.editor.get('beerId'),
      beerName: state.editor.get('beerName'),
      tags: state.editor.get('tags')
    }),
    (dispatch) => ({
      EditorActions: bindActionCreators(editorActions, dispatch)
    })
)(BeerSubmitContainer);
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
