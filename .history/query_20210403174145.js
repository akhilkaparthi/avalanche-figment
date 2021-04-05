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
  // Fetch validator subnets
console.log("Fetching validator subnets...")
const subnets = await pChain.getSubnets()
console.log("Found subnets:", subnets.length)
console.log("Subnet example:", subnets[0])

// Fetch information about Platform chain
console.log("Fetching validators...")
const { validators } = await pChain.getCurrentValidators()
console.log("Found validators:", validators.length)
console.log("Example validator:", validators[0])
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