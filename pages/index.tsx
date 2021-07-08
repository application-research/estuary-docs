import styles from '@pages/Page.module.scss';

import * as React from 'react';

import Markdown from '@documentation/index.md';
import App from '@components/App';

const code = `class Example extends React.Component {
  componentDidMount() {
    // NOTE
    // API endpoint to get total storage in bytes
    // total files added to Filecoin
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

const curl = `curl -X GET https://api.estuary.tech/public/stats`;
const key = `introduction`;

function Home(props) {
  return (
    <App
      title="Estuary Documentation"
      description="Store your public data. Estuary is a custom Filecoin/IPFS node that makes storing meaningful publicly licensed data on the Filecoin Network easier."
      url="https://docs.estuary.tech"
      curl={curl}
      markdown={Markdown}
      code={code}
      active={key}
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Home;
