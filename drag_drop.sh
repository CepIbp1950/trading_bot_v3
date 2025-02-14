#!/bin/bash
# filepath: ~/drag_drop.sh

# Check if a file was dragged and dropped
if [ -z "$1" ]; then
    echo "Please drag and drop a zip file onto this script."
    exit 1
fi

# Get the file path
ZIP_FILE="$1"

# Check if the file exists and is a zip file
if [ ! -f "$ZIP_FILE" ] || [[ "$ZIP_FILE" != *.zip ]]; then
    echo "The file is not a valid zip file."
    exit 1
fi

# Unzip the file
unzip "$ZIP_FILE" -d "$(dirname "$ZIP_FILE")"
echo "Unzipped $ZIP_FILE successfully."

# Run npm install
npm install
echo "npm install completed."

# Run npx hardhat node
npx hardhat node &
echo "npx hardhat node started."

# Wait for hardhat node to start
sleep 5

# Run scripts/deploy.js --network localhost
npx hardhat run scripts/deploy.js --network localhost
echo "Deployment completed."
