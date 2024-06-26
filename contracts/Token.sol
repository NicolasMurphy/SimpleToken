// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor() ERC20("SampleToken", "STK") {
        _mint(msg.sender, 1000 * (10 ** uint256(decimals())));
    }
}
