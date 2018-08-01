import React from 'react';
import styled from 'styled-components';

const VideoPlayer = () => (
  <div>
    <IFrame src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1&rel=0" />
  </div>
);

const IFrame = styled.iframe`
  width: 65%;
  height: 50%;
  border: none;
`;

module.exports = VideoPlayer;
