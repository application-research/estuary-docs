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

function Feedback(props) {
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
      title="Estuary Documentation: Feedback"
      description="Fill out this form to give Feedback about https://estuary.tech."
      url="https://docs.estuary.tech/feedback"
      curl={curl}
      markdown={markdown}
      code={code}
      active="feedback"
    >
      {state.success ? (
        <div className={U.classNames(styles.group, rstyles.block)}>
          <h1 style={{ marginTop: 22 }}>Thank you!</h1>
          <p>
            Everyone on our team will get a chance to read this feedback. Thank you for submitting
            it!
          </p>
        </div>
      ) : (
        <div className={U.classNames(styles.group, rstyles.block)}>
          <h1 style={{ marginTop: 22 }}>Feedback</h1>
          <p>
            Would you like to provide feedback for Estuary? Please submit it below. We may follow up
            with you for further questions!
          </p>

          <div className={styles.title} style={{ marginTop: 48 }}>
            Name
          </div>
          <Input
            style={{ marginTop: 8 }}
            value={state.name}
            placeholder="ex: Jessica Smith"
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
            name="name"
          />
          <div className={styles.title}>E-mail (optional)</div>
          <Input
            style={{ marginTop: 8 }}
            value={state.email}
            placeholder="ex: jessica.smith@protocol.ai"
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
            What would improve your experience with Estuary? (Max: 5000 characters)
          </div>
          <Textarea
            style={{ marginTop: 8 }}
            value={state.message}
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
            name="message"
            maxLength={5000}
          />

          <div className={styles.action}>
            <Button
              loading={state.loading}
              onClick={async () => {
                if (U.isEmpty(state.name)) {
                  alert('You must provide a name.');
                  return;
                }

                if (U.isEmpty(state.message)) {
                  alert('You must provide feedback');
                  return;
                }

                setState({ ...state, loading: true });
                try {
                  fetch('/api/send-feedback', {
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

export default Feedback;
