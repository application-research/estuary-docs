import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const markdown = `# ➟ /pinning/pins

## Overview
Pinning is a method that allows you to instruct IPFS to store a specific object at a specific location – by default, your local node, though this can be changed if you utilise a third-party remote pinning service. This endpoint lists all of the pinned objects.

## Useful for the following scenarios
- Retrieve a list of pinned objects and show them on a dashboard or a user interface.
- Validate or verify any pinned objects by retrieving the list and evaluating each.

### Swagger
For more information about this API swagger specification, see [here](https://app.swaggerhub.com/apis/alvin-reyes/estuary-api/1.0.0#/pinning/get_pinning_pins)

### This page is a work in progress
We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.estuary.tech/feedback).

### Need more information?
Check out the [offical IPFS Pinning documentation](https://ipfs.github.io/pinning-services-api-spec/#tag/pins/paths/~1pins/get). We made sure the follow the standards.
`;
const key = 'pinning-list';
const route = 'https://api.estuary.tech/pinning/pins';

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('${route}', {
      method: 'GET',
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

const curl = `curl -X GET ${route} -H "Content-Type: application/json" -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY"`;

function PinningGet(props) {
  return (
    <App
      title="Estuary Documentation: Pinning: Get list"
      description="Get list of pinned objects."
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

export default PinningGet;
