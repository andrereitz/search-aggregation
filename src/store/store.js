import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import searchReducer from './Search/Search.reducer';

const rootReducer = combineReducers({
    search: searchReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;