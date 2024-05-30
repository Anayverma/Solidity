const { task } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");

// @type import('hardhat/config').HardhatUserConfig 
// module.exports = {
//   solidity: "0.8.24",
// };

// const { ethers } = require('hardhat')
// async function getBalance(address) {
//   const balance = await ethers.provider.getBalance(address)
//   return hre.ethers.utils.formatEther(balance)
// }

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    const address = await account.getAddress();
    console.log(account);

    // Fetch the balance using the provider
    // const balance = await hre.ethers.provider.getBalance(address);
    const balance = await ethers.provider.getBalance(address)

    // Format the balance from Wei to Ether
    // console.log(hre.ethers.utils.formatEther(balance));

    // break; // Remove this if you want to print all accounts
  }
});



module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "",
      accounts: [""]
    }
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}
