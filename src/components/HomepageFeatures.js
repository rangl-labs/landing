import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Image from '@theme/IdealImage';

const FeatureList = [
  {
    title: 'Generation Scheduling',
    imageURL: "img/wind.jpg",
    link: "http://challenges.rangl.org/web/challenges/challenge-page/1/overview",
    description: (
      <>
        Schedule a power system to run super-efficiently.
      </>
    ),
  },
  {
    title: 'Vehicle grid integration',
    imageURL: "img/tesla.jpg",
    link: "vgi",
    description: (
      <>
        Make electric vehicle charging work sustainably in a neighbourhood.
      </>
    ),
  },
  {
    title: 'Net Zero Technology Centre',
    imageURL: "img/nztc.jpg",
    link: "http://challenges.rangl.org/web/challenges/challenge-page/8/overview",
    description: (
      <>
        Energy deployment for net-zero 2050.
      </>
    ),
  },
];

function Feature({ imageURL, title, link, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link} target="_blank">
          <Image img={imageURL} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <a href={link} target="_blank"><h3>{title}</h3></a>
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
