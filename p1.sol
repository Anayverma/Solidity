// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

contract Example {
    int public val;
    string s;

    constructor(int initialVal, string memory ss) {
        val = initialVal;
        s = ss;
    }

    function setVal(int newVal, string memory ss) public {
        val = newVal;
        s = ss;
    }

    function setVal_int(int i) public {
        val = i;
    }

    function setVal_int(string memory ss) public {
        s = ss;
    }

    function getVal_int() public view returns (int) {
        return val;
    }

    function getVal_String() public view returns (string memory) {
        return s;
    }

    function exOfPure(int i) public pure returns (int) {
        return (i * 2);
    }
}
