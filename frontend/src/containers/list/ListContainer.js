import { connect } from 'react-redux';
import * as listActions from 'store/modules/list';
import BeerListTemplate from 'components/Beer/BeerListTemplate';
//import { bindActionCreators } from 'redux'


// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedTodoState: state.todoState
  }
}
 
// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchTodos: () => dispatch(listActions.getBeerList())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BeerListTemplate);

/*
export default connect(
  (state) => ({
    beers: state.list.get('beers')
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch)
  })
)(BeerListTemplate);
*/