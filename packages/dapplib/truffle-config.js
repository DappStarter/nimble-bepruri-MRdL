require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan raise noise atom install nation equal giant'; 
let testAccounts = [
"0xa76fefdb49678c321b6933fac49c32a593eb8d2664ed678aa4e52935b5a8532a",
"0xd060611f8fa4e58440109e89c67c30b136f8fd4302e8c15cc4ead60b32c04556",
"0xcb899a5722cdbaa233ca648cd66f2f23370d2a45c4d7244443e26158685cef65",
"0xd21aef1fb99d7b7998462c486b43f52e1d78c76fde43eb4ed58473a032d4c410",
"0x05a63928c998fd845d16f4f746fd54e539d6379c95356de77bfc726bfbc557e0",
"0x5da49ec5dc31dc3ada36409ebaba380cad1abf9c7632678f8214b1fc09310d4b",
"0xe60e44e5bd26039c1ae2d390d0f84c68f079e8c59daed05374a44290ae082b86",
"0xa96990bff7419b3824290ef697d1c7ee0b73e1f390122c635d6527b7a69ee7fb",
"0xcb7e1a49735b21f67f7a5fc9849e63d0ffa77d1c660437f2f2ff60cfd7a00782",
"0x0d9f16b7fc9791d38e9602c984c09f0bdbf2872eea37eae343e37b67cc154022"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

