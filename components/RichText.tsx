import styles from '@components/RichText.module.scss';

import * as React from 'react';

import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';

export default function RichText(props) {
  const md = new Remarkable();
  const markdown = md.render(props.children);

  return <div className={styles.block} dangerouslySetInnerHTML={{ __html: markdown }} />;
}
