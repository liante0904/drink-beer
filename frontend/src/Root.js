import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import store from './store'; 배포용
import App from './component/App';
import configure from './store/configure'; // 개발용

class Root extends Component {
  render() {
    const store = configure();
    return (
      <div className="App">
        <Provider store={store}>
          <App/>
        </Provider>
      </div>
    );
  }
}

export default Root;
