import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const markdown = `# ➟ /pinning/pins/:id

Replace a pinned object.

### Need more information?

Check out the [offical IPFS Pinning documentation](https://ipfs.github.io/pinning-services-api-spec/#tag/pins/paths/~1pins~1{requestid}/post). We made sure the follow the standards.

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.estuary.tech/feedback).`;

const key = 'pinning-replace';
const route = 'https://api.estuary.tech/pinning/pins/:id';

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('${route}', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer REPLACE_ME_WITH_API_KEY',
      },
      body: JSON.stringify({})
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

const curl = `curl -X POST ${route} -H "Content-Type: application/json" -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY"`;

function PinningReplace(props) {
  return (
    <App
      title="Estuary Documentation: Pinning: Replace"
      description="Replace a pinned object."
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

export default PinningReplace;
