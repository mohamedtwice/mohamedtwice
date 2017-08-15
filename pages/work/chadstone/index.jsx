import React from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
import Iphone from 'components/iphone';
import Macbook from 'components/macbook';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import coverImage from 'components/project/img/omegaexchange.jpg';


const images = [
  {
    src: require('./img/pabspacks1.png'),
    description: 'Pabs Packs Login Page',
  },
  {
    src: require('./img/pabspacks2.png'),
    description: 'Pabs Packs Dashboard Page',
  },
  {
    src: require('./img/pabspacks3.png'),
    description: 'Pabs Packs Inventory Page',
  },
  {
    src: require('./img/pabspacks4.png'),
    description: 'Pabs Packs Events Page',
  },
  {
    src: require('./img/pabspacks5.png'),
    description: 'Pabs Packs Admin Page',
  },
];

const mobileImages = [
  {
    src: require('./img/mobile-about.jpg'),
    description: 'OmegaExchange about us mobile',
  },
  {
    src: require('./img/mobile-article.jpg'),
    description: 'OmegaExchange article mobile',
  },
  {
    src: require('./img/mobile-directions.jpg'),
    description: 'OmegaExchange directions mobile',
  },
  {
    src: require('./img/mobile-shopping.jpg'),
    description: 'OmegaExchange shopping mobile',
  },
  {
    src: require('./img/mobile-store.jpg'),
    description: 'OmegaExchange store mobile',
  },
];

const OmegaExchange = () => {
  const project = projects.find(_project => _project.slug === 'omegaexchange');

  const image = (
    <img src={coverImage} alt="Cover" />
  );

  const iphone = (
    <Iphone>
      <Carousel images={mobileImages} />
    </Iphone>
  );

  return (
    <ProjectPage project={project}>
      <ProjectIntro project={project} media={image} />
      <ProjectDescription media={iphone}>
        <h3>Project</h3>
        <p>Soon to be unveiling the mall’s new shopping, dining &amp; entertainment precincts, OmegaExchange was keen to revisit their online presence and website in line with the new development. <OutboundLink to="http://inlight.com.au">Inlight</OutboundLink> was tasked with building a new website that offered information on stores, entertainment, events and an intuitive mapping solution.</p>

        <h3>Role</h3>
        <p>I was part of a development team that helped produce a solution over the space of a few months. I was mainly responsible for building components and UI in the build and handling application state, but also worked on the api. I am most proud of the getting there page, which included a Google Maps integration that helped users get to the shopping mall and provided taxi and Uber estimations.</p>
      </ProjectDescription>
      <Wrapper>
        <Macbook>
          <Carousel images={images} />
        </Macbook>
      </Wrapper>
    </ProjectPage>
  );
};

export default OmegaExchange;
