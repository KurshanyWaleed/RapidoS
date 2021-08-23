
import { createStore, applyMiddleware } from 'redux'


import { getUserReducer } from './reducers/userReducers'
    ; import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];
const store = createStore(getUserReducer,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;