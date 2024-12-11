require("@nomicfoundation/hardhat-toolbox");
require("hardhat-preprocessor");
const fs = require("fs");

function getRemappings() {
  const remappingsFile = fs.readFileSync("remappings.txt", "utf8");
  return remappingsFile
    .split("\n")
    .filter(Boolean)
    .map((line) => line.trim().split("="));
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  preprocess: {
    eachLine: (hre) => ({
      transform: (line) => {
        let result = line;
        for (const [from, to] of getRemappings()) {
          result = result.replace(from, to);
        }
        return result;
      },
    }),
  },
};
