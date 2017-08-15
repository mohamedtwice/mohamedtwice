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
    src: require('./img/pabspacks1.png'),
    description: 'CaterAPP Login Page',
  },
  {
    src: require('./img/pabspacks2.png'),
    description: 'CaterAPP Dashboard Page',
  },
  {
    src: require('./img/pabspacks3.png'),
    description: 'CaterAPP Inventory Page',
  },
  {
    src: require('./img/pabspacks4.png'),
    description: 'CaterAPP Events Page',
  },
  {
    src: require('./img/pabspacks5.png'),
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
      <ProjectDescription media={iphone}>
        <h3>Project</h3>
        <p>Life with Bird gave us with the challenge of rebuilding their Shopify theme. Part of it&apos;s remit was to improve the user experience and include a much cleaner UI that matched their brand and achieved   more conversions. The current code and deployment solution also needed revisiting to be scalable and flexible.</p>

        <h3>Role</h3>
        <p>Whilst working at <OutboundLink to="http://inlight.com.au">Inlight</OutboundLink>, myself and 1 other developer worked together closely with the client to provide a solution they sought after. After looking at the current codebase, we realised that we needed to rebuild the existing solution. I was responsible for the majority of the delivery.</p>
      </ProjectDescription>
      <Wrapper>
        <Macbook>
          <Carousel images={images} />
        </Macbook>
      </Wrapper>
    </ProjectPage>
  );
};

export default CaterAPP;
