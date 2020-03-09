import { connect } from "react-redux";
import {onRegisterUserRequest} from "../ducks/auth/actions.js";
import Form from "../components/RegisterForm.jsx";


export default connect(
    state => {
        return {
            isClose: state.auth.isClose,
        };
    },
    { onRegisterUserRequest },
)(Form);
