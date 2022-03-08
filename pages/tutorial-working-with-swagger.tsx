import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';
import markdown from '@documentation/tutorial-working-with-swagger.md';

function TutorialGettingStartedWithSwagger(props) {
  return (
    <App
      title="Estuary Documentation: Tutorial: Getting Started with Estuary API Swagger Docs"
      description="Learn more about navigating the endpoints via Estuary API Swagger Docs."
      url="https://docs.estuary.tech/tutorial-working-with-swagger"
      // curl={curl}
      markdown={markdown}
      // code={code}
      active="tutorial-working-with-swagger"
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default TutorialGettingStartedWithSwagger;
