import React from 'react';
import styled from 'styled-components';

const Title = () => (
  <Div>
    <H1>
      The Looking Glass: A Holographic Display for 3D Creators
    </H1>
    <H3>
      The Looking Glass is the first desktop holographic display designed for 3D creators.
       No VR or AR headgear required.
    </H3>
  </Div>
);

const Div = styled.div`
  display: inline-block;
  width: 75%;
  height: 50%;
  float: left;
  padding-left: 100px;
  align-items: top;
`;

const H1 = styled.h1`
  font-size: 38px;
`;

const H3 = styled.h3`
  color: gray;
`;

module.exports = Title;
