import styles from '@components/SearchInput.module.scss';

import * as React from 'react';

export default function SearchInput(props) {
  return (
    <input
      className={styles.search}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
