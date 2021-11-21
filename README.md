# hardhat-ethers

Following an Hardhat and Ethers tutorial to deploy an NFT Smart Contract.

## Install Dependencies

```
npm install
```

## Compile and Deploy Smart Contract

You will need to provide 2 things in order to compile and deploy the smart contract

1. An API URL from a service providing connection to the ethereum network such as [Infura](https://infura.io/) or [Alchemy](https://www.alchemy.com/)
2. A Metamask account with Public Key and Private Key.

Save those informations in a ```.env``` file in the root directory of the repo like this:

```
API_URL="API-URL-FOR-ETHEREUM-NETWORK-CONNECTION"
PUBLIC_KEY="YOUR-METAMASK-ADDRESS"
PRIVATE_KEY="YOUR-METAMASK-PRIVATE-KEY"
```

By default, we use the Rikenby network to deploy the contract. This is a testnet for developement purposes where ETH does not have any value. If you wish to use an other network, you can modify the hardhat.config.js in root directory.

Compile the contract:

```
npx hardhat compile
```

Deploy the contract:

```
npx hardhat run scripts/deploy.js --network rinkeby
```

You should now be inform with the address of your contract. Go to [Etherscan](https://rinkeby.etherscan.io/) to see it by yourself.

## Mint a NTF

Now that your contract is deployed on the Ethereum network, you can use it to mint your first NFT. To do so, you need to upload 2 things to IPFS decentralized database:

1. An image representing the NFT.
2. A JSON file containing metadata about the NFT including the CID of the image uploaded previously.

To do so, you can use the [Pinata](https://www.pinata.cloud/) IPFS tool. Here is an exemple of a ```ntf-metadata.json``` I uploaded:

```
{
    "description": "94 Rue Rachel E, Montréal, QC H2J 2J3",
    "image": "https://gateway.pinata.cloud/ipfs/QmX18re6S2PEXG51jBMuCqpXFBQt7kDVVcwoVKs1C5MAiH",
    "name": "Banquise"
  }
```

And if you go to the [image URL](https://gateway.pinata.cloud/ipfs/QmX18re6S2PEXG51jBMuCqpXFBQt7kDVVcwoVKs1C5MAiH) you will see an appetizing poutine :)

Finnaly, to mint your NFT, change the NFT URI in ```mint-nft.js``` included in this repo for the URI of your NFT Metadata file: 

```
mintNFT(
    "https://gateway.pinata.cloud/ipfs/QmXVZYAXiCMBVFM75TAV8NTBLv9p7HEJKcA2DUGwuNrMn9"
)
```

And run the scipt using Node:

```
node rune scripts/mint-nft.js
```

You should be inform with the address of the transaction. 




