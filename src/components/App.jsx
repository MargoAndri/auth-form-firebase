import React, {Component} from "react";
import GlobalStyles from "../styles/GlobalStyles.jsx";
import styled from "styled-components";
import RegisterFormContainer from "../containers/RegisterFormContainer.jsx";
import image from "../img/cosmos.png";

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

const ColOne = styled.div`
    position: relative;
    width: 50%;
    float: left;
    margin: 10px;
`;

const ColTwo = styled.div`
  position: relative;
  width: 50%;
  float: right;
`;

class App extends Component {
    render() {
        return (
            <ContentContainer>
                    <ColOne>
                        <RegisterFormContainer />
                    </ColOne>
                    <ColTwo>
                        <img src={image} alt="cosmos-image" />
                    </ColTwo>
                <GlobalStyles />
            </ContentContainer>
        );
    }
}

export default App;
