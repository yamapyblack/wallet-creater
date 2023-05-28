const { Wallet } = require('ethers');
const readline = require('readline');

async function createKeystore(privateKey, password) {
  try {
    const wallet = new Wallet(privateKey);
    const keystore = await wallet.encrypt(password);

    console.log('Keystore JSON:');
    console.log(keystore);
  } catch (error) {
    console.error('Error creating keystore:', error);
  }
}

const privateKey = process.env.PRIVATE_KEY;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Please enter a password for the keystore: ', (password) => {
  createKeystore(privateKey, password);
  rl.close();
});
