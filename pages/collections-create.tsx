import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const markdown = `# ➟ /collections/create

Use this endpoint to create a collection where you can add data to it.

### This page is a work in progress

A collection is used to store a file or directory of data in the Filecoin network. This can be used for bulk 'directory' uploads from a typical hierarchical files system.

const name = `"A new collection"`;
const description = `"A new collection test"`;

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.estuary.tech/collections/create',{
        method: "POST",
        headers: {
          Authorization: 'Bearer REPLACE_ME_WITH_API_KEY',
        },
        body: JSON.stringify({
          name: ${name},
          description: ${description}
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

const curl = `curl -X POST https://api.estuary.tech/collections/create -d '{ "name": ${name}, "description": ${description} }' -H "Content-Type: application/json" -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY"`;

function APICollectionCreate(props) {
  return (
    <App
      title="Estuary Documentation: API: /collections/create"
      description="https://api.estuary.tech/collections/create"
      url="https://docs.estuary.tech/collections-create"
      active="api-collections-create"
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

export default APICollectionCreate;
