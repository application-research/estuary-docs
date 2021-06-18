import styles from '@components/App.module.scss';
import pkg from '@root/package.json';

import * as React from 'react';
import * as SVG from '@components/SVG';

import Head from 'next/head';
import SearchInput from '@components/SearchInput';
import RichText from '@components/RichText';
import CodeBlock from '@components/CodeBlock';
import Navigation from '@components/Navigation';

export default function App(props) {
  return (
    <React.Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name="title" content={props.title} />
        <meta name="description" content={props.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content="/static/social.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={props.url} />
        <meta property="twitter:title" content={props.title} />
        <meta property="twitter:description" content={props.description} />
        <meta property="twitter:image" content="/static/social.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />

        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.container__left}>
          <a href="/" className={styles.logo}>
            Estuary Documentation
          </a>
        </div>
        <div className={styles.container__right}>
          {props.hideNavigation ? null : (
            <a href="/navigation" className={styles.link}>
              Menu
            </a>
          )}
        </div>
      </div>
      <div className={styles.sections}>
        {props.hideNavigation ? null : (
          <div className={styles.sections__index}>
            <Navigation active={props.active} />
          </div>
        )}
        <div className={styles.sections__body}>
          {props.markdown ? <RichText>{props.markdown}</RichText> : props.children}
        </div>
        {props.code ? (
          <div className={styles.sections__code}>
            <CodeBlock curl={props.curl} code={props.code} />
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
}
