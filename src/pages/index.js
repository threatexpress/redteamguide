import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

import ReactPlayer from 'react-player'


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // <header className={clsx('hero', styles.heroBanner)}>
    <header className={clsx('h2')}>

      <div className="container">
       {/* <h1 className="">{siteConfig.title}</h1>
        <h2 className="">{siteConfig.tagline}</h2> */}
        <h3>A practical guide to Red Team Operations, written by: Joe Vest and James Tubberville</h3>
        

            
      </div>
      <hr />

    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

      <img src={"img/background.png"} />

      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <hr />
        <div className="container">
        <h3>Amazon Book Reviews and In-depth Review by Open Security</h3>

          <div className="row">
            <a href="https://www.amazon.com/Red-Team-Development-Operations-practical/dp/B083XVG633/ref=sr_1_1?crid=1USP7TO03RQOG&dchild=1&keywords=red+team+development+and+operations&qid=1634472764&sprefix=red+team+dev%2Caps%2C170&sr=8-1#customerReviews"><img src="img/reviews.png"></img></a>
            <ReactPlayer url='https://www.youtube.com/watch?v=SQYBwVY8g9I'/>

          </div>
        </div>


      </main>
    </Layout>
  );
}
