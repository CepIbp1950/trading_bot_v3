require("dotenv").config()
require("@nomicfoundation/hardhat-toolbox")

const privateKey = process.env.PRIVATE_KEY || ""

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      forking: {
        url: `https://arb-mainnet.g.alchemy.com/v2/${bHz1Ue2GPYnyY5iSxRTJqr9ztIlUj9jB}`,
        blockNumber: 223528000
      },
    }
  }
};
