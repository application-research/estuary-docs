# [Estuary documentation](https://docs.estuary.tech)

This repo contains all the documentation for [estuary.tech](https://estuary.tech), along with the website build logic. If you're looking for the [estuary.tech](https://estuary.tech) homepage repo, head to [github.com/application-research/estuary-www](https://github.com/application-research/estuary-www).

## Run locally

1. Clone this repo:

    ```shell
    git clone https://github.com/application-research/estuary-docs.git
    cd estuary-docs
    ```

1. Install dependencies:

    ```shell
    npm install
    ```

1. Start the local server:

    ```shell
    npm run dev
    ```

1. View the site in your browser at [localhost:3005](http://localhost:3005)
1. Done!

## Adding a page
1. Start by copying and renaming one of the pages from `pages`
2. Add your changes to the newly copied page, remember to change variable names
3. Add your page to `components/Navigation.tsx` so it appears on the menu on the left of the screen

## Get support

Running into problems? [Leave an issue](https://github.com/application-research/estuary-docs/issues), or [join the #arg Slack](https://filecoin.io/slack).
