import React from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
import Iphone from 'components/iphone';
import Macbook from 'components/macbook';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import coverImage from 'components/project/img/omarfateh.png';


const images = [
  {
    src: require('./img/omarfateh1.png'),
    description: 'Omar Fateh for Minnesota House 62A Homepage',
  },
  {
    src: require('./img/omarfateh2.png'),
    description: 'Omar Fateh for Minnesota House 62A About Page',
  },
  {
    src: require('./img/omarfateh3.png'),
    description: 'Omar Fateh for Minnesota House 62A Priorities Page',
  },
  {
    src: require('./img/omarfateh4.png'),
    description: 'Omar Fateh for Minnesota House 62A Volunteer Page',
  },
  {
    src: require('./img/omarfateh5.png'),
    description: 'Omar Fateh for Minnesota House 62A News Page',
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

const OmarFateh = () => {
  const project = projects.find(_project => _project.slug === 'omarfateh');

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

export default OmarFateh;
