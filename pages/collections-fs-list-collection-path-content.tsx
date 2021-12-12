import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const markdown = `# ➟ /collections/fs/list?col=UUID&dir=PATH

Use this endpoint to get contents of a specific collection and specific directory by path

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.estuary.tech/feedback).
`;

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.estuary.tech/collections/fs/list?col=UUID&dir=path',{
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

const curl = `curl -X GET -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" https://api.estuary.tech/collections/fs/list?col=UUID&dir=PATH`;

function APICollectionsFSListCollectionPathContent(props) {
  return (
    <App
      title="Estuary Documentation: API: /collections/fs/list?col=UUID&dir=PATH"
      description="https://api.estuary.tech/collections/fs/list?col=UUID&dir=PATH"
      url="https://docs.estuary.tech/collections-fs-list-collection-path-content"
      active="api-collections-fs-list-collection-path-content"
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

export default APICollectionsFSListCollectionPathContent;
