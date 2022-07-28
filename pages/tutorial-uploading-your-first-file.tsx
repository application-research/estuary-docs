import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';
import markdown from '@documentation/tutorial-uploading-your-first-file.md';

const code = `class Example extends React.Component {
  upload(e) {
    e.persist();
    console.log(e.target.files);
    
    const formData  = new FormData();
    formData.append("data", e.target.files[0]);
    
    // NOTE
    // This example uses XMLHttpRequest() instead of fetch
    // because we want to show progress. But you can use
    // fetch in this example if you like.
    const xhr = new XMLHttpRequest();
    
    xhr.upload.onprogress = (event) => {
      this.setState({ 
        loaded: event.loaded, 
        total: event.total 
      });
    }
    
    xhr.open(
      "POST", 
      "https://shuttle-4.estuary.tech/content/add"
    );
    xhr.setRequestHeader(
      "Authorization", 
      "Bearer REPLACE_ME_WITH_API_KEY"
    );
    xhr.send(formData);
  }

  render() {
    return (
      <React.Fragment>
        <input type="file" onChange={this.upload.bind(this)} />
        <br />
        <pre>{JSON.stringify(this.state, null, 1)}</pre>
      </React.Fragment>
    );
  }
}`;

const curl = `curl
 -X POST https://shuttle-4.estuary.tech/content/add \\ 
 -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" \\ 
 -H "Content-Type: multipart/form-data" \\ 
 -F "data=@PATH_TO_YOUR_FILE"`;

function TutorialUploadingYourFirstFile(props) {
  return (
    <App
      title="Estuary Documentation: Tutorial: Uploading Your First File"
      description="Tutorial Part 2: Uploading your first file to the Filecoin Network through Estuary."
      url="https://docs.estuary.tech/tutorial-uploading-your-first-file"
      curl={curl}
      markdown={markdown}
      code={code}
      active="tutorial-uploading-your-first-file"
    />
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default TutorialUploadingYourFirstFile;
