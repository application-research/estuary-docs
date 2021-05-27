import styles from "~/pages/Page.module.scss";

import * as React from "react";

import App from "~/components/App";

const markdown = `# WIP

This page has not been completed yet.
`;
const code = null;
const curl = null;

function APIPublicMinerDeals(props) {
  return (
    <App
      title="Estuary Documentation: API: /public/miners/deals"
      description="https://api.estuary.tech/public/miners/deals:miner"
      url="https://docs.estuary.tech/api-public-miners-deals"
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

export default APIPublicMinerDeals;
