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
    src: require('./img/product.jpg'),
    description: 'Nekima product',
  },
  {
    src: require('./img/products.jpg'),
    description: 'Nekima product listing',
  },
  {
    src: require('./img/modal.jpg'),
    description: 'Nekima ambulance services modal',
  },
  {
    src: require('./img/home.jpg'),
    description: 'Nekima home',
  },
  {
    src: require('./img/manage.jpg'),
    description: 'Nekima manage health over',
  },
  {
    src: require('./img/extras.jpg'),
    description: 'Nekima add extras',
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

export default Nekima;