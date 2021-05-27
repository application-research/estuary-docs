import styles from "~/pages/Page.module.scss";

import * as React from "react";

import App from "~/components/App";

const markdown = `# WIP

This page has not been completed yet.
`;
const code = null;
const curl = null;

function TutorialUploadingYourFirstFile(props) {
  return (
    <App
      title="Estuary Documentation: Tutorial: Uploading Your First File"
      description="Tutorial Part 2: Uploading your first file to the network."
      url="https://docs.estuary.tech/tutorial-uploading-your-first-file"
      curl={curl}
      markdown={markdown}
      code={code}
      active="tutorial-uploading-your-first-file"
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default TutorialUploadingYourFirstFile;
