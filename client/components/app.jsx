import React from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import NavBar from './navbar';
import Creator from './creator';
import Title from './title';
import VideoPlayer from './video-player';
import Funding from './funding';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    axios.get('/project/301').then((err, res) => {
      this.setState(res.data);
    }).catch((err) => {
      throw err;
    });
  }

  render() {
    return (
      <Div>
        <Div>
          <NavBar />
        </Div>
        <Div projectInformation>
          <Creator logo={companyLogo} />
          <Title />
          <Funding />
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
    width: 75%;
    height: 50%;
    margin: 0 auto;
    padding-top: 0;
  `}
`;

module.exports = App;
