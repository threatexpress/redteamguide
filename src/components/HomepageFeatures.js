import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [

  {
    title: 'Get a paperback copy',
    Png: require('../../static/img/book-cover.png').default,
    Link: "https://www.amazon.com/dp/B083XVG633/ref=sr_1_2?keywords=red+team+development&qid=1579624713&sr=8-2&tag=cybersecur05a-20",
    description: (
      <>
        Purchase a paperback copy from Amazon
      </>
    ),
  },
  {
    title: 'Get a copy on Kindle',
    Png: require('../../static/img/kindle-cover.png').default,
    Link: "https://www.amazon.com/gp/product/B0842BMMCC?pf_rd_p=ab873d20-a0ca-439b-ac45-cd78f07a84d8&pf_rd_r=2P19FT2TFRS8R4D4KP3V&tag=cybersecur05a-20",

    description: (
      <>
        Purchase a kindle copy from Amazon
      </>
    ),
  },
  {
    title: 'Leave a Review',
    Png: require('../../static/img/book-review.png').default,
    Link: "https://www.amazon.com/review/create-review?asin=B083XVG633",

    description: (
      <>
        Already have a copy? Consider leaving a review.
      </>
    ),
  },
];

function Feature({ Png, Link, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={Link} target="_blank">  <img src={Png} alt={title} /> </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
