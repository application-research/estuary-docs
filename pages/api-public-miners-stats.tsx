import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const markdown = `# ➟ /public/miners/stats/:miner

Use this endpoint to get all statistics we have for a given miner. This endpoint does not require an API key.

## This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.estuary.tech/feedback).
`;

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.estuary.tech/public/miners/stats/f0135078')
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

const curl = 'curl -X GET https://api.estuary.tech/public/miners/stats/f0135078';

function APIPublicMinerStats(props) {
  return (
    <App
      title="Estuary Documentation: API: /public/miners/stats"
      description="https://api.estuary.tech/public/miners/stats:miner"
      url="https://docs.estuary.tech/api-public-miners-stats"
      active="api-public-miners-stats"
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

export default APIPublicMinerStats;
