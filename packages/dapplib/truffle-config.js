require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food bitter razor oval common coral light army genuine'; 
let testAccounts = [
"0xeacfbb7626d76011c6177584ef93c714fc2e226d63d9d45ba885058a753634a3",
"0x249257155b6803b9c454847188ccfbda407a63ab03cd2d9831a37a0bd8e871f4",
"0xdd1f1c9186c9979195514d9ddaf38e9eb9dd3cb2a2e7ef8ba406060233d99b7b",
"0xe9df8914a887d198f02f2ade87f200aa8042d479c82966e3e6e439c88b3f5a65",
"0xc4559f34327918fdf19c3dabb8ff295f1f85b458beba90654f8fc9282ca6475a",
"0xc230dd3624ff7658de61958b21362bcc3c41a5c170b66df65655989ba0af4461",
"0xba2a437d35d5365b301d622b32f2d1dc2fe0801c344d54e3c6e847faced1ffe6",
"0xa2d18f74cd207d7e0306fedf2192302f6531a6e315e6148a9fe9bf4e0981ac1d",
"0xcd45122e9f9351771a6f40e36420852e248b76f95c2b9130907c0c1ce60aa362",
"0xa21694f5a25dea8c86a45bb061fc5d607d66215e0d2dc1b1d039915f1ea499a2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

