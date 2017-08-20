import React from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
import Iphone from 'components/iphone';
import Macbook from 'components/macbook';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import coverImage from 'components/project/img/afrodeli.png';

const images = [
  {
    src: require('./img/afro1.png'),
    description: 'Afro Deli & Grill 1',
  },
  {
    src: require('./img/afro2.png'),
    description: 'Afro Deli & Grill',
  },
  {
    src: require('./img/afro3.png'),
    description: 'Afro Deli & Grill 2',
  },
  {
    src: require('./img/afro4.png'),
    description: 'Afro Deli & Grill 3',
  },
  {
    src: require('./img/afro5.png'),
    description: 'Afro Deli & Grill 4',
  },
];

const mobileImages = [
  {
    src: require('./img/afro1.png'),
    description: 'Afro Deli & Grill 5',
  },
  {
    src: require('./img/afro2.png'),
    description: 'Afro Deli & Grill 6',
  },
  {
    src: require('./img/afro3.png'),
    description: 'Afro Deli & Grill 7',
  },
];

const AfroDeli = () => {
  const project = projects.find(_project => _project.slug === 'afrodeli');

  const image = (
    <img src={coverImage} alt="Cover" />
  );

  const iphone = (
    <Iphone invert>
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

export default AfroDeli;
