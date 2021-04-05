// Load libraries and helpers
const fs = require("fs")
const client = require("./client")
const avalanche = require("avalanche")
const binTools = avalanche.BinTools.getInstance()

// Path where we keep the credentials for the pathway
const credentialsPath = "./credentials"

async function main() {
  // 1. Init keychain
  // 2. Prepare transaction
  // 3. Send transaction to network
}

main().catch((err) => {
  console.log("We have encountered an error!")
  console.error(err)
})