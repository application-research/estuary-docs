import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

<<<<<<< HEAD
const markdown = `# ➟ /public/by-cid
=======
const markdown = `# ➟ /public/by-cid/:CID
>>>>>>> 29af209fc647c1df19e71389c0eb4188959191f3

Use this endpoint to check where a CID is on the Filecoin Network. 

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.estuary.tech/feedback).
`;

const code = `class Example extends React.Component {
  componentDidMount() {
    // NOTE
    // Storage size is in bytes
    fetch('https://api.estuary.tech/public/by-cid/<PUT_CID_HERE>')
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

const curl = 'curl -X GET https://api.estuary.tech/public/by-cid/<PUT_CID_HERE>';

function APIPublicStats(props) {
  return (
    <App
      title="Estuary Documentation: API: /public/by-cid"
      description="https://api.estuary.tech/public/by-cid"
      url="https://docs.estuary.tech/api-public-by-cid"
      active="api-public-verify-cid"
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
