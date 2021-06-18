import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';
import markdown from '@documentation/what-is-estuary.md';

const key = 'what-is-estuary';
const code = null;
const curl = null;

function TutorialGetAnAPIKey(props) {
  return (
    <App
      title="Estuary Documentation: What is Estuary?"
      description="What is Estuary? What problems does it solve?"
      url={`https://docs.estuary.tech/${key}`}
      curl={curl}
      markdown={markdown}
      code={code}
      active={key}
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default TutorialGetAnAPIKey;
