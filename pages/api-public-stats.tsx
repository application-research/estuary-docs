import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const markdown = `# /public/stats

Use this endpoint to get our [Estuary Node's](https://estuary.tech) contribution to the Filecoin Network.

## This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.estuary.tech/feedback).
`;

const code = `class Example extends React.Component {
  componentDidMount() {
    // NOTE
    // Storage size is in bytes
    fetch('https://api.estuary.tech/public/stats')
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

const curl = 'curl -X GET https://api.estuary.tech/public/stats';

function APIPublicStats(props) {
  return (
    <App
      title="Estuary Documentation: API: /public/stats"
      description="https://api.estuary.tech/public/stats"
      url="https://docs.estuary.tech/api-public-stats"
      active="api-public-stats"
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

export default APIPublicStats;
