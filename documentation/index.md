# What is Estuary?

Estuary is a simple IPFS node that integrates a minimal Filecoin Client Library. Both are open source and available to you on the [Application Research Group's GitHub](https://github.com/application-research/).

> Our automation technology allows anyone with public data to store and retrieve it using a few API calls. It is for infrastructure operators, developers and Filecoin users.

You can run your own Estuary Node (soon). If you don't like code or APIs you can use our hosted Estuary Node at [https://estuary.tech](https://estuary.tech) to store files.

Feel free to take whatever [we](https://arg.protocol.ai) have built and use it for whatever you need. If you have any questions you can always reach out to [@wwwjim](https://www.twitter.com/wwwjim) and [@whyrusleeping](https://www.twitter.com/whyrusleeping) on Twitter, we are always willing to help.

## What makes Estuary different than using IPFS?

The setup of our node has familiar parts for those who are comfortable with IPFS.

- LibP2P key load and initialization.
- A NAT port map.
- A connection manager.
- Blockstore for getting and putting block objects.
- A distributed hash table (DHT).
- Bitswap for exchanging blocks to and from peers.

With this setup, we added features that complete the Filecoin storage experience.

- Filecoin wallet for automation and escrow funds.
- Automated replication till 6 deals are active and on chain. The value is configurable.
- Deal estimation with USD cost estimation.
- Automated Filecoin retrieval if the CID is no longer pinned.
- Bandwidth tracking.
- Miner logs and performance tracking.
- Deal lookup by ID.

## How do I start?

Check out our tutorial section to get started! We will walk you
through getting your first API key and making your first API call against our [https://estuary.tech](https://estuary.tech) node.
