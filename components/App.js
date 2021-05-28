import styles from "~/components/App.module.scss";
import pkg from "~/package.json";

import * as React from "react";
import * as SVG from "~/components/SVG";

import Head from "next/head";
import SearchInput from "~/components/SearchInput";
import RichText from "~/components/RichText";
import CodeBlock from "~/components/CodeBlock";

export default function App(props) {
  return (
    <React.Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name="title" content={props.title} />
        <meta name="description" content={props.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content="/static/social.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={props.url} />
        <meta property="twitter:title" content={props.title} />
        <meta property="twitter:description" content={props.description} />
        <meta property="twitter:image" content="/static/social.png" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon-16x16.png"
        />

        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.container__left}>
          <a href="/" className={styles.logo}>
            Estuary Documentation
          </a>
        </div>
        <div className={styles.container__right}>
          {/*SearchInput placeholder="Search..." />*/}
        </div>
      </div>
      <div className={styles.sections}>
        <div className={styles.sections__index}>
          <div className={styles.sections__index__title}>Introduction</div>
          <a
            style={
              props.active === "what-is-estuary"
                ? { color: `var(--color-primary)` }
                : null
            }
            className={styles.sections__index__item}
            href="/"
          >
            What is Estuary?
          </a>
          <a
            style={
              props.active === "get-an-invite"
                ? { color: `var(--color-primary)` }
                : null
            }
            className={styles.sections__index__item}
            href="/get-invite-key"
          >
            Get an invite
          </a>

          <div
            style={{ marginTop: 48 }}
            className={styles.sections__index__title}
          >
            Tutorial
          </div>

          <a
            style={
              props.active === "tutorial-get-an-api-key"
                ? { color: `var(--color-primary)` }
                : null
            }
            href="/tutorial-get-an-api-key"
            className={styles.sections__index__item}
          >
            Get an API key
          </a>
          <a
            style={
              props.active === "tutorial-uploading-your-first-file"
                ? { color: `var(--color-primary)` }
                : null
            }
            href="/tutorial-uploading-your-first-file"
            className={styles.sections__index__item}
          >
            Uploading your first file
          </a>
          <a
            style={
              props.active === "tutorial-listing-your-files"
                ? { color: `var(--color-primary)` }
                : null
            }
            href="/tutorial-listing-your-files"
            className={styles.sections__index__item}
          >
            Listing your files
          </a>

          <div
            style={{ marginTop: 48 }}
            className={styles.sections__index__title}
          >
            API Documentation
          </div>
          <a
            style={
              props.active === "api-content-add"
                ? { color: `var(--color-primary)` }
                : null
            }
            className={styles.sections__index__item}
            href="/api-content-add"
          >
            ➟ content/add
          </a>
          <a
            style={
              props.active === "api-content-stats"
                ? { color: `var(--color-primary)` }
                : null
            }
            className={styles.sections__index__item}
            href="/api-content-stats"
          >
            ➟ content/stats
          </a>
          <a
            style={
              props.active === "api-content-deals"
                ? { color: `var(--color-primary)` }
                : null
            }
            className={styles.sections__index__item}
            href="/api-content-deals"
          >
            ➟ content/deals
          </a>
          <a
            style={
              props.active === "api-content-status-id"
                ? { color: `var(--color-primary)` }
                : null
            }
            className={styles.sections__index__item}
            href="/api-content-status-id"
          >
            ➟ content/status/:id
          </a>
          <a
            style={
              props.active === "api-public-stats"
                ? { color: `var(--color-primary)` }
                : null
            }
            className={styles.sections__index__item}
            href="/api-public-stats"
          >
            ➟ public/stats
          </a>
          <a
            style={
              props.active === "api-public-miners-failures"
                ? { color: `var(--color-primary)` }
                : null
            }
            className={styles.sections__index__item}
            href="/api-public-miners-failures"
          >
            ➟ public/miners/failures/:miner
          </a>
          <a
            style={
              props.active === "api-public-miners-deals"
                ? { color: `var(--color-primary)` }
                : null
            }
            className={styles.sections__index__item}
            href="/api-public-miners-deals"
          >
            ➟ public/miners/deals/:miner
          </a>
          <a
            style={
              props.active === "api-public-miners-stats"
                ? { color: `var(--color-primary)` }
                : null
            }
            className={styles.sections__index__item}
            href="/api-public-miners-stats"
          >
            ➟ public/miners/stats/:miner
          </a>

          <div
            style={{ marginTop: 48 }}
            className={styles.sections__index__title}
          >
            Community
          </div>

          <a
            target="_blank"
            className={styles.sections__index__item}
            href="https://github.com/application-research"
          >
            <SVG.GitHub size="14px" style={{ marginTop: 2, marginRight: 8 }} />{" "}
            GitHub
          </a>
          <a
            style={
              props.active === "feedback"
                ? { color: `var(--color-primary)` }
                : null
            }
            className={styles.sections__index__item}
            href="/feedback"
          >
            Give feedback
          </a>
          <a
            target="_blank"
            className={styles.sections__index__item}
            href="https://filecoin.io/slack"
          >
            Join Slack (#arg)
          </a>
        </div>
        <div className={styles.sections__body}>
          {props.markdown ? (
            <RichText>{props.markdown}</RichText>
          ) : (
            props.children
          )}
        </div>
        {props.code ? (
          <div className={styles.sections__code}>
            <CodeBlock curl={props.curl} code={props.code} />
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
}
