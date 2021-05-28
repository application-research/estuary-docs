import styles from "~/pages/Page.module.scss";

import * as React from "react";
import * as U from "~/common/utilities";

import App from "~/components/App";
import Input from "~/components/Input";
import Textarea from "~/components/Textarea";
import Button from "~/components/Button";

const markdown = null;
const code = null;
const curl = null;

function GetInviteKey(props) {
  const [state, setState] = React.useState({
    name: "",
    twitter: "",
    email: "",
    message: "",
    success: false,
    loading: false,
  });

  return (
    <App
      title="Estuary Documentation: Get Invite Key"
      description="Fill out this form to get an invite key for https://estuary.tech."
      url="https://docs.estuary.tech/get-invite-key"
      curl={curl}
      markdown={markdown}
      code={code}
      active="get-an-invite"
    >
      {state.success ? (
        <div className={styles.group}>
          <h2>Thank you!</h2>
          <p>
            Everyone on our team will get a chance to read this request for an
            invite. Thank you for submitting it!
          </p>
        </div>
      ) : (
        <div className={styles.group}>
          <h2>Request invite</h2>
          <p>
            Would you like to use{" "}
            <a href="https://estuary.tech" target="_blank">
              https://estuary.tech
            </a>{" "}
            to make Filecoin storage deals? Please fill out this form! We'll get
            back to you either over Twitter or e-mail if we think you have an
            awesome public data set.
          </p>

          <div className={styles.title}>Name</div>
          <Input
            style={{ marginTop: 8 }}
            value={state.name}
            placeholder="ex: Mark Walters"
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
            name="name"
          />
          <div className={styles.title}>E-mail</div>
          <Input
            style={{ marginTop: 8 }}
            value={state.email}
            placeholder="ex: mark.walters@protocol.ai"
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
            name="email"
          />
          <div className={styles.title}>Twitter (optional)</div>
          <Input
            style={{ marginTop: 8 }}
            value={state.twitter}
            placeholder="ex: filecoin"
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
            name="twitter"
          />
          <div className={styles.title}>
            Tell us about the data you want to store, go in detail! (Max: 5000
            characters)
          </div>
          <Textarea
            style={{ marginTop: 8 }}
            value={state.message}
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
            name="message"
            maxLength={5000}
          />

          <div className={styles.action}>
            <Button
              loading={state.loading}
              onClick={async () => {
                if (U.isEmpty(state.name)) {
                  alert("You must provide a name.");
                  return;
                }

                if (U.isEmpty(state.email)) {
                  alert(
                    "You must provide an e-mail, or we will not be able to reach you"
                  );
                  return;
                }

                if (U.isEmpty(state.message)) {
                  alert("You must provide feedback");
                  return;
                }

                setState({ ...state, loading: true });
                try {
                  fetch("/api/request-invite", {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
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
                  message: "",
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
