import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

let composeEnhancers = compose;
if (typeof window !== 'undefined') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store