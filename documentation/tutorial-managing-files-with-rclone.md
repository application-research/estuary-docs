# Managing files with Rclone

### What is rclone?

Rclone *("rsync for cloud storage")* is a **command-line program** to sync files and directories to and from different cloud storage providers. According to the official [rclone website](https://rclone.org/), there are over 40 cloud storage providers that support rclone. Estuary's rclone support gives developers and users the ability to easily manage their data in either centralized or decentralized manner among various storage providers.

In this tutorial, we will walk you through the process of using rclone to manage your files across several storage options, including local storage, Estuary and Google Drive. We will cover the following：

+ Run a Estuary local node
+ Install and setup rclone
+ Manage files between local computer and Estuary
+ Manage files between Google Drive and Estuary

**Prerequisites**:

+ go (1.15 or higher)
+ hwloc
+ opencl
+ git

### Step 1: Run Estuary local node

For this tutorial, we will run an Estuary local node to store files to IPFS and Filecoin network. If you do not wish to run your own node, you can also use the Estuary public endpoint **https://api.estuary.tech**; you'll need to [request an Estuary invite and get an API token](https://docs.estuary.tech/tutorial-get-an-api-key).

For more detailed instructions on running a local Estuary node, see [Getting Started Developing With Estuary](https://github.com/application-research/estuary/blob/master/DEVELOPMENT.md).

+ **Download Estuary and build it locally**

```
git clone https://github.com/application-research/estuary.git
cd estuary
make clean all
```

If the build is successful, you can move on to the next step.

+ **Start Estuary node**

This step will generate an authorization token for you. It is very important to save this auth token; you will need it to access your files via your Estuary local node.

```shell
./estuary setup
<auth token> #Record this token since you will need it later

./estuary --datadir=/path/to/storage --logging
Wallet address is:  <your_estuary_address_printed_here>
2022-02-25T15:37:36.633+0800	INFO	dt-impl	impl/impl.go:145	start data-transfer module
/ip4/192.168.1.5/tcp/6744/p2p/12D3KooWG5nrNicWGCHcrBYrLuhds6MyzP7EngwyjuhHK9PTKu7f
/ip4/127.0.0.1/tcp/6744/p2p/12D3KooWG5nrNicWGCHcrBYrLuhds6MyzP7EngwyjuhHK9PTKu7f
2022-02-25T15:37:36.635+0800	INFO	estuary	estuary/replication.go:718	queueing all content for checking: 0

   ____    __
  / __/___/ /  ___
 / _// __/ _ \/ _ \
/___/\__/_//_/\___/ v4.6.1
High performance, minimalist Go web framework
https://echo.labstack.com
____________________________________O/_______
                                    O\
⇨ http server started on [::]:3004
```

You can use the following command to check if Estuary node started successfully:

```shell
curl -X GET http://localhost:3004/public/stats

#If estuary node is running, you should see the following data.
{"totalStorage":0,"totalFiles":0,"dealsOnChain":0}
```

### Step 2: Build and configure rclone

**NOTE**: You will need to build and install rclone from the `application-research` fork, rather than rclone's main install processes.

- **Install rclone from source.**

```shell
#Download source and switch to estuary branch.
git clone https://github.com/application-research/rclone.git
cd rclone && git checkout estuary
go build

#Check if rclone is correctly installed
./rclone version
rclone v1.58.0-DEV
- os/version: darwin 12.2.1 (64 bit)
...
```

In this tutorial, we will use some of the rclone commands. Let's get familiar with them first:

+ **rclone mkdir remote:path** - make the path if it doesn't already exist
+ **rclone lsd remote:path** - list all the directories in remote:path 
+ **rclone ls remote:path** - list all the objects in the path/directory
+ **rclone copy source:path dest:path** - copy files from source to dest
+ **rclone sync source:path dest:path** - sync files from source to dest to ensure source and dest are identical

To learn more about rclone commands, see [Rclone Commands Instruction](https://rclone.org/commands/) or use rclone's help menu:

```
./rclone help
```

+ **Configure rclone for Estuary access**

In order to let rclone on your local machine access remote storage providers like Estuary and Google Drive, you will need to first configure rclone allow access from the command-line.

In the terminal, run the following command to begin the interactive setup process:

```shell
./rclone config

#This will guide you through an interactive setup process
e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> n
name> estuaryLocal #Name of remote access
Storage> estuary #Type estuary or use the number from the list.
Estuary API token:
token> <Auth Token generated in the first step>
Enter a string value. Press Enter for the default (https://api.estuary.tech).
url> http://localhost:3004
```

After you finish, you can verify by checking the rclone configuration.

```shell
./rclone config
Current remotes:
Name                 Type
====                 ====
estuaryLocal         estuary
```

### Step 3: Sync files between Estuary and local storage

Once you finish configuring rclone to allow Estuary access, let's try to managing your files between Estuary and local storage. Note that Estuary uses [collections](https://docs.estuary.tech/tutorial-working-with-collections) to organize sets of files and folders.

There are various ways to move your files from local storage to Estuary.

+ Copy or move files one by one
+ Sync the whole folder from local storage to Estuary
+ Bi-sync folder between local storage and Estuary

Next, we will explore a few of these methods.

+ **Create a new folder which will be treated as collection in Estuary**

```shell
./rclone mkdir estuaryLocal:testLocal -v

#List the directories under estuaryLocal
./rclone lsd estuaryLocal:
 -1 2022-02-25 17:04:43        -1 testLocal
```

+ **Copy one file to Estuary**

```shell
./rclone copy /path-to-your-file/estuary-file2.txt estuaryLocal:testLocal

#Check that the file is copied to Estuary
./rclone ls estuaryLocal:testLocal
     1682 estuary-file2.txt
```

+ **Sync a local folder to Estuary**

```shell
./rclone sync /path-to-your-folder/ estuary:/longfei

#List all the files in your remote Estuary directory
./rclone ls estuaryLocal:testLocal
     1682 estuary-file2.txt
     1674 test1.txt
     1674 test2.txt
     1674 test3.txt
```

### Step 4: Sync files between Estuary and Google Drive

In this step, we will demonstrate how to sync files between Estuary and Google Drive. Note that rclone supports over [40 different storage providers](https://rclone.org/#providers), so you can use the same steps to sync between Estuary and other storage providers of your choice.

+ **Configure rclone for Google Drive**

Moving files between Estuary and Google Drive is as simple as moving files from local to Estuary. But first, you will need to configure rclone to access your Google Drive. You can configure Google Drive following this [tutorial](https://rclone.org/drive/).

Once you finish configuring Google Drive, you will be able to see it in the list of remotes.

```
./rclone config
Current remotes:
Name                 Type
====                 ====
estuaryLocal         estuary
ggDrive              drive
```

Now you will be able to check folders and files in your Google Drive directly using rclone.

```shell
#This command will list all the folders
./rclone lsd ggDrive:
   -1 2022-02-25 11:30:51        -1 Filecoin-Slides
   -1 2022-02-25 11:31:01        -1 Filecoin-Workshops
   -1 2022-02-25 11:36:13        -1 estuaryTest

#This command will list all the files in a folder
./rclone ls ggDrive:estuaryTest
   158798 Estuary-addContent.png
   138349 social-profile.jpeg
      175 rclone-lf.txt
```

+ **Create an Estuary collection for your Google Drive files**

Run the following command to create a directory in your Estuary node, which will be created as a collection in Estuary. 

```shell
./rclone mkdir estuaryLocal:ggDrive

#List all the folders(collections) in estuaryLocal
./rclone lsd estuaryLocal:
  -1 2022-02-28 10:44:51        -1 ggDrive
  -1 2022-02-28 09:41:08        -1 testLocal
```

+ **Sync a folder from Google Drive to Estuary**

In this step, we will sync an entire folder (and its contents) from Google Drive to Estuary. This will copy all the files to your Estuary collection. In this example, our folder is named *ggDrive:/estuaryTest*.

```shell
./rclone sync ggDrive:estuaryTest estuaryLocal:ggDrive -v
Transferred:   	  290.354 KiB / 290.354 KiB, 100%, 92.451 KiB/s, ETA 0s
Transferred:            2 / 2, 100%
Elapsed time:         5.1s

#Verify that there are 2 files moved to Estuary
./rclone ls estuaryLocal:ggDrive
   158798 Estuary-addContent.png
      175 rclone-lf.txt
```

+ **Move single file**

You can also just copy a single file from Google Drive to Estuary with the copy command.

```shell
./rclone copy ggDrive:Filecoin-Workshops/Build-on-Filecoin.pptx estuaryLocal:ggDrive

#Verify that Build-on-Filecoin.pptx is moved successfully
./rclone ls estuaryLocal:ggDrive
 13575031 Build-on-Filecoin.pptx
   158798 Estuary-addContent.png
      175 rclone-lf.txt
```

### Step 5: Verify your stored files

In addition to checking the list of files in your Estuary node using rclone commands, you can also verify whether or not those files are actually moved to Estuary by directly querying via the Estuary API. First, let's check if the *ggDrive* collection is created in Estuary.

```shell
curl -X GET http://localhost:3004/collections/list -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" -H "Accept: application/json" -s | jq .

#Two collections were added to Estuary from previous steps
[
  {"createdAt": "2022-02-28T09:41:08.015981+08:00",
    "uuid": "uuid-for-testLocal",
    "name": "testLocal",
    "description": "",
    "userId": 1  },
  {"createdAt": "2022-02-28T10:44:51.111857+08:00",
    "uuid": "uuid-for-ggDrive",
    "name": "ggDrive",
    "description": "",
    "userId": 1 }
]
```

This output shows that the *ggDrive* collection was created successfully, and is being listed with its details. You can use a collection's *uuid* to query files within that collection.

```shell
curl -X GET http://localhost:3004/collections/content/uuid-for-ggDrive -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" -H "Accept: application/json" -s | jq .

[
  {
    "id": 21,
    "updatedAt": "2022-02-28T10:51:19.29752+08:00",
    "cid": "bafkreiazxt6iegs6nwkfa73jdywbdvb3dxb62j4ix3pstmetqqhztekd7y",
    "name": "rclone-lf.txt",
    ...},
  {
    "id": 22,
    "updatedAt": "2022-02-28T10:51:20.004562+08:00",
    "cid": "bafkreifkhy32wd3qowprao4632iqa55nifxmc44mgj4hs7xqxqutirjh4q",
    "name": "Estuary-addContent.png",
    ...},
  {
    "id": 24,
    "updatedAt": "2022-02-28T11:39:26.400316+08:00",
    "cid": "bafybeihxhjivebdivakj336dul5dvijkvzivbd7ornw52bes46ygcbrt7i",
    "name": "Build-on-Filecoin.pptx",
    ...}
]
```

Once Estuary stores your files on IPFS and Filecoin, corresponding CIDs will be generated for each file. You will be able to access those files via IPFS-compatible browsers as well as [IPFS gateways](https://docs.ipfs.io/concepts/ipfs-gateway/). Use the following command to get the addresses for your files.

```shell
#Get the list of CID
./rclone backend lscid estuaryLocal:ggDrive
 13575031 Feb 28 11:39:26  bafkreifkhy32wd3qowprao4632iqa55nifxmc44mgj4hs7xqxqutirjh4q Estuary-addContent.png

#Get the list of URL for IPFS-compatible browser
./rclone backend lscid estuaryLocal:ggDrive -o format=url
 13575031 Feb 28 11:39:26  ipfs://bafkreifkhy32wd3qowprao4632iqa55nifxmc44mgj4hs7xqxqutirjh4q Estuary-addContent.png
 
#Get the list of IPFS gateway URL
 ./rclone backend lscid estuaryLocal:ggDrive -o format=gateway
  158798 Feb 28 10:51:20  https://dweb.link/ipfs/bafkreifkhy32wd3qowprao4632iqa55nifxmc44mgj4hs7xqxqutirjh4q Estuary-addContent.png
```

### What's Next?

Rclone and Estuary are both very useful and powerful tools. Together, they provide many features and large potential for fast, convenient cloud storage file management. Now that you have a sense of how to use rclone to manage files between Estuary and other storage providers, feel free to explore more features such as storage disks mounting, server backup, offline download, and more.

For questions or additional support, join the `#ecosystem-dev` channel in [Filecoin Slack](http://filecoin.io/slack).
