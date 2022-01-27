const Web3 = require("web3");
const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

require("dotenv").config();
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const contractAddress = process.env.CONTRACT; 

const provider = new Web3.providers.HttpProvider(API_URL);
web3 = new Web3(provider);

const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function mintNFT() {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest')

    const gasPrice = await web3.eth.getGasPrice()
    console.log('gasPrice:', web3.utils.fromWei(gasPrice, 'gwei'), 'gwei')
    
    const txGasPrice = parseInt(gasPrice*1.1)
    console.log('Transaction gasPrice:', web3.utils.fromWei(String(txGasPrice), 'gwei'), 'gwei')

    /**
    const tx = {
        from: PUBLIC_KEY,
        to: contractAddress,
        nonce: nonce,
        gas: 200000,
        gasPrice: txGasPrice,
        data: nftContract.methods.mintNFT(3, '').encodeABI()
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
    */
};

mintNFT()
