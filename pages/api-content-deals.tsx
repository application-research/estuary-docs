import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const markdown = `# ➟ /content/deals

Use this endpoint to get all of the content on Estuary that is also stored on Filecoin through our [Estuary Node](https://estuary.tech).

* Want to get the Filecoin Storage Deals per Content ID? Use [https://api.estuary.tech/content/status/:id](https://docs.estuary.tech/api-content-status-id).

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/content/get_content_deals)

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.estuary.tech/feedback).
`;

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.estuary.tech/content/deals', {
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
  'curl -X GET -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" https://api.estuary.tech/content/deals';

function APIContentDeals(props) {
  return (
    <App
      title="Estuary Documentation: API: /content/deals"
      description="https://api.estuary.tech/content/deals"
      url="https://docs.estuary.tech/api-content-deals"
      active="api-content-deals"
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

export default APIContentDeals;
