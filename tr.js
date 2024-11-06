module.exports = {
    networks: {
        bscTestnet: {
            provider: () => provider,
            network_id: 97,
            gas: 3000000,
            gasPrice: 20000000000
        },
        polygonTestnet: {
            provider: () => new HDWalletProvider('YOUR_MNEMONIC_PHRASE', 'https://rpc-mumbai.maticvigil.com'),
            network_id: 80001, // Testnet id for Polygon
            gas: 3000000,
            gasPrice: 8000000000 // 8 Gwei
        }
    },
    compilers: {
        solc: {
            version: "0.8.0"
        }
    }
};
