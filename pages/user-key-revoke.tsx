import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const markdown = `# ➟ /user/api-keys/:key

## Overview
Use the endpoint to revoke an API key on your server.

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/user/delete_user_api_keys)

`;

const curl = `curl -X DELETE "https://api.estuary.tech/user/api-keys/:key" -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" -H "Accept: application/json"`;
const code = null;

function APIContentStats(props) {
  return (
    <App
        title="Estuary Documentation: API: /user/api-keys/:key"
        description="https://api.estuary.tech/user/api-keys/:key"
      url="https://docs.estuary.tech/user-key-revoke"
      active="user-key-revoke"
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

export default APIContentStats;
