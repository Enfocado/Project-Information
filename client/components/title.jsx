import React from 'react';
import styled from 'styled-components';

const Title = ({ project, description }) => {
  return (
    <Div>
      <H1>
        {project}
      </H1>
      <H3>
        {description}
      </H3>
    </Div>
  );
};

const Div = styled.div`
  display: inline-block;
  width: 75%;
  height: auto;
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
