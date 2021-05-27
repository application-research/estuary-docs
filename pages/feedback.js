import styles from "~/components/App.module.scss";

import * as React from "react";

import App from "~/components/App";

const markdown = `# WIP

This page has not been completed yet.
`;
const code = null;
const curl = null;

function Feedback(props) {
  return (
    <App
      title="Estuary Documentation: Feedbck"
      description="Fill out this form to give Feedback about https://estuary.tech."
      url="https://docs.estuary.tech/feedback"
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

export default Feedback;
