// filepath: /Users/cpope/trading_bot_v3/hardhat.config.js
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

console.log("ALCHEMY_API_KEY:", process.env.ALCHEMY_API_KEY);
console.log("PRIVATE_KEY:", process.env.PRIVATE_KEY);

const privateKey = process.env.PRIVATE_KEY || "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      forking: {
        url: `https://arb-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
        blockNumber: 126673326// Update this to a valid block number
      },
    }
  }
};