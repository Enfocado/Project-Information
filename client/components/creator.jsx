import React from 'react';
import styled, { css } from 'styled-components';

const Creator = () => (
  <Div>
    <Div logo>
      <Image src="https://i.pinimg.com/originals/73/fb/7f/73fb7fb7b9cd1833e16bb4fcef17a962.png" alt="company logo" />
    </Div>
    <Div>
      <Label>
        By Looking Glass
      </Label>
      <br/>
      <Label subtext>
        3 created
      </Label>
    </Div>
  </Div>
);

const Div = styled.div`
  display: inline-block;
  background-color: transparent;
  ${props => props.logo && css`
    background-color: transparent;
    width: 75px;
    height: 75px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 50%;
  `}
`;

const Label = styled.label`
  color:  #2b2727;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  ${props => props.subtext && css`
    color: gray;
    &:hover{
      color: #2b2727;
    }
  `} 
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  height: 75%;
`;

module.exports = Creator;
