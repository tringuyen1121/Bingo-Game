import { DRAW_NUMBER } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case DRAW_NUMBER:
            return action.payload;
        default: 
            return state;
    }
}