const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = ''; 

module.exports = {
  networks: {
    bscTestnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://data-seed-prebsc-1-s1.binance.org:8545'),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    polygonMumbai: {
      provider: () => new HDWalletProvider(mnemonic, 'https://rpc-mumbai.maticvigil.com'),
      network_id: 80001,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};
