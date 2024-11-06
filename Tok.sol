// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Tok {
    string public name = "Token Name";
    string public symbol = "TKN";
    uint8 public decimals = 18;
    uint256 public totalSupply;
    
    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply * (10 ** uint256(decimals));
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Insufficient balance");
        require(_to != address(0), "Invalid address");
        
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        
        return true;
    }
}
