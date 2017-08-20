import React from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
import Iphone from 'components/iphone';
import Macbook from 'components/macbook';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import avatarImageSrc from 'components/project/img/abdiwarsame.png';
import downloadImageSrc from './img/download-app-store.svg';
import backgroundStyles from './background.module.css';
import styles from './styles.module.css';

const AbdiWarsame = () => {
  const project = projects.find(_project => _project.slug === 'abdiwarsame');

  const images = [
    {
      src: require('./img/abdi1.png'),
      description: 'Abdi Warsame 1',
    },
    {
      src: require('./img/abdi2.png'),
      description: 'Abdi Warsame 2',
    },
    {
      src: require('./img/abdi3.png'),
      description: 'Abdi Warsame 3',
    },
    {
      src: require('./img/abdi4.png'),
      description: 'Abdi Warsame 4',
    },
  ];

  const cta = (
    <OutboundLink to={project.cta.link} className={styles.download}>
      <img src={downloadImageSrc} alt={project.cta.text} />
    </OutboundLink>
  );

  const image = (
    <div className={styles.avatar}>
      <img src={avatarImageSrc} alt="Cover" />
    </div>
  );

  const iphone = (
    <div className={styles.iphone}>
      <Iphone>
        <Carousel images={images} />
      </Iphone>
    </div>
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

export default AbdiWarsame;
