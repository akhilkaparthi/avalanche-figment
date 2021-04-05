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
    // Initialize chain components
    const xChain = client.XChain()
    const xKeychain = xChain.keyChain()
    const cChain = client.CChain()
    const cKeychain = cChain.keyChain()

    // Import keypair from the previously created file
    const data = JSON.parse(fs.readFileSync(`${credentialsPath}/keypair.json`))
    xKeychain.importKey(data.privkey)
    cKeychain.importKey(data.privkey)
    // 2. Init Eth key for the C-Chain
    // Derive Eth-like address from the private key
  const keyBuff = binTools.cb58Decode(data.privkey.split('-')[1])
  const ethAddr = ethUtil.Address.fromPrivateKey(Buffer.from(keyBuff, "hex")).toString("hex")
  console.log("Derived Eth address:", ethAddr)
  
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