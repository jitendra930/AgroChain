require("@nomiclabs/hardhat-waffle");

const INFURA_URL = '';
const PRIVATE_KEY = '';

module.exports = {
    solidity: "0.8.4",
    networks: {
        goerli: {
            url: INFURA_URL,
            accounts: [`0x${PRIVATE_KEY}`]
        }
    },
    paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
    },
};
