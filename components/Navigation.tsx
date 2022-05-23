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

const CollectionsSet = [
  {
    key: 'api-collections-create',
    title: 'Create new collection',
    href: '/collections-create',
    method: 'POST',
  },
  {
    key: 'api-collections-add-content',
    title: 'Add content',
    href: '/collections-add-content',
    method: 'POST',
  },
  {
    key: 'api-collections-list',
    title: 'List collections',
    href: '/collections-list',
    method: 'GET',
  },
  {
    key: 'api-collections-content-by-id',
    title: 'List collection content',
    href: '/collections-list-content',
    method: 'GET',
  },
  {
    key: 'api-collections-fs-list-collection-path-content',
    title: 'FS list content of a path',
    href: '/collections-fs-list-collection-path-content',
    method: 'GET',
  },
  {
    key: 'api-collections-add-content-to-path',
    title: 'FS add content to path',
    href: '/collections-fs-add-content-to-path',
    method: 'POST',
  },
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
  {
    key: 'tutorial-working-with-collections',
    title: 'Working with Collections',
    href: '/tutorial-working-with-collections',
  },
  {
    key: 'tutorial-managing-files-with-rclone',
    title: 'Managing Files with Rclone',
    href: '/tutorial-managing-files-with-rclone',
  },
  {
    key: 'tutorial-working-with-swagger',
    title: 'Working with Estuary API Swagger Docs',
    href: '/tutorial-working-with-swagger',
  },

  
];

const SwaggerSet = [
  { key: 'swagger-doc', title: 'Introduction', href: '/swagger-intro' },
  { key: 'swagger-ui-page', title: 'SwaggerUI', href: '/swagger-ui-page' },
  { key: 'swagger-contributing', title: 'Contributing', href: '/swagger-contributing' },
  
];

const APISet = [
  {
    key: 'api-content-add',
    title: 'Add data',
    href: '/api-content-add',
    method: 'POST',
  },
  {
    key: 'api-content-add-ipfs',
    title: 'Add CID',
    href: '/api-content-add-ipfs',
    method: 'POST',
  },
  {
    key: 'api-content-add-car',
    title: 'Add CAR',
    href: '/api-content-add-car',
    method: 'POST',
  },
  {
    key: 'api-make-deal-with-provider',
    title: 'Make deal with specific provider',
    href: '/api-make-deal-with-provider',
    method: 'POST',
  },
  {
    key: 'api-content-by-cid',
    title: 'Data by CID',
    href: '/api-content-by-cid',
    method: 'GET',
  },
  {
    key: 'api-content-stats',
    title: 'List data',
    href: '/api-content-stats',
    method: 'GET',
  },
  {
    key: 'api-content-deals',
    title: 'List deals',
    href: '/api-content-deals',
    method: 'GET',
  },
  {
    key: 'api-content-status-id',
    title: 'Get deal status by id',
    href: '/api-content-status-id',
    method: 'GET',
  },
  {
    key: 'api-public-stats',
    title: 'Get Estuary node stats',
    href: '/api-public-stats',
    method: 'GET',
  },
  {
    key: 'api-public-metrics-deals-on-chain',
    title: 'Get on chain deal data',
    href: '/api-public-metrics-deals-on-chain',
    method: 'GET',
  },
  {
    key: 'api-public-miners-ask',
    title: 'Get miner query ask',
    href: '/api-public-miners-ask',
    method: 'GET',
  },
  {
    key: 'api-public-miners-failures',
    title: 'Get failure logs by provider',
    href: '/api-public-miners-failures',
    method: 'GET',
  },
  {
    key: 'api-public-miners-deals',
    title: 'Get deal logs by provider',
    href: '/api-public-miners-deals',
    method: 'GET',
  },
  {
    key: 'api-public-miners-stats',
    title: 'Get provider stats',
    href: '/api-public-miners-stats',
    method: 'GET',
  },
  {
    key: 'api-public-miners',
    title: 'List providers',
    href: '/api-public-miners',
    method: 'GET',
  },
];

const PinningStandardSet = [
  {
    key: 'pinning-list',
    title: 'List pins',
    href: '/pinning-list',
    method: 'GET',
  },
  {
    key: 'pinning-add',
    title: 'Add pin',
    href: '/pinning-add',
    method: 'POST',
  },
  {
    key: 'pinning-get',
    title: 'Get pin by ID',
    href: '/pinning-get',
    method: 'GET',
  },
  {
    key: 'pinning-replace',
    title: 'Replace pin by ID',
    href: '/pinning-replace',
    method: 'POST',
  },
  {
    key: 'pinning-remove-by-id',
    title: 'Remove pin by ID',
    href: '/pinning-remove',
    method: 'DELETE',
  },
];

const UserSet = [
  {
    key: 'user-key-get',
    title: 'Get user API keys',
    href: '/user-key-get',
    method: 'GET',
  },
  {
    key: 'user-key-add',
    title: 'Add user API key',
    href: '/user-key-add',
    method: 'POST',
  },
  {
    key: 'user-key-revoke',
    title: 'Revoke user API key',
    href: '/user-key-revoke',
    method: 'DELETE',
  },
];

const ReferenceSet = [
  {
    key: 'database-schema',
    title: 'Database Schema',
    href: '/static/estuary-db-schema.png',
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
    Estuary API Swagger Doc
      </div>

      {SwaggerSet.map((x) => {
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
            <span className={styles.text}>{x.title}</span>
          </a>
        );
      })}

      <div style={{ marginTop: 48 }} className={styles.sections__index__title}>
        Collections
      </div>

      {CollectionsSet.map((x) => {
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
            <span className={styles.text}>{x.title}</span>
          </a>
        );
      })}

      <div style={{ marginTop: 48 }} className={styles.sections__index__title}>
        User key API
      </div>

      {UserSet.map((x) => {
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
            <span className={styles.text}>{x.title}</span>
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
            <span className={styles.text}>{x.title}</span>
          </a>
        );
      })}

      <div style={{ marginTop: 48 }} className={styles.sections__index__title}>
        Source Code Reference
      </div>

      {ReferenceSet.map((x) => {
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
      <a className={styles.sections__index__item} href="/terms">
        Terms of Service
      </a>
    </React.Fragment>
  );
}
