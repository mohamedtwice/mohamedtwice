import React from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
import Iphone from 'components/iphone';
import Macbook from 'components/macbook';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import coverImage from 'components/project/img/nekima.png';
import styles from './styles.module.css';

const images = [
  {
    src: require('./img/nekima1.png'),
    description: 'Nekima product',
  },
  {
    src: require('./img/nekima2.png'),
    description: 'Nekima product listing',
  },
  {
    src: require('./img/nekima3.png'),
    description: 'Nekima ambulance services modal',
  },
  {
    src: require('./img/nekima4.png'),
    description: 'Nekima home',
  },
];

const mobileImages = [
  {
    src: require('./img/mobile-compare.png'),
    description: 'Nekima compare mobile',
  },
  {
    src: require('./img/mobile-form.png'),
    description: 'Nekima mobile form mobile',
  },
  {
    src: require('./img/mobile-product-listing.png'),
    description: 'Nekima product listing mobile',
  },
  {
    src: require('./img/mobile-product.png'),
    description: 'Nekima product mobile',
  },
];

const Nekima = () => {
  const project = projects.find(_project => _project.slug === 'nekima');

  const logo = (
    <div className={styles.image}>
      <img src={coverImage} alt="Cover" />
    </div>
  );

  const iphone = (
    <Iphone invert>
      <Carousel images={mobileImages} />
    </Iphone>
  );

  return (
    <ProjectPage project={project}>
      <ProjectIntro project={project} media={logo} />
      
      <Wrapper>
        <Macbook>
          <Carousel images={images} />
        </Macbook>
      </Wrapper>
    </ProjectPage>
  );
};

export default Nekima;
