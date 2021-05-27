import styles from "~/components/App.module.scss";

import * as React from "react";

import App from "~/components/App";

const markdown = `# WIP

This page has not been completed yet.
`;
const code = null;
const curl = null;

function TutorialGetAnAPIKey(props) {
  return (
    <App
      title="Estuary Documentation: Tutorial: Get an API Key"
      description="Tutorial Part 1: Getting your API Key to use https://estuary.tech"
      url="https://docs.estuary.tech/tutorial-get-an-api-key"
      curl={curl}
      markdown={markdown}
      code={code}
      active="tutorial-get-an-api-key"
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default TutorialGetAnAPIKey;
