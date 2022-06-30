import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Jungle v2.0',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This is the Contribution Guide for Mango Chango&apos;s Jungle v2.0 Website.
      </>
    ),
  },
  {
    title: 'Welcome aboard',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Jungle v2.0 is built using the lastest technology frameworks for builing web applications. 
      </>
    ),
  },
  {
    title: 'NestJS and ReactJS',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      Follow the Docs: Learn the Basics and start Hacking
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
