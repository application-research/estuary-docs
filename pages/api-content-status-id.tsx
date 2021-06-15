import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const markdown = `# /content/status/:id

Use this endpoint to get all of the deals being made for a specific Content ID stored on our [Estuary Node](https://estuary.tech). You will also get access to our metadata and additional useful details.

* Content IDs can be obtained by using [https://api.estuary.tech/content/deals](https://docs.estuary.tech/api-content-deals).

## This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.estuary.tech/feedback).
`;

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.estuary.tech/content/status/12', {
      method: "GET",
      headers: {
        Authorization: 'Bearer REPLACE_ME_WITH_API_KEY',
      },
    })
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
  'curl -X GET -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" https://api.estuary.tech/content/status/12';

function APIContentStats(props) {
  return (
    <App
      title="Estuary Documentation: API: /content/status/:id"
      description="https://api.estuary.tech/content/status/:id"
      url="https://docs.estuary.tech/api-content-status-id"
      active="api-content-status-id"
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
