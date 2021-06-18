# Welcome!

Estuary is a simple IPFS node that integrates a minimal Filecoin Client Library. Both are open source and available to you on the [Application Research Group's GitHub](https://github.com/application-research/).

> Our automation technology allows anyone with public data to store and retrieve it using a few API calls. It is for infrastructure operators, developers and Filecoin users.

You can run your own Estuary Node (soon). If you don't like code or APIs you can use our hosted Estuary Node at [https://estuary.tech](https://estuary.tech) to store files.

Feel free to take whatever [we](https://arg.protocol.ai) have built and use it for whatever you need. If you have any questions you can always reach out to [@wwwjim](https://www.twitter.com/wwwjim) and [@whyrusleeping](https://www.twitter.com/whyrusleeping) on Twitter, we are always willing to help.

## Why should I care?

[Filecoin](https://filecoin.io) is a breakthrough in decentralized storage network infrastructure and protocols. There are many storage solutions on the internet but none are as advanced as Filecoin with regards to decentralization and transparency. When you store with Filecoin you get to know exactly which provider is storing your data, and the same can not be said about other centralized providers through their products and infrastructure.

That being said, if you are content with opaque systems, something as transparent and globally operated like Filecoin may not appeal to you.

[Learn why we made Estuary.](https://docs.estuary.tech/what-is-estuary)

## How does Estuary use Filecoin and IPFS

The setup of our node has familiar parts for those who are comfortable with IPFS.

- [LibP2P](https://github.com/libp2p) protocols and modules for identity, establishing secure and multiplexed connections between peers, and so much more.
- [go-libp2p-connmgr](https://github.com/libp2p/go-libp2p-connmgr), a package to help manage connections in go-libp2p.
- [go-ipfs-blockstore](https://github.com/ipfs/go-ipfs-blockstore) a thin wrapper over a datastore, giving a clean interface for Getting and Putting block objects.
- [go-libp2p-kad-dht](https://github.com/libp2p/go-libp2p-kad-dht). A Kademlia DHT implementation on go-libp2p.
- [go-bitswap](https://github.com/ipfs/go-bitswap) to acquire blocks requested by the client from the network and to judiciously send blocks in its possession to other peers who want them.

With this setup, we added features that complete the Filecoin storage experience.

- [Lotus-gateway](https://github.com/filecoin-project/lotus) - we use a small portion of Lotus, to read information about the chain and publish messages.
- [Filclient](https://github.com/application-research/filclient) - a new standalone client library for interacting with the Filecoin storage network.
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

[Get an API key!](https://docs.estuary.tech/tutorial-get-an-api-key)
