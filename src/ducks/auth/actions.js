import {REGISTER_NEW_USER_SUCCESS, REGISTER_NEW_USER_REQUEST} from './constants.js';


export const onRegisterUserRequest = user => ({
    user,
    type:  REGISTER_NEW_USER_REQUEST,
});

export const onSubmitNewUserSuccess = () => ({
    type: REGISTER_NEW_USER_SUCCESS,
});
