import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {carReducer} from "./CarReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const rootReducer = combineReducers({
    carModule: carReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

window.myStore = store