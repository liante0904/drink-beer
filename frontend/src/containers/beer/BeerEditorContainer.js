import React, { Component } from 'react';
import BeerEditor from 'components/BeerEdit/BeerEditor'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from 'store/modules/editor';
import * as listActions from 'store/modules/list';

class BeerEditorContainer extends Component {
    handleChangeInput = ({ name, value }) => {
        const { EditorActions } = this.props;
        EditorActions.changeInput({name, value});
    }

    handleSubmit = () => {
        const { ListActions, beer } = this.props;
        const { beerId, beerName, tags } = beer.toJS();

        console.log(beerId, beerName, tags);
        ListActions.insert(beer);
    }

    render() {
        const { beerId, beerName } = this.props;
        const { handleChangeInput, handleSubmit } = this;
        return (
            <BeerEditor
              beerId={beerId}
              beerName={beerName}
              onChangeInput={handleChangeInput}
              onSubmit={handleSubmit}
            />
        );
    }
}

export default connect(
    (state) => ({
        beer: state.editor,
        list: state.list
      }),
      (dispatch) => ({
        EditorActions: bindActionCreators(editorActions, dispatch),
        ListActions: bindActionCreators(listActions, dispatch)
      })
  )(BeerEditorContainer);