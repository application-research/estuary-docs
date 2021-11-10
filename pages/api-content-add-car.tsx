import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const markdown = `# ➟ /content/add-car
Use this endpoint to write a Content-Addressable Archive (CAR) file, and make storage deals for its contents.
For more information on CARs check the [spec page](https://ipld.io/specs/transport/car/)


### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.estuary.tech/feedback).
`;




const key = `api-content-add-car`;
const curl = `curl -X POST https://api.estuary.tech/content/add-car -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" -H "Accept: application/json" -T PATH_TO_FILE`;

const code = `class Example extends React.Component {
 upload(e) {
    e.persist();
    
    // NOTE
    // This example uses XMLHttpRequest() instead of fetch
    // because we want to show progress. But you can use
    // fetch in this example if you like.
    const xhr = new XMLHttpRequest();
    var url = "https://api.estuary.tech";
    xhr.upload.onprogress = (e) => {
      this.setState({ 
        loaded: event.loaded, 
        total: event.total 
      });
    }
    
    xhr.open(
      "POST", 
      url+"/content/add-car" 
    );
    xhr.setRequestHeader(
      "Authorization", 
      "Bearer REPLACE_ME_WITH_API_KEY"
    );
    xhr.send(e.target.files[0]);
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
}`

function APIContentAddCAR(props) {
  return (
    <App
      title="Estuary Documentation: API: /content/add-car"
      description="https://api.estuary.tech/content/add-car"
      url={`https://docs.estuary.tech/${key}`}
      active={key}
      curl={curl}
      markdown={markdown}
      code={code}
    />
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default APIContentAddCAR;

