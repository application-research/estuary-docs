import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const markdown = `# 404

Looks like you're looking for a page that doesn't exist.`;
const code = null;
const curl = null;

function ErrorPage(props) {
  return (
    <App
      title="Estuary Documentation: 404"
      description="404"
      url="https://docs.estuary.tech/404"
      curl={curl}
      markdown={markdown}
      code={code}
    ></App>
  );
}

export default ErrorPage;
