import React, { PropTypes } from 'react';

import Icon from 'components/icon';
import OutboundLink from 'components/outbound-link';

import styles from './styles.module.css';

const Contact = ({ title }) => (
  <div className={styles.contact}>
    <h1>{title || 'I like messages'}</h1>
    <p className={styles.email}>If you have an upcoming project that you would like to talk about or are looking to collaborate and build something special, say hello and send an email.</p>
    <p className={styles.email}>
      <b><a href="mailto:hello@mohamedtwice.com?subject=Hello%20Mohamed!" className={styles.link}>hello@mohamedtwice.com</a></b>
    </p>
    <div className={styles.lineBreak} />
    <ul className={styles.social}>
      <li>
        <OutboundLink to="https://github.com/mohamedtwice/">
          <Icon name="github" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.linkedin.com/in/mohamedtwice">
          <Icon name="linkedin" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://twitter.com/mohknowsreal/">
          <Icon name="twitter" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.instagram.com/mohknowsreal">
          <Icon name="instagram" />
        </OutboundLink>
      </li>
    </ul>
  </div>
);

Contact.propTypes = {
  title: PropTypes.string,
};

export default Contact;
