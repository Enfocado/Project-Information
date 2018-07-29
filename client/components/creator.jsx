import React from 'react';
import styled, { css } from 'styled-components';

const Creator = (props) => {
  const { logo, company, companyID } = props;
  return (
    <Div>
      <Div logo>
        <Image src={logo} alt="company logo" />
      </Div>
      <br />
      <Div>
        <Label id={companyID}>
          {company}
        </Label>
        <br />
        <Label subtext>
          3 created
        </Label>
      </Div>
    </Div>
  );
};

const Div = styled.div`
  display: inline-block;
  ${props => props.logo && css`
    width: 75px;
    height: 75px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 50%;
  `}
  float: left;
`;

const Label = styled.label`
  color:  #2b2727;
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
