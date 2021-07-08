# Welcome!

Estuary aims to be the easiest way for a network operator, a developer, or an average person to use Filecoin.

> Our automation technology makes storing valuable public data sets as easy as a click of a button.

- Are you a **normal person**? Visit [https://estuary.tech](https://estuary.tech), get an invite key, and upload a file using our website.
- Are you a **developer**? Follow the [tutorial](https://docs.estuary.tech/tutorial-get-an-api-key) to learn how to get an API key so you can upload a file using HTTP fetch or command line CURL.
- Are you a **network operator**? Check out [application-research/estuary](https://github.com/application-research/estuary) to take a peak around the code before we release tutorials for how to run your own node.

Estuary is in early development.

If you are just here to hang out, join us on [ARG Telegram](https://t.me/aresearchgroup) and [we](https://arg.protocol.ai) would be happy to answer any questions you may have.

### Why do you exist?

We helped make [Filecoin](https://filecoin.io) and we want to help build an open source end to end stack for the community to use for free. The Filecoin Network is a breakthrough in decentralized storage network infrastructure and protocols. There are many storage solutions on the internet but none are as advanced as Filecoin with regards to decentralization and transparency.

Still curious why we exist? [Learn more](https://docs.estuary.tech/what-is-estuary).

### How do you handle retrieval deals?

Given any given person, let us imagine they made a request for their data. As an example: [cid:Qmch2cHCE4WXV32vyaLgWXYqE7VSLYwrT7xJ6tpxqq3NP5](https://dweb.link/ipfs/Qmch2cHCE4WXV32vyaLgWXYqE7VSLYwrT7xJ6tpxqq3NP5).

**Case A**

- That data is already pinned to an IPFS/Estuary node.
- The CID is served back to the requester immediately.

**Case B**

- That data is not pinned to an IPFS/Estuary node
- The Estuary node makes a retrieval deal against a Filecoin miner using FIL it has in escrow.
- Once the retrieval deal is successful, that data is pinned to the node.
- The CID is served back to the requester.

Still confusing? Check out the [source code](https://github.com/application-research/estuary/blob/master/retrieval.go).

### How does Estuary use Filecoin and IPFS?

The setup of our node has parts for those who operate IPFS nodes.

- [LibP2P](https://github.com/libp2p) protocols and modules for identity, establishing secure and multiplexed connections between peers, and so much more.
- [go-libp2p-connmgr](https://github.com/libp2p/go-libp2p-connmgr), a package to help manage connections in go-libp2p.
- [go-ipfs-blockstore](https://github.com/ipfs/go-ipfs-blockstore) a thin wrapper over a datastore, giving a clean interface for Getting and Putting block objects.
- [go-libp2p-kad-dht](https://github.com/libp2p/go-libp2p-kad-dht). A Kademlia DHT implementation on go-libp2p.
- [go-bitswap](https://github.com/ipfs/go-bitswap) to acquire blocks requested by the client from the network and to judiciously send blocks in its possession to other peers who want them.

Then we added:

- [Lotus-gateway](https://github.com/filecoin-project/lotus) - we use a small portion of Lotus, to read information about the chain and publish messages.
- [Filclient](https://github.com/application-research/filclient) - a new standalone client library for interacting with the Filecoin storage network.
- Filecoin wallet for automation and escrow funds.
- Automated replication till 6 deals are active and on chain. The value is configurable.
- Deal estimation with USD cost estimation.
- Automated Filecoin retrieval if the CID is no longer pinned.
- Bandwidth tracking.
- Miner logs and performance tracking.
- Deal lookup by ID.

Not enough? Read the [source code](https://github.com/application-research/estuary/blob/master/main.go).

### I am a developer, how do I start?

[Get API access](https://docs.estuary.tech/tutorial-get-an-api-key).
