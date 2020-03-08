import React, {Component} from "react";
import GlobalStyles from "../styles/GlobalStyles.jsx";
import RegisterFormContainer from "../containers/RegisterFormContainer.jsx";



class App extends Component {
    render() {
        return (
            <div>
                <RegisterFormContainer />
                <GlobalStyles />
            </div>
        );
    }
}

export default App;
