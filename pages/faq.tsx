import styles from '@pages/Page.module.scss';

import * as React from 'react';

import Markdown from '@documentation/faq.md';
import App from '@components/App';

const code = null;
const curl = null;
const key = `faq`;

function Home(props) {
  return (
    <App
      title="Estuary Documentation: FAQ"
      description="Frequently asked questions and criticism."
      url="https://docs.estuary.tech/faq"
      curl={curl}
      markdown={Markdown}
      code={code}
      active={key}
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Home;
