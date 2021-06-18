import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const markdown = `# ➟ /content/app-ipfs

Use this endpoint to take an existing IPFS CID, and make storage deals for it.

* Here is an example of a CID I use [bafybeidj7c2e3daplalccukbps4eze7473gyshspev76xi4sjfmfkuaofe](https://bafybeidj7c2e3daplalccukbps4eze7473gyshspev76xi4sjfmfkuaofe.ipfs.dweb.link/)

## This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.estuary.tech/feedback).
`;

const key = `api-content-add-ipfs`;

const CID = 'bafybeidj7c2e3daplalccukbps4eze7473gyshspev76xi4sjfmfkuaofe';
const name = '1882818-2021-nature-videos.zip';

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.estuary.tech/content/add-ipfs', {
      method: "POST",
      headers: {
        Authorization: 'Bearer REPLACE_ME_WITH_API_KEY',
      },
      body: JSON.stringify({
        name: '${name}',
        root: '${CID}',
      })
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

const curl = `curl -X POST https://api.estuary.tech/content/add-ipfs -d '{ "name": "${name}", "root": "${CID}" }' -H "Content-Type: application/json" -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY"`;

function APIContentAddIPFS(props) {
  return (
    <App
      title="Estuary Documentation: API: /content/add-ipfs"
      description="https://api.estuary.tech/content/add-ipfs"
      url={`https://docs.estuary.tech/${key}`}
      active={key}
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

export default APIContentAddIPFS;
