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