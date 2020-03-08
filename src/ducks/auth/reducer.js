import {REGISTER_NEW_USER_SUCCESS} from './constants.js';

const initialState = {
    isClose: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_NEW_USER_SUCCESS:
            console.log('states');
            return {
                isClose: true,
            };
        default:
            console.log('default');
            return state;
    }
}
