import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const markdown = `# ➟ /collections/fs/add?col=UUID&content=LOCAL_ID&path=PATH

Add content to a specific file system path in an IPFS collection

### Swagger
For more information about this API swagger specification, see [here](https://app.swaggerhub.com/apis/alvin-reyes/estuary-api/1.0.0#/collections/post_collections_fs_add)

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.estuary.tech/feedback).
`;

const COLLECTION_ID = `845c2920-0201-416f-86f9-c7da7b859707`;
const content = `1`;
const path = `/path/to/dir`;

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.estuary.tech/collections/fs/add?col=UUID&content=LOCAL_ID&path=PATH',{
        method: "POST",
        headers: {
          Authorization: 'Bearer REPLACE_ME_WITH_API_KEY',
        }
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

const curl = `curl -X POST https://api.estuary.tech/collections/fs/add?col=UUID&content=LOCAL_ID&path=PATH -H "Content-Type: application/json" -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY"`;

function APICollectionAddContentToPath(props) {
  return (
    <App
      title="Estuary Documentation: API: /collections/fs/add?col=UUID&content=LOCAL_ID&path=PATH"
      description="https://api.estuary.tech/collections/fs/add?col=UUID&content=LOCAL_ID&path=PATH"
      url="https://docs.estuary.tech/collections-fs-add-content-to-path"
      active="api-collections-add-content-to-path"
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

export default APICollectionAddContentToPath;
