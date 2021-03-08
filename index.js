const ethers = require('ethers')

let wallet = new ethers.Wallet.createRandom()

let address = wallet.address
console.log("address:", address)

let mnemonic = wallet.mnemonic
console.log("mnemonic:", mnemonic)

let privateKey = wallet.privateKey
console.log("privateKey:", privateKey)
