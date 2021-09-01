# Introduction

Estuary is a combination of open source technologies packaged together to help everyone:

- Store and retrieve content using IPFS.
- Use an IPFS API that adheres to the [IPFS Pinning Services API Spec](https://ipfs.github.io/pinning-services-api-spec/).
- Store content on Filecoin with proposition receipts and successful deal receipts. See a verification example [here](https://estuary.tech/verify-cid?cid=QmYNSTn2XrxDsF3qFdeYKSxjodsbswJV3mj1ffEJZa2jQL).

If you use [https://estuary.tech](https://estuary.tech), you are using the [ARG](https://arg.protocol.ai)'s hosted Estuary Node.

## Start now

- [Get your Estuary invite](/get-invite-key).
- Visit [https://estuary.tech/sign-up](https://estuary.tech/sign-up) to create an account and upload your files.
- Try our API by reading our [documentation](/tutorial-get-an-api-key).
- Watch [Estuary: Getting Started](https://youtu.be/AHAMHbpioGw) if you're still stuck.

Curious about how Estuary works? Read about it [here](https://docs.estuary.tech/what-is-estuary).

## Overview

An Estuary Node is the most reliable and simple way to upload public data to the Filecoin Network.

For those who are not familiar, people use [Filecoin](https://filecoin.io) Network for presistent, interoperable, verifiable and provable decentralized storage. People use IPFS and other [protocols](https://github.com/application-research/estuary/blob/master/main.go) for content addressing and cached retrievals.

An Estuary Node has tooling and logic to manage making succesful storage deals for the data pinned on it. Estuary will look through a curated list of storage providers and initiate storage deals against them. Estuary has the logic to manage what data is kept "pinned/hot" in IPFS, and will do retrieval requests to pull data out of Filecoin if the "pinned/hot" data is not available on any given node.

In short, Estuary makes the state management associated storage easy by managing it with code and letting developers configure what they need to, when they need to. Filecoin does not need to feel complex.

#### Limitations?

- A maximum of 32 GB per upload. This will increase!
- The service is temporarily invite only to people with meaningful public data.
- Storage providers can not be selective of the data they will receive, yet.
- The location of the storage provider can not be guaranteed.

> "Why would I use https://estuary.tech?"

If you are a human who wants to upload public data sets to the internet, our Estuary Node is a solution to that problem.

- Go to [https://estuary.tech](https://estuary.tech).
- Create an account with your [invite key](https://docs.estuary.tech/get-invite-key).
- Drag and drop a file or select one from your machine.
- Wait a few seconds.

Success! You have uploaded a file to the [Filecoin Network](https://filecoin.io) and you can retrieve that content address from any IPFS gateway.

> "As a developer, why would I use the API provided by https://estuary.tech?"

If you are a developer who wants to use Filecoin storage, our API is a solution to that problem.

- Make sure you have some basic software development skills, starting with a language that you like to use (Examples: JavaScript, Ruby, Python, Go, Rust, C++, Java).
- Go to [https://estuary.tech](https://estuary.tech).
- Create an account with your [invite key](https://docs.estuary.tech/get-invite-key).
- [Follow our tutorial](https://docs.estuary.tech/tutorial-get-an-api-key).

Congrats! Now your application can store and retrieve a file on the Filecoin Network whenever you like.

> "As a network operator, why would I run my own Estuary infrastructure/node?"

If you are a network operator like [Pinata](https://pinata.cloud), [Fission](https://fission.codes/) or [Textile](https://www.textile.io/) and you want to run your own Estuary nodes, our open source code is the solution to your problem.

- Coming soon.
- Follow development [here](https://github.com/application-research/estuary).
