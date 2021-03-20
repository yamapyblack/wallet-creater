# wallet-creater

prepare
```
git clone git@github.com:yamapyblack/wallet-creater.git
cd wallet-creater
yarn install
```

create nimonic
```
node index.js
```

please set mnemonic
```
export MNEMONIC="hoge fuga ..."
```

please set number "walletsFromMnemonic.js"
```
const len = 10;
```

create addresses and privateKeys from nimonic
```
node walletsFromMnemonic.js
```
