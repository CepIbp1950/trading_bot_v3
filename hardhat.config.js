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
        url: `https://arb-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
        blockNumber: 223528000
      },
    }
  }
};
