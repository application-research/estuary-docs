import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const markdown = `# ➟ /content/add-car

WIP
`;

const key = `api-content-add-ipfs`;
const curl = null;

const code = `class Example extends React.Component {
  componentDidMount() {
    // TODO
  }

  render() {
    return <pre>TODO</pre>;
  }
}`;

function APIContentAddCAR(props) {
  return (
    <App
      title="Estuary Documentation: API: /content/add-car"
      description="https://api.estuary.tech/content/add-car"
      url={`https://docs.estuary.tech/${key}`}
      active={key}
      curl={curl}
      markdown={markdown}
      code={code}
    />
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default APIContentAddCAR;
