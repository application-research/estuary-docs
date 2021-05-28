import styles from "~/pages/Page.module.scss";

import * as React from "react";

import App from "~/components/App";

const markdown = `# /public/miners/failures/:miner

Use this endpoint to get all of the failure logs for a specific miner. This endpoint does not require an API key.

## This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.estuary.tech/feedback).
`;

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.estuary.tech/public/miners/failures/f02387')
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
  "curl -X GET https://api.estuary.tech/public/miners/failures/f02387";

function APIPublicMinerFailures(props) {
  return (
    <App
      title="Estuary Documentation: API: /public/miners/failures"
      description="https://api.estuary.tech/public/miners/failures:miner"
      url="https://docs.estuary.tech/api-public-miners-failures"
      active="api-public-miners-failures"
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

export default APIPublicMinerFailures;
