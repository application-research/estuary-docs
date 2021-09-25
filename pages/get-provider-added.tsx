import styles from '@pages/Page.module.scss';
import rstyles from '@components/RichText.module.scss';

import * as React from 'react';
import * as U from '@common/utilities';

import App from '@components/App';
import Input from '@components/Input';
import Textarea from '@components/Textarea';
import Button from '@components/Button';

const markdown = null;
const code = null;
const curl = null;

function GetProviderAdded(props) {
  const [state, setState] = React.useState({
    name: '',
    provider: '',
    configuration: '',
    message: '',
    success: false,
    loading: false,
  });

  return (
    <App
      title="Estuary Documentation: Storage Provider Application"
      description="Fill out this form to get added to Estuary so you can receive storage deals."
      url="https://docs.estuary.tech/get-provider-added"
      curl={curl}
      markdown={markdown}
      code={code}
      active="get-provider-added"
    >
      {state.success ? (
        <div className={U.classNames(styles.group, rstyles.block)}>
          <h1 style={{ marginTop: 22 }}>Thank you!</h1>
          <p>
            Everyone on our team will get a chance to read this request. Thank you for submitting
            it!
          </p>
        </div>
      ) : (
        <div className={U.classNames(styles.group, rstyles.block)}>
          <h1 style={{ marginTop: 22 }}>Storage provider application</h1>
          <p>
            Would you like to get your provider added to{' '}
            <a href="https://estuary.tech" target="_blank">
              https://estuary.tech
            </a>{' '}
            and receive verified Filecoin storage deals? Please fill out this form! If we believe
            your provider is qualified we will add it to our provider index and you will receive
            storage deals.
          </p>

          <div className={styles.title} style={{ marginTop: 48 }}>
            Name
          </div>
          <Input
            style={{ marginTop: 8 }}
            value={state.name}
            placeholder="ex: Mark Walters"
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
            name="name"
          />
          <div className={styles.title}>Provider ID</div>
          <Input
            style={{ marginTop: 8 }}
            value={state.provider}
            placeholder="ex: f0100"
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
            name="provider"
          />
          <div className={styles.title}>Your provider configuration</div>
          <Textarea
            style={{ marginTop: 8 }}
            value={state.configuration}
            placeholder="hardware spec, ask price, sealing capacity, dealing rate and so on..."
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
            name="configuration"
            maxLength={5000}
          />

          <div className={styles.title}>Notes</div>
          <Textarea
            style={{ marginTop: 8 }}
            value={state.message}
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
            name="message"
            maxLength={5000}
          />

          <ul className={styles.ul}>
            <li className={styles.li}>
              We are in the early stages of Estuary development and we have a preference for storage
              providers who want to store public data that is meant to be accessed by anyone.
            </li>
          </ul>

          <div className={styles.action}>
            <Button
              loading={state.loading}
              onClick={async () => {
                if (U.isEmpty(state.name)) {
                  alert('You must provide your name.');
                  return;
                }

                if (U.isEmpty(state.provider)) {
                  alert('You must provide a provider ID.');
                  return;
                }

                if (U.isEmpty(state.configuration)) {
                  alert('You must provide feedback');
                  return;
                }

                setState({ ...state, loading: true });
                try {
                  fetch('/api/request-add-provider', {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      name: state.name,
                      provider: state.provider,
                      configuration: state.configuration,
                      message: state.message,
                    }),
                  });
                } catch (e) {
                  console.log(e);
                }

                setState({
                  ...state,
                  success: true,
                  loading: true,
                  message: '',
                  configuration: '',
                });
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      )}
    </App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default GetProviderAdded;
