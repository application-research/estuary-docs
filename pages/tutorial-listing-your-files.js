import styles from "~/pages/Page.module.scss";

import * as React from "react";

import App from "~/components/App";

const markdown = `# WIP

This page has not been completed yet.
`;
const code = null;
const curl = null;

function TutorialListingYourFiles(props) {
  return (
    <App
      title="Estuary Documentation: Tutorial: Listing Your Files"
      description="Tutorial Part 3: List your files that you've uploaded for consumption on another site."
      url="https://docs.estuary.tech/tutorial-listing-your-files"
      curl={curl}
      markdown={markdown}
      code={code}
      active="tutorial-listing-your-files"
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default TutorialListingYourFiles;
