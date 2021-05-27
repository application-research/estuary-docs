import styles from "~/components/App.module.scss";

import * as React from "react";

import App from "~/components/App";

const markdown = `# WIP

This page has not been completed yet.
`;
const code = null;
const curl = null;

function GetInviteKey(props) {
  return (
    <App
      title="Estuary Documentation: Get Invite Key"
      description="Fill out this form to get an invite key for https://estuary.tech."
      url="https://docs.estuary.tech/get-invite-key"
      curl={curl}
      markdown={markdown}
      code={code}
      active="get-an-invite"
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default GetInviteKey;
