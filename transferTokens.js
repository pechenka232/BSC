const Web3 = require('web3');

const bscProvider = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
const polygonProvider = new Web3('https://rpc-mumbai.maticvigil.com');

const tokenAddress = 'YOUR_TOKEN_ADDRESS'; 
const ABI = 'ABI'; 
const bscTokenContract = new bscProvider.eth.Contract(ABI, tokenAddress);
const polygonTokenContract = new polygonProvider.eth.Contract(ABI, tokenAddress);

async function transferTokens(amount) {
    const sender = 'BSC';  
    const recipient = 'POLYGON';  

    await bscTokenContract.methods.transfer(recipient, amount).send({ from: sender });
    console.log(`Transferred ${amount} tokens from BSC to Polygon.`);
}

transferTokens(Web3.utils.toWei('100', 'ether'));
