// pages/Home.js
"use client"
import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Link from "next/link";

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Subheading = styled.h2`
  font-size: 1.5rem;
  color: #555;
  margin-top: 1rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  ${media.lessThan('medium')`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const GridItem = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
`;

const NavBar = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const HomePage = () => {
  const olympians = [
    'Zeus', 'Hera', 'Poseidon', 'Demeter',
    'Athena', 'Apollo', 'Artemis', 'Ares',
    'Hephaestus', 'Aphrodite', 'Hermes', 'Dionysus',
  ];

  return (
    <div>
      <NavBar>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/discussion">Discussion</NavLink>
        <NavLink href="/map">Map</NavLink>
        <NavLink href="/myths">Myths</NavLink>
      </NavBar>

      <HomeContainer>
        <Heading>Welcome to the 12 Olympians Website</Heading>
        <Subheading>Discover the myths and legends of the ancient gods and goddesses.</Subheading>

        <GridContainer>
          {olympians.map((olympian, index) => (
            //add link to olympian page
            //add image to olympian page
            <GridItem key={index}>
              <h3><Link  href={`/${olympian.toLowerCase()}`}>
                {olympian}
              </Link>
              </h3>
            </GridItem>

          ))}
        </GridContainer>
      </HomeContainer>
    </div>
  );
};

export default HomePage;
