import styles from '@components/Navigation.module.scss';

import * as React from 'react';
import * as SVG from '@components/SVG';

const IntroductionSet = [
  { key: 'introduction', title: 'Introduction', href: '/' },
  { key: 'what-is-estuary', title: 'What is Estuary?', href: '/what-is-estuary' },
  { key: 'get-an-invite', title: 'Get your invite', href: '/get-invite-key' },
];

const TutorialSet = [
  { key: 'tutorial-get-an-api-key', title: 'Get an API key', href: '/tutorial-get-an-api-key' },
  {
    key: 'tutorial-uploading-your-first-file',
    title: 'Uploading your first file',
    href: '/tutorial-uploading-your-first-file',
  },
  {
    key: 'tutorial-listing-your-files',
    title: 'Get a list of your files',
    href: '/tutorial-listing-your-files',
  },
];

const APISet = [
  {
    key: 'api-content-add',
    title: '➟ content/add',
    href: '/api-content-add',
  },
  {
    key: 'api-content-stats',
    title: '➟ content/stats',
    href: '/api-content-stats',
  },
  {
    key: 'api-content-deals',
    title: '➟ content/deals',
    href: '/api-content-deals',
  },
  {
    key: 'api-content-status-id',
    title: '➟ content/status/:id',
    href: '/api-content-status-id',
  },
  {
    key: 'api-public-stats',
    title: '➟ public/stats',
    href: '/api-public-stats',
  },
  {
    key: 'api-public-metrics-deals-on-chain',
    title: '➟ public/metrics/deals-on-chain',
    href: '/api-public-metrics-deals-on-chain',
  },
  {
    key: 'api-public-miners-failures',
    title: '➟ public/miners/failures/:miner',
    href: '/api-public-miners-failures',
  },
  {
    key: 'api-public-miners-deals',
    title: '➟ public/miners/deals/:miner',
    href: '/api-public-miners-deals',
  },
  {
    key: 'api-public-miners-stats',
    title: '➟ public/miners/stats/:miner',
    href: '/api-public-miners-stats',
  },
  {
    key: 'api-public-miners',
    title: '➟ public/miners',
    href: '/api-public-miners',
  },
];

export default function Navigation(props) {
  return (
    <React.Fragment>
      <div className={styles.sections__index__title}>Introduction</div>

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
        Tutorial
      </div>

      {TutorialSet.map((x) => {
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
        API Documentation
      </div>

      {APISet.map((x) => {
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
