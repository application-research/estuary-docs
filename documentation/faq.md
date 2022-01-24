# FAQ

> Does Estuary support private storage?

Estuary does not encrypt or provide any protection for your data. The safety of your data is your own responsibility.

> Is Estuary {insert any compliance} compliant?

When you run your own Estuary Node, you can make your Estuary Node compliant. Our Estuary Node may not be and does not make any promises about compliance.

> Can you guarantee the location of our data?

No.

> Can you guarantee all of my data ends up on a specific storage provider?

No. But you may be able to if you run your own Estuary Node.

> What is the mechanism for choosing storage providers? 

You decide, we try against 3 of the storage providers with the best performance, and 3 random ones. You can modify this and can also contribute better ways to select providers, and make open source contributions to the repo itself.

> What is Estuary's take on storage provider reputation, and what are some key reputation metrics that Estuary focuses on?

Estuary's take is one based on real performance, to attempt to simulate real world requirements as much as possible.

> Are the existing storage providers' information shared by all estuary nodes, or does each node have its own list of storage providers?

Each Estuary node has its own list, in a SQL database.

> What is the process for a storage provider to connect to Estuary?

Add the storage provider to the list that your Estuary node keeps. You will have an admin dashboard, and can manage your providers from a GUI or API call.

> Can I use Estuary over the command line?

Yes, use CURL.

> How is Estuary different than Web3 Storage or NFT Storage?

Read more [here](https://estuary.tech/comparisons-web3).

> How does Estuary compare to cloud storage?

Read more [here](https://estuary.tech/comparisons).

> How do we make sure providers are able to accept these deals? Do they need advance warning?

Providers should not need advance warning, if there are problems with the deal they should have the mechanisms in place to reject it.

> Can providers handle the Estuary Node rate of deals?

Estuary as of September 1st is capable of making 600 storage deals an hour.

> How does Estuary fit into indexing plans for discovering Filecoin data on providers?

Estuary uses [multihashes](https://multiformats.io/multihash/).

> Are all pieces of data referenced by mulithash?

Everything is referenced by a content identifer (CID). IPFS does not distinguish between CIDs with the same multihash.

> Does Estuary have a plan for deal renewals?

There is no way to extend an existing deal, Estuary will make a new deal on the users behalf.

> Are deals importable and exportable?

Yes, but the API is not exposed.

> Once a deal is made, how does Estuary help clients monitor storage status and facilitate retrieval?

Your Estuary node runs with a web server that polls against each storage provider per deal ID, and checks the status. If a deal is slashed, it will continue to try and make Estuary deals until there are 6. This process is automated.

Estuary will attempt retrieval to fix lost CIDs on the IPFS node. Currently, since everything you upload is also pinned, users can retrieve anything uploaded through Estuary through any IPFS gateway via HTTP.
