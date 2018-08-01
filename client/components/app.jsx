import React from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import NavBar from './navbar';
import Creator from './creator';
import Title from './title';
import VideoPlayer from './video-player';
import Funding from './funding';
import Badges from './badges';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projectName: 'The Looking Glass: A Holographic Display for 3D Creators',
      projectDescription: 'The Looking Glass is the first desktop holographic display designed for 3D creators. No VR or AR headgear required.',
      currentlyFunded: 528960,
      fundingGoal: 50000,
      startDate: '2017-07-28T14:55:11.000Z',
      endDate: '2019-02-22T13:40:15.000Z',
      videoLink: 'https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1&rel=0',
      isFollowed: 0,
      category: 'Hardware',
      location: 'Brooklyn, NY',
      creatorID: 49,
      backers: 50,
      companyName: 'By Looking Glass',
      companyLogo: 'http://lorempixel.com/640/480',
    };
  }

  componentDidMount() {
    axios.get('/project/1').then((res) => {
      this.setState({
        projectName: res.data.Project_Name,
        projectDescription: res.data.Project_Description,
        currentlyFunded: res.data.Currently_Funded,
        fundingGoal: res.data.Funding_Goal,
        startDate: res.data.Start_Date,
        endDate: res.data.End_Date,
        videoLink: res.data.Video_Link,
        isFollowed: res.data.Is_Followed,
        category: res.data.Category,
        location: res.data.Location,
        creatorID: res.data.Creator_ID,
        backers: res.data.Backers,
        companyName: res.data.Company_Name,
        companyLogo: res.data.Company_Logo,
      });
    }).catch((err) => {
      throw err;
    });
  }

  getDateDiff() {
    const date1 = new Date(this.state.endDate);
    const date2 = new Date();
    const ms = date1 - date2;
    let s = Math.floor(ms / 1000);
    let m = Math.floor(s / 60);
    s %= 60;
    let h = Math.floor(m / 60);
    m %= 60;
    const d = Math.floor(h / 24);
    h %= 24;

    return d;
  }

  render() {
    const {
      projectName, projectDescription, currentlyFunded, fundingGoal, startDate, endDate,
      videoLink, isFollowed, category, location, creatorID, backers, companyName, companyLogo,
    } = this.state;

    const daysToGo = this.getDateDiff();
    const date = new Date(endDate);

    return (
      <Div>
        <Div>
          <NavBar />
        </Div>
        <Div projectInformation>
          <Creator
            logo={companyLogo}
            company={companyName}
            companyID={creatorID}
          />
          <Title project={projectName} description={projectDescription} />
          <Funding
            funding={currentlyFunded}
            goal={fundingGoal}
            start={startDate}
            end={date}
            days={daysToGo}
            follow={isFollowed}
            backers={backers}
          />
          <VideoPlayer video={videoLink} />
          <Badges category={category} location={location}/>
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
    height: auto;
    margin: 0 auto;
    padding-top: 0;
  `}
`;

module.exports = App;
