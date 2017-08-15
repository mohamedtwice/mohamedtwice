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
      src: require('./img/home.png'),
      description: 'Mr. Red app home',
    },
    {
      src: require('./img/in-game.png'),
      description: 'Mr. Red app in game',
    },
    {
      src: require('./img/end-screen.png'),
      description: 'Mr. Red app end screen',
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
    <ProjectDescription media={iphone}>
      <h3>Project</h3>
      <p>Nekima has been a client of <OutboundLink to="http://inlight.com.au">Inlight</OutboundLink> for quite some time. With numerous years of design and development, it was time to analyse the current solution to see what problems existed and how we could go about solving them for both business and customers. We worked closely with the Medibank team to re-build the current stack using the latest web technologies.</p>

      <h3>Role</h3>
      <p>With a team of 5 developers, we created a web app with client and server-side rendering using React. I was mainly responsible for building the current pages using reusable components and handling application state. Notable work includes building the product and product listing pages.</p>
    </ProjectDescription>
    <Wrapper>
      <Macbook>
        <Carousel images={images} />
      </Macbook>
    </Wrapper>
  </ProjectPage>
  );
};

export default AbdiWarsame;
