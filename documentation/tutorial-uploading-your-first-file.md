# Uploading your file

Once you have an API key, you can use the code shown to upload a file to the Filecoin Network. There are a couple of caveats

- If your data's size is under **3.57 GB**, the Filecoin storage deals will not immediately execute after the upload. That means you have some time to upload more data if you would like.

- We pick 6 Filecoin miners for you, so you don't have to worry about knowing about any. If you are curious which Miners [https://estuary.tech](https://estuary.tech) works with, scroll to the bottom of the screen.

- If any miner fails to store your deal, we find another.

- Uploading data and Filecoin deals are free for now thanks to verified Filecoin deals from the [Filecoin Plus](https://docs.filecoin.io/store/filecoin-plus/) program.

Based on the size of the data you used for this step, the example to the right might take a while, but this is all thats involved with getting data onto the Filecoin Network through Estuary.

You can also use fetch in this example if you want.

```
fetch('https://api.estuary.tech/content/add', {
  method: "POST",
  headers: {
    Authorization: 'Bearer REPLACE_ME_WITH_API_KEY',
  },
  body: formData
})
```

### What is next?

Next, we will learn how to [get a list of the data you have uploaded](https://docs.estuary.tech/tutorial-listing-your-files).
