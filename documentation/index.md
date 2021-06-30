# Estuary docs 

Estuary is an API that simplifies how developers can interact with the Filecoin network. Instead of manually searching for storage providers or attempting to make retrieval deals, Estuary lets you upload data and then forget about it. Simply put, it makes using Filecoin easy. It also comes bundled with a nice little web interface so you can actually see how you're interacting with the network.

## Get started

Start using Estuary in four steps:

- [Sign up](./get-invite-key)
- [Get an API key](./tutorial-get-an-api-key)
- [Upload a file](./tutorial-uploading-your-first-file)
- [List your files](./tutorial-listing-your-files)

## What is Estuary?

Estuary is an API made for developers who want to jump into using the Filecoin network without worrying about any of the overhead. You don't need to spin up any nodes; you don't need to worry about minimum file sizes; you don't need to worry about which miners are reliable. All you need is an API key and some data.

The default workflow for interact with the Filecoin network is somewhat complicated. To store data on the Filecoin network, users need to create storage deals with storage providers. To make a storage deal, a user must have an amount of FIL to pay for the deal, along with a Filecoin node to create their deal and send it to the Filecoin network. Filecoin nodes are very resource-intensive and are challenging to maintain. On top of that, if a user wants to store their data with more than one storage provider, they have to create multiple deals. Sometimes deals with fail with no clear explanation why, and the user has to make another deal and send it to the Filecoin network.

Estuary abstracts away all those problems and gives the user one endpoint to manage.

