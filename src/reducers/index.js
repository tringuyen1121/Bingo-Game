import { combineReducers } from 'redux';
import numberReducer from './number_reducer';
import cardReducer from './card_reducer';

const rootReducer = combineReducers({
    numbers: numberReducer,
    card: cardReducer
});

export default rootReducer;