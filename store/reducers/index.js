import { combineReducers } from 'redux'
import restaurantReducer from './restaurants'

const rootReducer = combineReducers({
    restaurantReducer
})

const makeStore = (initialState) => {
    return createStore(rootReducer, initialState);
};

export default makeStore;