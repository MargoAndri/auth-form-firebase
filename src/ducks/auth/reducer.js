import {REGISTER_NEW_USER_SUCCESS} from './constants.js';

const initialState = {
    isClose: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_NEW_USER_SUCCESS:
            return {
                isClose: true,
            };
        default:
            return state;
    }
}
