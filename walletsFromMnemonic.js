const { utils } = require('ethers');
const hdNode = utils.HDNode.fromMnemonic(process.env.MNEMONIC);

const len = 10;

for(let i = 0; i < len; i++)
{
    let account = hdNode.derivePath(`m/44'/60'/0'/0/${i}`);
    console.log(account.privateKey, account.address);
}
