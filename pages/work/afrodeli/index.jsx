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
    src: require('./img/bsmg-afrodeli.png'),
    description: 'Life with Bird collection listing',
  },
];

const mobileImages = [
  {
    src: require('./img/mobile-product-listing.jpg'),
    description: 'Life with Bird product listing mobile',
  },
  {
    src: require('./img/mobile-product.jpg'),
    description: 'Life with Bird product mobile',
  },
  {
    src: require('./img/mobile-cart.jpg'),
    description: 'Life with Bird cart mobile',
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
