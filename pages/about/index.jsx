import React from 'react';
import { prefixLink } from 'gatsby-helpers';

import ContentPage from 'components/content-page';
import Meta from 'components/meta';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';
import { Link } from 'react-router';

import styles from './styles.module.css';
import afroSrc from './img/afrodeli.png';

const About = () => (
  <ContentPage>
    <Meta title="About" />
    <Wrapper>
      <div className={styles.about}>
        <section className={styles.intro}>
          <h1>Hello world.</h1>
          <p>I am software developer and proud public servant with a passion for people and technology.</p>
          <p>My interdisciplinary background includes experience serving as a soldier in the US Army; in various private sector positions; as an organizer for both community and political organizations; as a self-taught digital media artist; and as a leader in a government agency and non-profit organization, and has given me a unique perspective and skillset.</p>


          <p>I currently work on a freelance basis working on both ideas of my own and others. If you have a project in mind, <Link to="/contact">get in touch</Link>.</p>
        </section>
        <aside className={styles.skills}>
          <div>
            <h3>Skills</h3>
            <h4>Presentation</h4>
            <p>Bootstrap, CSS, CSS3, HTML, Sass/Less, CSS3</p>
            <h4>Javascript</h4>
            <p>AngularJS, jQuery, React, Webpack</p>
            <h4>Server</h4>
            <p>Express, MongoDB, Node, PostgreSQL, SQL</p>
            <h4>Other</h4>
            <p>Photoshop, Wordpress NationBuilder</p>
          </div>

        </aside>
      </div>

      <section>
        <h2>What people say</h2>
        <div className={styles.referrals}>
          <div className={styles.referral}>
          <img src={afroSrc} alt="Afro Deli & Grill" />
            <div>
              <h4>Kahin Abdirahman, Owner of Afro Deli</h4>
              <p>“Over the last 7 years, Mohamed has grown into an integral part of my team and Afro Deli's success. He has consistently delivered, always there when needed, and has been assertive in implementing ideas. I would strongly recommend anyone to work with Mohamed.”</p>
            </div>
          </div>

        </div>
      </section>
    </Wrapper>
  </ContentPage>
);

export default About;
