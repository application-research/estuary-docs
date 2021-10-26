import styles from '@components/Navigation.module.scss';

import * as React from 'react';
import * as SVG from '@components/SVG';

const IntroductionSet = [
  { key: 'introduction', title: 'Introduction', href: '/' },
  { key: 'what-is-estuary', title: 'What is Estuary?', href: '/what-is-estuary' },
  { key: 'faq', title: 'FAQ', href: '/faq' },
  { key: 'get-an-invite', title: 'Get an invite', href: '/get-invite-key' },
  { key: 'get-provider-added', title: 'Storage provider application', href: '/get-provider-added' },
  { key: 'get-provider-added-cn', title: '注册服务商', href: '/get-provider-added-cn' },
];

const TutorialSet = [
  { key: 'tutorial-get-an-api-key', title: 'Get API access', href: '/tutorial-get-an-api-key' },
  {
    key: 'tutorial-uploading-your-first-file',
    title: 'Upload data',
    href: '/tutorial-uploading-your-first-file',
  },
  {
    key: 'tutorial-listing-your-files',
    title: 'List data',
    href: '/tutorial-listing-your-files',
  },
];

const APISet = [
  {
    key: 'api-content-add',
    title: '➟ Add data',
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
    key: 'api-content-add-car',
    title: '➟ Add CAR',
    href: '/api-content-add-car',
    method: 'POST',
  },
  {
    key: 'api-content-by-cid',
    title: '➟ Data by CID',
    href: '/api-content-by-cid',
    method: 'GET',
  },
  {
    key: 'api-content-stats',
    title: '➟ List data',
    href: '/api-content-stats',
    method: 'GET',
  },
  {
    key: 'api-content-deals',
    title: '➟ List deals',
    href: '/api-content-deals',
    method: 'GET',
  },
  {
    key: 'api-content-status-id',
    title: '➟ Get deal status by id',
    href: '/api-content-status-id',
    method: 'GET',
  },
  {
    key: 'api-public-stats',
    title: '➟ Get Estuary node stats',
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
    key: 'api-public-miners-ask',
    title: '➟ Get miner query ask',
    href: '/api-public-miners-ask',
    method: 'GET',
  },
  {
    key: 'api-public-miners-failures',
    title: '➟ Get failure logs by provider',
    href: '/api-public-miners-failures',
    method: 'GET',
  },
  {
    key: 'api-public-miners-deals',
    title: '➟ Get deal logs by provider',
    href: '/api-public-miners-deals',
    method: 'GET',
  },
  {
    key: 'api-public-miners-stats',
    title: '➟ Get provider stats',
    href: '/api-public-miners-stats',
    method: 'GET',
  },
  {
    key: 'api-public-miners',
    title: '➟ List providers',
    href: '/api-public-miners',
    method: 'GET',
  },
];

const PinningStandardSet = [
  {
    key: 'pinning-list',
    title: '➟ List pins',
    href: '/pinning-list',
    method: 'GET',
  },
  {
    key: 'pinning-add',
    title: '➟ Add pin',
    href: '/pinning-add',
    method: 'POST',
  },
  {
    key: 'pinning-get',
    title: '➟ Get pin by ID',
    href: '/pinning-get',
    method: 'GET',
  },
  {
    key: 'pinning-replace',
    title: '➟ Replace pin by ID',
    href: '/pinning-replace',
    method: 'POST',
  },
  {
    key: 'pinning-remove-by-id',
    title: '➟ Remove pin by ID',
    href: '/pinning-remove',
    method: 'DELETE',
  },
];

export default function Navigation(props) {
  return (
    <React.Fragment>
      <div className={styles.sections__index__title}>Learn</div>

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
                style={props.active === x.key ? { color: `var(--color-primary)` } : null}
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
                style={props.active === x.key ? { color: `var(--color-primary)` } : null}
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
      <a className={styles.sections__index__item} href="/terms">
        Terms of Service
      </a>
    </React.Fragment>
  );
}
