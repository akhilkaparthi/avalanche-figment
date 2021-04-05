// Load libraries and helpers
const fs = require("fs")
const avalanche = require("avalanche")
const client = require("./client")
const ethUtil = require("ethereumjs-util")
const binTools = avalanche.BinTools.getInstance()

// Path where we keep the credentials for the pathway
const credentialsPath = "./credentials"

async function main() {
  // 1. Init keychain
  // 2. Init Eth key for the C-Chain
  // 3. Perform transfer
}

async function createExport(client, xChain, xKeychain, cKeychain) {
  // Will fill later
}

async function createImport(client, cChain, cKeychain, address) {
  // Will fill later
}

main().catch((err) => {
  console.log("We have encountered an error!")
  console.error(err)
})