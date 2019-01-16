import React, { Component } from 'react';
import BeerList from 'components/list/BeerList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as listActions from 'store/modules/list';
import * as api from 'lib/api';
class ListContainer extends Component {
  getBeerList = () => {
    const { dispatch } = this.props;
    const beers = api.getBeerList();
    beers.then( response => { console.log( response.data )})

  }

  componentDidMount() {
    this.getBeerList();
  }

  componentDidUpdate(prevProps, prevState) {
    // 페이지/태그가 바뀔 때 리스트를 다시 불러옵니다.
    if(prevProps.page !== this.props.page || prevProps.tag !== this.props.tag) {
      this.getBeerList();
      // 스크롤을 맨 위로 올립니다.
      document.documentElement.scrollTop = 0; 
    }
  }
  
  
  render() {
    const { loading, beers } = this.props;
    if(loading) return null; // 로딩 중에는 아무것도 보여주지 않습니다.
    return (
        <BeerList beers={beers}/>
          //Todo Pagination
    );
  }
}

export default connect(
  (state) => ({
    lastPage: state.list.get('lastPage'),
    beers: state.list.get('beers')
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch)
  })
)(ListContainer);
