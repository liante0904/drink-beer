import { createStore } from 'redux';
import modules from './modules';

const configure = () => {
    // 기본 작성(배포) 
    // const store = createStore(modules);
    
    // 개발 작성
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    const store = createStore(modules, devTools);
    return store;
}
export default configure;