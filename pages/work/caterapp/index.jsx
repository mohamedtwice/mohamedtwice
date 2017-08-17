import React from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
import Iphone from 'components/iphone';
import Macbook from 'components/macbook';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import coverImage from 'components/project/img/caterapp.jpg';


const images = [
  {
    src: require('./img/caterapp1.png'),
    description: 'CaterAPP Login Page',
  },
  {
    src: require('./img/caterapp2.png'),
    description: 'CaterAPP Dashboard Page',
  },
  {
    src: require('./img/caterapp3.png'),
    description: 'CaterAPP Inventory Page',
  },
  {
    src: require('./img/caterapp4.png'),
    description: 'CaterAPP Events Page',
  },
  {
    src: require('./img/caterapp5.png'),
    description: 'CaterAPP Admin Page',
  },
];

const mobileImages = [
  {
    src: require('./img/mobile-about.jpg'),
    description: 'CaterAPP about us mobile',
  },
  {
    src: require('./img/mobile-article.jpg'),
    description: 'CaterAPP article mobile',
  },
  {
    src: require('./img/mobile-directions.jpg'),
    description: 'CaterAPP directions mobile',
  },
  {
    src: require('./img/mobile-shopping.jpg'),
    description: 'CaterAPP shopping mobile',
  },
  {
    src: require('./img/mobile-store.jpg'),
    description: 'CaterAPP store mobile',
  },
];

const CaterAPP = () => {
  const project = projects.find(_project => _project.slug === 'caterapp');

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

export default CaterAPP;
