import React, {Component} from "react";
import RegisterButton from "./common/Button.jsx";
import GlobalStyles from "../styles/GlobalStyles.jsx";
import styled from "styled-components";
import RegisterFormContainer from "../containers/RegisterFormContainer.jsx";

const ContentContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
  min-height: 100vh;
  display: flex;
  @media (min-width: 1200px) {
    width: 100%;
  }
`;

class App extends Component {
    render() {
        return (
            <ContentContainer>
                <RegisterFormContainer />
                <div>
                    <RegisterButton />
                </div>
                <GlobalStyles />
            </ContentContainer>
        );
    }
}

export default App;
