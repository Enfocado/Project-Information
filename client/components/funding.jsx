import React from 'react';
import styled, { css } from 'styled-components';

const Funding = () => (
  <Div>
    <Progress value="50" max="100" />
    <Paragraph currentlyFunded>
      $516,277
    </Paragraph>
    <Paragraph>
      pledged of $50,000 goal
    </Paragraph>

    <Paragraph backers>
      896
    </Paragraph>
    <Paragraph>
      backers
    </Paragraph>

    <Paragraph backers>
      27
    </Paragraph>
    <Paragraph>
      days to go
    </Paragraph>

    <Button fund>
      Back this Project
    </Button>

    <Div inner>
      <Button follow>
        <Div bookmark>
          <Image src="https://png.icons8.com/windows/1600/filled-bookmark-ribbon.png" />
        </Div>
        Follow Project
      </Button>

      <Button share>
        <Image src="https://ai-catcher.com/wp-content/uploads/icon_13-1.png" />
      </Button>

      <Button share>
        <Image src="https://png.icons8.com/metro/1600/twitter.png" />
      </Button>

      <Button share>
        <Image src="https://image.flaticon.com/icons/png/512/34/34400.png" />
      </Button>

      <Button share>
        <Image src="http://cdn.onlinewebfonts.com/svg/img_1668.png" />
      </Button>
    </Div>
    <Paragraph disclaimer>
      <u>
        All or nothing.
      </u>
        This project will only be funded if
        it reaches its goal by Thu, August 23 2018 8:59 PM PDT.
    </Paragraph>
  </Div>
);

const Button = styled.button`
  margin-top: 25px;
  width: 100%;
  height: 10%;
  background: #429b76;
  font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 15px;
  color: white;

  ${props => props.fund && css `
    &:hover {
      background: #2f7162;
    }
  `}

  ${props => props.follow && css `
    color: black;
    width: 50%;
    background: white;
    border: 1px solid lightgray;
    &:hover {
      border: 2px solid black;
    }
  `}

  ${props => props.share && css `
    margin-right: 2px;
    width: 10%;
    height: 9%;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  `}
`;

const Div = styled.div`
  display: inline-block;
  float: right;
  width: 30%;
  ${props => props.bookmark && css `
    float: left;
    text-align: center;
  `}

  ${props => props.inner && css `
    width: 100%;
    padding-bottom: 20px;
  `}
`;

const Image = styled.img`
  float: middle;
  width: 40%;
  height: 50%;
`;

const Paragraph = styled.p`
  padding: 0;
  margin: 0;
  color: gray;
  font-size: 15px;
  font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
  ${props => props.currentlyFunded && css`
    padding-top: 20px;
    padding-bottom: 0;
    font-size: 25px;
    color: #429b76;
  `}
  ${props => props. backers && css`
    padding-top: 20px;
    padding-bottom: 0;
    font-size: 25px;
    color: #2b2727;
  `}
  ${props => props.disclaimer && css`
    font-size: 12px;
    color: #424242;
  `}
`;

const Progress = styled.progress`
  appearance: none;
  width: 100%;
  height: .5%;
  &::-webkit-progress-value {
    background-color: #429b76;
  }
`;

module.exports = Funding;
