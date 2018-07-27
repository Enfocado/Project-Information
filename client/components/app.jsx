import React from 'react';
import styled, { css } from 'styled-components';
import NavBar from './navbar';
import Creator from './creator';
import Title from './title';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Div>
        <Div>
          <NavBar />
        </Div>
        <Div projectInformation>
          <Creator />
          <Title />
        </Div>
      </Div>
    );
  }
}

const Div = styled.div`
  ${props => props.projectInformation && css`
    width: 60%;
    height: 50%;
    margin: 0 auto;
    padding-top: 0;
  `}
`;

module.exports = App;
