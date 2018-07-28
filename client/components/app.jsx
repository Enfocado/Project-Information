import React from 'react';
import styled, { css } from 'styled-components';
import NavBar from './navbar';
import Creator from './creator';
import Title from './title';
import VideoPlayer from './video-player';

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
          <VideoPlayer />
        </Div>
      </Div>
    );
  }
}

const Div = styled.div`
  font: 100% "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
  ${props => props.projectInformation && css`
    font: 100% "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
    width: 60%;
    height: 50%;
    margin: 0 auto;
    padding-top: 0;
  `}
`;

module.exports = App;
