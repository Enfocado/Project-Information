import React from 'react';
import styled, { css } from 'styled-components';

const NavBar = () => (
  <div>
    <Table>
      <tr>
        <TableDimension navItemRight>
          <Button navbar>
            Explore
          </Button>
        </TableDimension>
        <TableDimension navItemRight>
          <Button navbar>
            Start a project
          </Button>
        </TableDimension>
        <TableDimension logo>
          <Image src="https://d3mlfyygrfdi2i.cloudfront.net/kickstarter-logo-color.png" alt="logo" logo />
        </TableDimension>
        <TableDimension navItemLeft>
          <Button navbar>
            Search
          </Button>
        </TableDimension>
        <TableDimension navItemLeft>
          <Button navbar>
            Sign In
          </Button>
        </TableDimension>
      </tr>
    </Table>
    <Horizontal />
  </div>
);

const Table = styled.table`
  width: 100%;
`;

const TableDimension = styled.td`
  ${props => props.navItemRight && css`
    width: 10%;
    text-align: left;
  `}
  ${props => props.navItemLeft && css`
    width: 10%;
    text-align: right;
  `}
  ${props => props.logo && css`
    width: 50%;
    text-align: center;
  `}
`;

const Button = styled.button`
  ${props => props.navbar && css`
    border: none;
    outline: none;
    color: #2b2727;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 1em;
    &:hover {
      color: #429b76;
    }
  `}
`;

const Image = styled.img`
  ${props => props.logo && css`
    width: 20%;
    height: 20%;
  `}
`;

const Horizontal = styled.hr`
  border-color: #429b76;
`;


module.exports = NavBar;
