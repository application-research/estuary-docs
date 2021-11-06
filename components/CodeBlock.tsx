import styles from '@components/CodeBlock.module.scss';

import * as React from 'react';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

export default function CodeBlock(props) {
  return (
    <div className={styles.block}>
      <LiveProvider code={props.code}>
        {props.curl ? (
          <div className={styles.curl}>
            <div className={styles.title}>CURL</div>
            <pre className={styles.curl__line}>{props.curl}</pre>
          </div>
        ) : null}

        {props.code ? (
          <div className={styles.code}>
            <div className={styles.title} style={{ margin: 10 }}>
              JavaScript with React
            </div>
            <LiveEditor
              style={{
                padding: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingTop: 0,
                fontFamily: 'Mono',
              }}
            />
          </div>
        ) : null}
        {props.code ? (
          <div className={styles.error}>
            <div className={styles.title}>Errors</div>
            <LiveError style={{ padding: 0 }} />
          </div>
        ) : null}
        {props.code ? (
          <div className={styles.preview}>
            <div className={styles.title}>Response</div>
            <LivePreview />
          </div>
        ) : null}
      </LiveProvider>
    </div>
  );
}
