import React from 'react';
import styled from 'styled-components';

const Badges = ({ category, location }) => (
  <Div>
    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzWr20jp1OdJ2xAcN8WRc3yA4nnzaVDBZE8uMSpeWzJezZWyBi" />
    <Label>
      Projects We Love
    </Label>
    <Image src="http://cdn.onlinewebfonts.com/svg/img_119257.png" />
    <Label>
      {category}
    </Label>
    <Image src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/location-pin-512.png" />
    <Label>
      {location}
    </Label>
  </Div>
);

const Div = styled.div`
  display: inline-block;
  padding-top: 20px;
  width: 50%;
  align-items: top;
`;

const Image = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding: unset;
  vertical-align: top;
  margin-right: 10px;
`;

const Label = styled.label`
  font: 100% "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  margin-right: 20px;
`;


module.exports = Badges;
