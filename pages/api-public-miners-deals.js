import styles from "~/pages/Page.module.scss";

import * as React from "react";

import App from "~/components/App";

const markdown = `# /public/miners/deals/:miner

Use this endpoint to get all of deal history for a specific miner with our [Estuary Node](https://estuary.tech). This endpoint does not require an API key.

## This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.estuary.tech/feedback).
`;

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.estuary.tech/public/miners/deals/f0135078')
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({ ...data });
      });
  }

  render() {
    return <pre>{JSON.stringify(this.state, null, 1)}</pre>;
  }
}`;

const curl =
  "curl -X GET https://api.estuary.tech/public/miners/deals/f0135078";

function APIPublicMinerDeals(props) {
  return (
    <App
      title="Estuary Documentation: API: /public/miners/deals"
      description="https://api.estuary.tech/public/miners/deals:miner"
      url="https://docs.estuary.tech/api-public-miners-deals"
      active="api-public-miners-deals"
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
