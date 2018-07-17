import { CREATE_CARD } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case CREATE_CARD:
            return action.payload;
        default:
            return state;
    }
}