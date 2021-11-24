const Web3 = require("web3");
const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json")
const contractAddress = "0x74da76e77b6870bf8399252921a85fc6a1284960";

require("dotenv").config();
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const provider = new Web3.providers.HttpProvider(API_URL);
web3 = new Web3(provider);

const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function mintNFT(tokenURI) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest')

    const tx = {
        from: PUBLIC_KEY,
        to: contractAddress,
        nonce: nonce,
        gas: 500000,
        data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
    }

    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
    signPromise.then((signedTx) => {
        web3.eth.sendSignedTransaction(
            signedTx.rawTransaction,
            function (err, hash) {
                if (!err) {
                    console.log(
                        "The transaction hash is:",
                        hash,
                        "\nCheck Infura Mempool to view the status of your transaction!"
                    )
                } else {
                    console.log(
                        "Something went wrong sumbitting your transaction:",
                        err
                    )
                }
            })
    }).catch((err) => {
        console.log("Promise failed:", err)
    })
};

mintNFT(
    "https://gateway.pinata.cloud/ipfs/QmNSTa26uGaP4W33iAGezjsC3dxH6PHRpKeyehLX6reubC/goofy-hotchicken.json"
)


