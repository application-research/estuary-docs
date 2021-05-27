import styles from "~/components/App.module.scss";

import * as React from "react";

import App from "~/components/App";

const markdown = `# WIP

This page has not been completed yet.
`;
const code = null;
const curl = null;

function APIContentAdd(props) {
  return (
    <App
      title="Estuary Documentation: API: /content/add"
      description="https://api.estuary.tech/content/add"
      url="https://docs.estuary.tech/api-content-add"
      curl={curl}
      markdown={markdown}
      code={code}
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default APIContentAdd;
