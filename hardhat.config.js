/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY, TESTNET_API_URL, TESTNET_PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.2",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    rinkeby: {
       url: TESTNET_API_URL,
       accounts: [`0x${TESTNET_PRIVATE_KEY}`]
    },
    mainnet: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
   },
   },
   mocha: {
      timeout: 30000
    }
};