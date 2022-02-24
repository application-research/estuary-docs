import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';
import markdown from '@documentation/tutorial-working-with-collections.md';

function TutorialWorkingWithCollections(props) {
  return (
    <App
      title="Estuary Documentation: Tutorial: Working with Collections"
      description="Learn more about how collections work and how to interact with them"
      url="https://docs.estuary.tech/tutorial-working-with-collections"
      // curl={curl}
      markdown={markdown}
      // code={code}
      active="tutorial-working-with-collections"
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default TutorialWorkingWithCollections;
