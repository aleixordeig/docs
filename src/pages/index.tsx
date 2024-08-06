import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

/**
 * HomepageHeader component
 * 
 * Renders the homepage header with site title, tagline, a "Get started" button, 
 * a link to the footer, and a link to the features page.
 */
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/overview/introduction">
            Get started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="#footer"
            style={{ marginLeft: '10px' }}>
            Go to Footer
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/learn/features"
            style={{ marginLeft: '10px' }}>
            Upcoming Features
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn everything about Qubic you need to know.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
