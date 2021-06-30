import styles from '@components/Navigation.module.scss';

import * as React from 'react';
import * as SVG from '@components/SVG';

const IntroductionSet = [
    { 
        key: 'sign-up', 
        title: 'Sign up', 
        href: '/sign-up' 
    },
    { 
        key: 'tutorial-get-an-api-key', 
        title: 'Get an API key', 
        href: '/tutorial-get-an-api-key' 
    },
    {
        key: 'tutorial-uploading-your-first-file',
        title: 'Upload a file',
        href: '/tutorial-uploading-your-first-file',
    },
    {
        key: 'tutorial-listing-your-files',
        title: 'List your files',
        href: '/tutorial-listing-your-files',
    },
];

const AboutSet = [
    { 
        key: 'what-is-estuary', 
        title: 'What is Estuary?', 
        href: '/what-is-estuary' 
    },
    { 
        key: 'what-is-estuary', 
        title: 'API limits', 
        href: '/what-is-estuary' 
    },
]

const TutorialSet = [
];

const APISet = [
  {
    key: 'api-content-add',
    title: '➟ Add file',
    href: '/api-content-add',
    method: 'POST',
  },
  {
    key: 'api-content-add-ipfs',
    title: '➟ Add CID',
    href: '/api-content-add-ipfs',
    method: 'POST',
  },
  {
    key: 'api-content-stats',
    title: '➟ Get stats',
    href: '/api-content-stats',
    method: 'GET',
  },
  {
    key: 'api-content-deals',
    title: '➟ Get all deals',
    href: '/api-content-deals',
    method: 'GET',
  },
  {
    key: 'api-content-status-id',
    title: '➟ Deal status by ID',
    href: '/api-content-status-id',
    method: 'GET',
  },
  {
    key: 'api-public-stats',
    title: '➟ Get Estuary node metrics',
    href: '/api-public-stats',
    method: 'GET',
  },
  {
    key: 'api-public-metrics-deals-on-chain',
    title: '➟ Get on chain deal data',
    href: '/api-public-metrics-deals-on-chain',
    method: 'GET',
  },
  {
    key: 'api-public-miners-failures',
    title: '➟ Get failure logs by miner',
    href: '/api-public-miners-failures',
    method: 'GET',
  },
  {
    key: 'api-public-miners-deals',
    title: '➟ Get deal logs by miner',
    href: '/api-public-miners-deals',
    method: 'GET',
  },
  {
    key: 'api-public-miners-stats',
    title: '➟ Get miner metrics',
    href: '/api-public-miners-stats',
    method: 'GET',
  },
  {
    key: 'api-public-miners',
    title: '➟ Get all miners',
    href: '/api-public-miners',
    method: 'GET',
  },
];

const PinningStandardSet = [
  {
    key: 'pinning-list',
    title: '➟ List',
    href: '/pinning-list',
    method: 'GET',
  },
  {
    key: 'pinning-add',
    title: '➟ Add',
    href: '/pinning-add',
    method: 'POST',
  },
  {
    key: 'pinning-get',
    title: '➟ Get by ID',
    href: '/pinning-get',
    method: 'GET',
  },
  {
    key: 'pinning-replace',
    title: '➟ Replace by ID',
    href: '/pinning-replace',
    method: 'POST',
  },
  {
    key: 'pinning-remove-by-id',
    title: '➟ Remove by ID',
    href: '/pinning-remove',
    method: 'DELETE',
  },
];

export default function Navigation(props) {
  return (
    <React.Fragment>
      <div className={styles.sections__index__title}>Get started</div>

      {IntroductionSet.map((x) => {
        return (
          <a
            key={x.key}
            style={props.active === x.key ? { color: `var(--color-primary)` } : null}
            className={styles.sections__index__item}
            href={x.href}
          >
            {x.title}
          </a>
        );
      })}

      <div style={{ marginTop: 48 }} className={styles.sections__index__title}>
        About 
      </div>

      {AboutSet.map((x) => {
        return (
          <a
            key={x.key}
            style={props.active === x.key ? { color: `var(--color-primary)` } : null}
            className={styles.sections__index__item}
            href={x.href}
          >
            {x.title}
          </a>
        );
      })}

      <div style={{ marginTop: 48 }} className={styles.sections__index__title}>
        Standard IPFS Pinning API
      </div>

      {PinningStandardSet.map((x) => {
        return (
          <a
            key={x.key}
            style={props.active === x.key ? { color: `var(--color-primary)` } : null}
            className={styles.sections__index__item}
            href={x.href}
          >
            {x.method ? (
              <span
                className={styles.method}
                style={props.active === x.key ? { background: `var(--color-primary)` } : null}
              >
                {x.method}
              </span>
            ) : null}
            &nbsp;{x.title}
          </a>
        );
      })}

      <div style={{ marginTop: 48 }} className={styles.sections__index__title}>
        Estuary Base API
      </div>

      {APISet.map((x) => {
        return (
          <a
            key={x.key}
            style={props.active === x.key ? { color: `var(--color-primary)` } : null}
            className={styles.sections__index__item}
            href={x.href}
          >
            {x.method ? (
              <span
                className={styles.method}
                style={props.active === x.key ? { background: `var(--color-primary)` } : null}
              >
                {x.method}
              </span>
            ) : null}
            &nbsp;{x.title}
          </a>
        );
      })}

      <div style={{ marginTop: 48 }} className={styles.sections__index__title}>
        Community
      </div>

      <a
        target="_blank"
        className={styles.sections__index__item}
        href="https://github.com/application-research"
      >
        <SVG.GitHub size="14px" style={{ marginTop: 2, marginRight: 8 }} /> GitHub
      </a>
      <a
        style={props.active === 'feedback' ? { color: `var(--color-primary)` } : null}
        className={styles.sections__index__item}
        href="/feedback"
      >
        Give feedback
      </a>
      <a target="_blank" className={styles.sections__index__item} href="https://filecoin.io/slack">
        Join Slack (#arg)
      </a>
    </React.Fragment>
  );
}
