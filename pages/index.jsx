import React from 'react';
import { prefixLink } from 'gatsby-helpers';

import Fullscreen from 'components/fullscreen';
import Meta from 'components/meta';
import Wrapper from 'components/wrapper';
import { Link } from 'react-router';

import styles from './styles.module.css';

const Index = () => (
  <div>
    <Meta />
    <Fullscreen className={styles.intro} firstItem>
      <Wrapper>
        <h1>
          <span class="styles.introhello">Hello. I’m Mohamed and I’m a full stack developer currently working for the <a className={styles.link} href="http://www.cehd.umn.edu">University of Minnesota</a>.</span>
          <br /><br />
          <b>Check out my <Link className={styles.link} to={prefixLink('/work/')}>work</Link>.</b>
        </h1>
      </Wrapper>
    </Fullscreen>
  </div>
);

export default Index;
