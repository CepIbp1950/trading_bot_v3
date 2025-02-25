require('dotenv').config();
const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(`https://arb-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`);
const tokenAddress = "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1";
const tokenABI = [
  "function symbol() view returns (string)"
];

async function checkTokenSymbol() {
  const tokenContract = new ethers.Contract(tokenAddress, tokenABI, provider);
  try {
    const symbol = await tokenContract.symbol();
    console.log(`Token symbol: ${symbol}`);
  } catch (error) {
    console.error("Error: The contract does not implement the symbol function or there was an issue with the call.");
    console.error("Error details:", error);
  }
}

checkTokenSymbol();
