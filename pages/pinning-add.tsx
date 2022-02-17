import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const markdown = `# ➟ /pinning/pins

## Overview
Add a new pin object for the current access token.

* Here is an example of a CID [bafybeidj7c2e3daplalccukbps4eze7473gyshspev76xi4sjfmfkuaofe](https://bafybeidj7c2e3daplalccukbps4eze7473gyshspev76xi4sjfmfkuaofe.ipfs.dweb.link/)

### Need more information?

Check out the [offical IPFS Pinning documentation](https://ipfs.github.io/pinning-services-api-spec/#tag/pins/paths/~1pins/post). We made sure the follow the standards.

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.estuary.tech/feedback).
`;
const cid = 'bafybeidj7c2e3daplalccukbps4eze7473gyshspev76xi4sjfmfkuaofe';
const name = '1882818-2021-nature-videos.zip';
const key = 'pinning-add';
const route = 'https://api.estuary.tech/pinning/pins';

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('${route}', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer REPLACE_ME_WITH_API_KEY',
      },
      body: JSON.stringify({
        name: '${name}',
        cid: '${cid}',
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

const curl = `curl -X POST ${route} -d '{ "name": "${name}", "cid": "${cid}" }' -H "Content-Type: application/json" -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY"`;

function PinningAdd(props) {
  return (
    <App
      title="Estuary Documentation: Pinning: Add"
      description="Add a new pin object for the current access token."
      url={`https://docs.estuary.tech/${key}`}
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

export default PinningAdd;
