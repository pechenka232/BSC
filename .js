const SimpleToken = artifacts.require("PToken");

module.exports = function(deployer) {
    deployer.deploy(SimpleToken, 1000000); 
};
