# Welcome to Estuary

Estuary is a decentralized data storage service built on key d-web protocols such as IPFS and Filecoin. Users can:

- Store and retrieve content quickly using IPFS.
- Use an IPFS API that adheres to the [IPFS Pinning Services API Spec](https://ipfs.github.io/pinning-services-api-spec/).
- Store content on Filecoin with proposition receipts and successful deal receipts.

## Alpha phase

Estuary is currently in its alpha testing phase. Because of this, there are some restrictions to the service:

- A maximum of 32 GB per upload. This limit will increase soon.
- The service is temporarily limited to users wanting to store meaningful public data. [You can apply for an invite →](/get-invite-key)
- We can not guarantee physically _where_ your data ends up. It may be on an Estuary node in your city or on another continent. We're working on this.

## How Estuary works

Estuary uses two major decentralized data-storage protocols: the [Filecoin network](https://filecoin.io) and [IPFS](https://ipfs.io). The Filecoin network allows for _persistent_, _interoperable_, _verifiable_, and _provable_ decentralized storage. IPFS is used for content addressing and cached retrievals.

When you store data using Estuary, that data will go to an Estuary _node_. Initially, all data is stored in _hot-storage_ using IPFS. While this data is stored, each node will look through a curated list of Filecoin storage providers and initiate storage deals to move hot-storage data into long term cold-storage.

## Next steps

There's a lot to dive into, and things can get a bit overwhelming. Your first step is to [request an invite](/get-invite-key) to get an API key. Once you've got that, take a look at the [Upload data](/tutorial-uploading-your-first-file) tutorial to get started with storing things on Estuary.
