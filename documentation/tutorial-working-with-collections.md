# Working with Collections
A collection in Estuary can be thought of as a bucket of CIDs put together. Collections are used to organize files and other types of data uploaded to Estuary. There is no restriction about the type of data that can be held in a collection, provided it's pinned on, or in other words, uploaded to Estuary, and that it has a CID.

### Creating a collection
Before being able to use a collection, it needs to be created. Here's how to do it using curl:
```
curl -X POST https://api.estuary.tech/collections/create -d '{ "name": "My super nice new collection", "description": "This collection holds only the best content" }' -H "Content-Type: application/json" -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY"
```
**Obs:** If you're running your own Estuary node, you will need to change **https://api.estuary.tech** to your own address such as **https://localhost:3004**

Upon success, Estuary returns the created collection:
```
{
  "createdAt": "2022-02-23T16:20:50.518337618-03:00",
  "uuid": "28d923b5-2561-43ee-8ab3-fb42088666f2",
  "name": "My super nice new collection",
  "description": "this collection holds only the best content",
  "userId": 1
}
```
We're specially interested in the **uuid** field here, which is the unique identifier we will use to add data to that collection in the following section.


### Adding a file to a collection
There are multiple ways to add data to a collection. Here we will explore two endpoints: **/collections/add-content** and **/content/add-ipfs**.

#### /collections/add-content
Let's add two CIDs **QmW3sbi25Veqkg3o9qCMkTuosSw6S8hSPzAEffwA1tCf5S** and **QmS8dypUY34t3UF7Xd98KhuxqQ8F45WckJCGkdhNnwgvM4** using this endpoint:
```
curl -X POST https://api.estuary.tech/collections/add-content -d '{ "contents": [], "cids": [QmS8dypUY34t3UF7Xd98KhuxqQ8F45WckJCGkdhNnwgvM4, QmW3sbi25Veqkg3o9qCMkTuosSw6S8hSPzAEffwA1tCf5S], "collection": "28d923b5-2561-43ee-8ab3-fb42088666f2" }' -H "Content-Type: application/json" -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY"
```
**Obs:** Notice we used the uuid of the collection we created earlier (**28d923b5-2561-43ee-8ab3-fb42088666f2**) to identify the collection we want to upload content to.

We can also use **estuaryId**s to specify contents that are already uploaded to Estuary in order to include them in a collection. When a file gets uploaded to Estuary, it gets a corresponding **estuaryId**. Let's first add a file (**file1.txt**) to estuary using the **/content/add** endpoint in order to get its contentID:
```
curl -X POST https://api.estuary.tech/content/add -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" -H "Accept: application/json" -H "Content-Type: multipart/form-data" -F "data=@/tmp/file1.txt"

{
  "cid": "bafkqadlumvzxi2lom4qgm2lmmufa",
  "estuaryId": 10,
  "providers": [
    "/ip4/192.168.2.107/tcp/6744/p2p/12D3KooWPmL4jXD2y1sgzyyYc36XUoNw1rmLnsg5woPF24vabEVR",
    "/ip4/127.0.0.1/tcp/6744/p2p/12D3KooWPmL4jXD2y1sgzyyYc36XUoNw1rmLnsg5woPF24vabEVR",
    "/ip4/192.168.0.20/tcp/32457/p2p/12D3KooWPmL4jXD2y1sgzyyYc36XUoNw1rmLnsg5woPF24vabEVR"
  ]
}
```
**Obs:** estuaryId can also be called **contentID** or **contID**

Now that we have the estuaryId (which is **10** in this example), we can add **file1.txt** to a collection that we specify with a uuid, as before. 
```
curl -X POST https://api.estuary.tech/collections/add-content -d '{ "contents": [10], "cids": [], "coluuid": "28d923b5-2561-43ee-8ab3-fb42088666f2" }' -H "Content-Type: application/json" -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY"
```

#### /content/add-ipfs
We can also use the **/content/add-ipfs** endpoint to add CIDs to estuary and also put them in a collection at the same API call. Using this endpoint we must specify the content by CID (in the **root** field):
```
curl -X POST https://api.estuary.tech/content/add-ipfs -d '{ "name": "file1.txt", "root": "QmS8dypUY34t3UF7Xd98KhuxqQ8F45WckJCGkdhNnwgvM4", "coluuid": "28d923b5-2561-43ee-8ab3-fb42088666f2", "collectionPath": "/dir1/file1.txt" }' -H "Content-Type: application/json" -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY"
```

Notice we also specified a new field **collectionPath**. In the next section we will explore another feature of collections: collection directory paths.

### Collection directory paths
Besides having several collections to organize data, users can also further organize content inside collections using directory paths. Directory paths are filesystem-like paths such as **/this/is/a/path/to/a/file**. To create a path, we just need to put a file inside it using the **collectionPath** field. Let's take the example used in the last section:
```
curl -X POST https://api.estuary.tech/content/add-ipfs -d '{ "name": "file1.txt", "root": "QmS8dypUY34t3UF7Xd98KhuxqQ8F45WckJCGkdhNnwgvM4", "coluuid": "28d923b5-2561-43ee-8ab3-fb42088666f2", "collectionPath": "/dir1/file1.txt" }' -H "Content-Type: application/json" -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY"
```
Since the **collectionPath** for **file1.txt** is **/dir1/file1.txt**, the path **/dir1/** inside that collection gets created, and we can list only the contents of that path:
```
curl -X GET -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" "https://api.estuary.tech/collections/fs/list?col=28d923b5-2561-43ee-8ab3-fb42088666f2&dir=/dir1"
[
  {
    "name": "file1.txt",
    "dir": false,
    "size": 20,
    "contId": 11,
    "cid": "QmS8dypUY34t3UF7Xd98KhuxqQ8F45WckJCGkdhNnwgvM4"
  }
]
```

### Listing all the contents of a collections
When a piece of content doesn't have a directory path in a collection, it is impossible to list it using the **/collections/fs/list** endpoint since that requires a **dir** to be specified and, even if it isn't, it defaults to the **/** path. In order to list all the contents of a collection, even the ones that don't have a directory path set, we can use **/collections/content/:collection-uuid**:

```
curl -X GET -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" https://api.estuary.tech/collections/content/28d923b5-2561-43ee-8ab3-fb42088666f2
```

### Deleting a collection
In case you want to delete a previously created collection, you can do so with the following curl:

```
curl -X DELETE  https://api.estuary.tech/collections/<uuid> -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY"
```

where the query parameter **uuid** is the uuid of the collection you are trying to delete.



























