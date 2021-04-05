// Load Avalanche client helper
const client = require("./client")

async function main() {
  console.log("========== Info ==========")
  await queryInfo(client.Info())

  console.log("========== Platform Chain Info ==========")
  await queryPChain(client.PChain())

  console.log("========== Exchange Chain Info ==========")
  await queryXChain(client.XChain())
}

async function queryInfo(info) {
  // 1.Query info
  console.log("- X:", await info.getBlockchainID("X"), await info.isBootstrapped("X"))
console.log("- P:", await info.getBlockchainID("P"), await info.isBootstrapped("P"))
console.log("- C:", await info.getBlockchainID("C"), await info.isBootstrapped("C"))
console.log("- Fees:", await info.getTxFee())
}

async function queryPChain(pChain) {
  // 2. Query P-Chain
}

async function queryXChain(xChain) {
  // 3. Query X-Chain
}

main().catch((err) => {
  console.log("We have encountered an error!")
  console.error(err)
})