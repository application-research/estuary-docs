import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';
import markdown from '@documentation/tutorial-get-an-api-key.md';

const code = `class Example extends React.Component {
  componentDidMount() {
    // NOTE
    // The viewer is a useful endpoint to introduce you
    // to our API. Once you can access Estuary through our API
    // you do not even need to visit https://estuary.tech
    fetch('https://api.estuary.tech/viewer', {
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
  'curl -X GET -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" https://api.estuary.tech/viewer';

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
