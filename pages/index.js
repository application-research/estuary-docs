import styles from "~/components/App.module.scss";

import * as React from "react";

import Markdown from "~/documentation/index.md";
import App from "~/components/App";

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

function Home(props) {
  return (
    <App
      title="Estuary Documentation: What is Estuary?"
      description="Estuary is a simple IPFS node that integrates a minimal Filecoin Client Library. Both are open source and available to you."
      url="https://docs.estuary.tech"
      curl={curl}
      markdown={Markdown}
      code={code}
      active="what-is-estuary"
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Home;
