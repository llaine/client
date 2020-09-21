import rootReducer from 'reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const configureStore = createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
