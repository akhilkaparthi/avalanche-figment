// Load libraries and helpers
const fs = require("fs")
const client = require("./client")
const avalanche = require("avalanche")
const binTools = avalanche.BinTools.getInstance()

// Path where we keep the credentials for the pathway
const credentialsPath = "./credentials"

async function main() {
  // 1. Init keychain
  // Initialize chain components
const chain = client.XChain()
const keychain = chain.keyChain()

// Import X-chain key from the previously created file
const data = JSON.parse(fs.readFileSync(`${credentialsPath}/keypair.json`))
const key = keychain.importKey(data.privkey)
  // 2. Prepare transaction
  // Fetch UTXO (i.e unspent transaction outputs)
const address = key.getAddressString()
const { utxos } = await chain.getUTXOs(address)
// Prepare transaction details
const receiver = "X-fuji1j2zasjlkkvptegp6dpm222q6sn02k0rp9fj92d" // Pathway test receiver address
const amount = "50000000" // Total amount we're transferring = 0.05 AVAX
const asset = "AVAX" // Primary asset used for the transaction (Avalanche supports many)
  // 3. Send transaction to network
}

main().catch((err) => {
  console.log("We have encountered an error!")
  console.error(err)
})