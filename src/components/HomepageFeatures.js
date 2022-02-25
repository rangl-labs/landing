import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Image from "@theme/IdealImage";

const featureList = [
  {
    title: "Generation Scheduling",
    imageURL: "img/wind.jpg",
    link: null,
    current: false,
    description: <>Schedule a power system to run super-efficiently.</>,
  },
  {
    title: "Pathways to Net Zero",
    imageURL: "img/nztc.jpg",
    link: "https://github.com/rangl-labs/netzerotc",
    current: false,
    description: <>Find the optimal pathway to a carbon neutral 2050.</>,
  },
  {
    title: "Vehicle grid integration",
    imageURL: "img/tesla.jpg",
    link: "docs/challenges/vgi",
    current: false,
    description: (
      <>Make electric vehicle charging work sustainably in a neighbourhood.</>
    ),
  },
];

function Feature({ imageURL, title, link, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div>
        <a href={link} target="_blank">
          <Image img={imageURL} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        {link ? <a href={link} target="_blank">
          <h3>{title}</h3>
        </a> : <h3>{title}</h3>}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div>
            <h2> Current Challenges </h2>
          </div>
          <div className="row">
            {featureList.map((feature, idx) => {
              return feature.current ? (
                <Feature key={idx} {...feature} />
              ) : null;
            })}
          </div>
        </div>
      </section>
      <section className={styles.features}>
        <div className="container">
          <div>
            <h2> Past Challenges </h2>
          </div>
          <div className="row">
            {featureList.map((feature, idx) => {
              return !feature.current ? (
                <Feature key={idx} {...feature} />
              ) : null;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
