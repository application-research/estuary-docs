import styles from "~/pages/Page.module.scss";

import * as React from "react";

import App from "~/components/App";

const markdown = `# WIP

This page has not been completed yet.
`;
const code = null;
const curl = null;

function APIContentStats(props) {
  return (
    <App
      title="Estuary Documentation: API: /content/stats"
      description="https://api.estuary.tech/content/stats"
      url="https://docs.estuary.tech/api-content-stats"
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

export default APIContentStats;
