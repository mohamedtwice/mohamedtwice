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
            <p>Bootstrap, CSS, HTML, SASS</p>
            <h4>Javascript</h4>
            <p>Angular,jQuery, React, Webpack</p>
            <h4>Server</h4>
            <p>Express, Mongo, Node, SQL</p>
            <h4>Other</h4>
            <p>Photoshop, Wordpress NationBuilder</p>
          </div>

        </aside>
      </div>

      <section>
        <h2>What people say</h2>
        <div className={styles.referrals}>
          <div className={styles.referral}>
            <div>
              <h4>Patrick Carne, Lighthouse</h4>
              <p>“Over the last 3 years Oliver has grown into a solid front-end developer, with an ability and eagerness to pick up new technologies quickly. I have no doubt Oliver will go on to be an exceptional developer in any area he chooses to focus.”</p>
            </div>
          </div>

          <div className={styles.referral}>
            <div>
              <h4>Sina Karimi, Inlight</h4>
              <p>“Oliver is an exceptional front end developer. He has grown rapidly over the past few years to be a valuable member of any development team. It has been a real pleasure to work with him over the years.”</p>
            </div>
          </div>

          <div className={styles.referral}>
            <div>
              <h4>James Hanley, Ahm</h4>
              <p>“I worked with Oliver on a number of projects for the Ahm websites. When a new brief would come in he was consultative and logical in his approach to help us define a solution to our business problem. His collaborative approach and comfort with clients/business makes him a great addition to a digital development team.”</p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  </ContentPage>
);

export default About;
