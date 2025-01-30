const { ethers } = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  // Create a random wallet
  const wallet = ethers.Wallet.createRandom();

  console.log("Address:", wallet.address);
  console.log("Mnemonic:", wallet.mnemonic.phrase);
  console.log("Private Key:", wallet.privateKey);

  // Save the wallet data to a file
  const walletData = {
    address: wallet. address,
    mnemonic: wallet.mnemonic.phrase,
    privateKey: wallet.privateKey,
  };

  const filePath = path.join(__dirname, "..", "wallet.json");
  fs.writeFileSync(filePath, JSON.stringify(walletData, null, 2));

  console.log(`Wallet data saved to ${filePath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
