import React from 'react';
import { prefixLink } from 'gatsby-helpers';

import ContentPage from 'components/content-page';
import Meta from 'components/meta';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';
import { Link } from 'react-router';

import styles from './styles.module.css';

const About = () => (
  <ContentPage>
    <Meta title="About" />
    <Wrapper>
      <div className={styles.intro}>
        <h1>Hello.</h1>
        <p>I am software developer and proud public servant with a passion for people and technology.</p>

<p>My interdisciplinary background includes experience serving as a soldier in the US Army; in various private sector positions; as an organizer for both community and political organizations; as a self-taught digital media artist; and as a leader in a government agency and non-profit organization, and has given me a unique perspective and skillset.</p>


        <h2>Technical skills</h2>

        <h4>Presentation</h4>
        <p>Bootstrap, CSS, HTML, SASS</p>
        <h4>Javascript</h4>
        <p>Angular,jQuery, React, Webpack</p>
        <h4>Server</h4>
        <p>Express, Mongo, Node, SQL</p>
        <h4>Other</h4>
        <p>Photoshop, Wordpress NationBuilder</p>

              </div>
    </Wrapper>
  </ContentPage>
);

export default About;
