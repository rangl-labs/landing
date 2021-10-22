import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Image from '@theme/IdealImage';

const FeatureList = [
  {
    title: 'Optimal power flow',
    imageURL: "img/wind.jpg",
    description: (
      <>
        Schedule a power system to run super-efficiently.
      </>
    ),
  },
  {
    title: 'Vehicle grid integration',
    imageURL: "img/tesla.jpg",
    description: (
      <>
        Make electric vehicle charging work sustainably in a neighbourhood.
      </>
    ),
  },
  {
    title: 'Net Zero Technology Centre',
    imageURL: "img/wind.jpg",
    description: (
      <>
        Energy deployment for net-zero 2050.
      </>
    ),
  },
];

function Feature({ imageURL, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Image img={imageURL} />
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
