import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const markdown = `# ➟ /user/api-keys?perms=upload&expiry=24h

## Overview
Use the endpoint to list all API keys for the current user.

This endpoint should never called on the client. You should never expose your root API key to the client.

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/user/get_user_api_keys)

`;

const curl = `curl -X GET "https://api.estuary.tech/user/api-keys" -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" -H "Accept: application/json"`;
const code = null;

function APIContentStats(props) {
  return (
    <App
      title="Estuary Documentation: API: /user/api-keys"
      description="https://api.estuary.tech/user/api-keys"
      url="https://docs.estuary.tech/user-key-get"
      active="user-key-get"
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
