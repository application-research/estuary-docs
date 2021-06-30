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

function GetInviteKey(props) {
  const [state, setState] = React.useState({
    name: '',
    twitter: '',
    email: '',
    message: '',
    success: false,
    loading: false,
  });

  return (
    <App
      title="Estuary Documentation: Sign up"
      description="Fill out this form to get an invite key for https://estuary.tech."
      url="https://docs.estuary.tech/sign-up"
      curl={curl}
      markdown={markdown}
      code={code}
      active="get-an-invite"
    >
      {state.success ? (
        <div className={U.classNames(styles.group, rstyles.block)}>
          <h1 style={{ marginTop: 22 }}>Thank you!</h1>
          <p>
            Everyone on our team will get a chance to read this request for an invite. Thank you for
            submitting it!
          </p>
        </div>
      ) : (
        <div className={U.classNames(styles.group, rstyles.block)}>
          <h1 style={{ marginTop: 22 }}>Sign up</h1>
          <p>
            Would you like to use{' '}
            <a href="https://estuary.tech" target="_blank">
              https://estuary.tech
            </a>{' '}
            to make Filecoin storage deals? Please fill out this form! We'll get back to you either
            over Twitter or e-mail if we think you have an awesome public data set.
          </p>

          <div className={styles.title}>Name</div>
          <Input
            style={{ marginTop: 8 }}
            value={state.name}
            placeholder="ex: Mark Walters"
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
            name="name"
          />
          <div className={styles.title}>E-mail</div>
          <Input
            style={{ marginTop: 8 }}
            value={state.email}
            placeholder="ex: mark.walters@protocol.ai"
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
            name="email"
          />
          <div className={styles.title}>Twitter (optional)</div>
          <Input
            style={{ marginTop: 8 }}
            value={state.twitter}
            placeholder="ex: filecoin"
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
            name="twitter"
          />
          <div className={styles.title}>
            Tell us about the data you want to store, go in detail! (Max: 5000 characters)
          </div>
          <Textarea
            style={{ marginTop: 8 }}
            value={state.message}
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
            name="message"
            maxLength={5000}
          />

          <ul className={styles.ul}>
            <li className={styles.li}>The estuary node is for public data.</li>
            <li className={styles.li}>
              You should upload public data that is licensed for public usage.
            </li>
            <li className={styles.li}>
              If you wish to use Estuary for private data, make sure you encrypt it first.
            </li>
          </ul>

          <div className={styles.action}>
            <Button
              loading={state.loading}
              onClick={async () => {
                if (U.isEmpty(state.name)) {
                  alert('You must provide a name.');
                  return;
                }

                if (U.isEmpty(state.email)) {
                  alert('You must provide an e-mail, or we will not be able to reach you');
                  return;
                }

                if (U.isEmpty(state.message)) {
                  alert('You must provide feedback');
                  return;
                }

                setState({ ...state, loading: true });
                try {
                  fetch('/api/request-invite', {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      name: state.name,
                      email: state.email,
                      twitter: state.twitter,
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

export default GetInviteKey;
