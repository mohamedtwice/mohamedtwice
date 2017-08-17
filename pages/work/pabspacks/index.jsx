import React from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
import Iphone from 'components/iphone';
import Macbook from 'components/macbook';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import coverImage from 'components/project/img/pabspacks.jpg';


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
    description: 'PabsPacks about us mobile',
  },
  {
    src: require('./img/mobile-article.jpg'),
    description: 'PabsPacks article mobile',
  },
  {
    src: require('./img/mobile-directions.jpg'),
    description: 'PabsPacks directions mobile',
  },
  {
    src: require('./img/mobile-shopping.jpg'),
    description: 'PabsPacks shopping mobile',
  },
  {
    src: require('./img/mobile-store.jpg'),
    description: 'PabsPacks store mobile',
  },
];

const PabsPacks = () => {
  const project = projects.find(_project => _project.slug === 'pabspacks');

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

export default PabsPacks;
