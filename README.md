# hardhat-ethers

Following an Hardhat and Ethers tutorial to deploy an NFT Smart Contract.

## Install Dependencies

```
npm install
```

## Compile and Deploy Smart Contract

You will need to provide 2 things in order to compile and deploy the smart contract

1. An API URL from a service providing connection to the ethereum network such as [Infura](https://infura.io/) or [Alchemy](https://www.alchemy.com/)
2. A Private Key from a Metamask account

Save those informations in a ```.env``` file in the root directory of the repo like this:

```
API_URL="API-URL-FOR-ETHEREUM-NETWORK-CONNECTION"
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
