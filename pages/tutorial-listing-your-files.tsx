import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';
import markdown from '@documentation/tutorial-listing-your-files.md';

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.estuary.tech/content/list', {
      method: "GET",
      headers: {
        Authorization: 'Bearer REPLACE_ME_WITH_API_KEY',
      },
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

const curl =
  'curl -X GET -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" https://api.estuary.tech/content/list';

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
