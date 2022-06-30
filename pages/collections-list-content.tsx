import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const COLLECTION_ID = `845c2920-0201-416f-86f9-c7da7b859707`;

const markdown = `# ➟ /collections/content?coluuid=:collection-id

Use this endpoint to get **all** the contents of a specific collection, regardless of they having a defined path inside the collection or not

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/collections/get_collections_content__coluuid_)

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.estuary.tech/feedback).
`;

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.estuary.tech/collections/content?coluuid=${COLLECTION_ID}',{
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

const curl = `curl -X GET -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" https://api.estuary.tech/collections/content/${COLLECTION_ID}`;

function APICollectionsListContent(props) {
  return (
    <App
      title="Estuary Documentation: API: /collections/content?coluuid=:collection-id"
      description="https://api.estuary.tech/collections/content?coluuid=:collection-id"
      url="https://docs.estuary.tech/api-collections-list-content"
      active="api-collections-content-by-id"
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

export default APICollectionsListContent;
