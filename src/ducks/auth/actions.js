import {REGISTER_NEW_USER_SUCCESS} from './constants.js';

export const onSubmitNewUser = user => ({
    user,
    type: REGISTER_NEW_USER_SUCCESS,
});
