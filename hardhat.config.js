
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    polygon_mainnet: {
      url: "https://polygon-mainnet.infura.io/v3/6eefd602294647b79197d2654f00ab6b", 
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY  // 👈 Asegúrate de que está bien escrito
  }
};