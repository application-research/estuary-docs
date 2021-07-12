# Why does Estuary exist?

We helped make [Filecoin](https://filecoin.io) and we want to help build an open source end to end stack for the community to use for free. The Filecoin Network is a breakthrough in decentralized storage network infrastructure and protocols. There are many storage solutions on the internet but none are as advanced as Filecoin with regards to decentralization and transparency.

### Methodology

All data is currently uploaded to our hosted Estuary Node (Written in Go) in North America. Filecoin deals are made immediately against miners listed on our index. When a file is uploaded:

- A proposal receipt is provided.
- The deal machine will continue to make deals until 6 storage deals are sealed on the Filecoin Network.
- Each deal is proposed for a year (in fil-epochs), and is a verified client deal.
- For each successful deal, a Filecoin storage deal receipt is provided with duration and miner information.

Estuary also provides a pinning API that adheres to IPFS pinning standards, that data is also backed up to the Filecoin Network through the process mentioned.

### How does Estuary use the Filecoin Network and IPFS protocol?

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

### How does Estuary handle retrieval deals?

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

### Miner logs

- All of the miners we work with are located on this [API documentation page](https://docs.estuary.tech/api-public-miners) and on the bottom of [https://estuary.tech](https://estuary.tech).
- All of our stats are publicly available on this [API documentation page](https://docs.estuary.tech/api-public-stats) or visible from [https://estuary.tech](https://estuary.tech).
- You can find custom miner pages for each miner on [https://estuary.tech](https://estuary.tech).

### I am a developer, how do I start?

[Get API access](https://docs.estuary.tech/tutorial-get-an-api-key).
