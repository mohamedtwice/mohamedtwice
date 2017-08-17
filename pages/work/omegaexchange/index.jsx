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
    src: require('./img/exchange1.png'),
    description: 'Pabs Packs Login Page',
  },
  {
    src: require('./img/exchange2.png'),
    description: 'Pabs Packs Dashboard Page',
  },
  {
    src: require('./img/exchange3.png'),
    description: 'Pabs Packs Inventory Page',
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
    
      <Wrapper>
        <Macbook>
          <Carousel images={images} />
        </Macbook>
      </Wrapper>
    </ProjectPage>
  );
};

export default OmegaExchange;
