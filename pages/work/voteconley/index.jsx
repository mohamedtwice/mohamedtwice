import React from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
import Iphone from 'components/iphone';
import Macbook from 'components/macbook';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import coverImage from 'components/project/img/voteconley.png';


const images = [
  {
    src: require('./img/voteconley1.png'),
    description: 'Angela Conley for Hennepin County Commissioner Homepage',
  },
  {
    src: require('./img/voteconley2.png'),
    description: 'Angela Conley for Hennepin County Commissioner About Page',
  },
  {
    src: require('./img/voteconley3.png'),
    description: 'Angela Conley for Hennepin County Commissioner Donate Page',
  },
  {
    src: require('./img/voteconley4.png'),
    description: 'Angela Conley for Hennepin County Commissioner Community Voices Page',
  },
  {
    src: require('./img/voteconley5.png'),
    description: 'Angela Conley for Hennepin County Commissioner Volunteer Page',
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

const VoteConley = () => {
  const project = projects.find(_project => _project.slug === 'voteconley');

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

export default VoteConley;
