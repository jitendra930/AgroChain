<h1 align="center">AgroChain</h1>

<h3> Problem Statement</h3>

The United States Environmental Protection Agency (EPA) estimates that 10% of CO2 is emitted by the Agri sector. On one hand, Agri companies have sustainable products and services to offer to the growers. On the other hand, without proper economic incentives, farmers are reluctant to adopt sustainable practices. Centralized platform business models have so far not succeeded in creating economic value for the farmers, even while the demand for a voluntary carbon market is increasing. What technologies and business models can enable financially incentivize farmers for implementing climate-smart practices? What are the ways the buyer has proof of authenticity? In what ways the participants including investors can derive economic value?
	
<strong>ArgoChain </strong>is an NFT application Based on KardiaChain Blockchain written in Solidity Smart Contract, and using the power of React Frontend, and ether.js to interact with the Smart Contract present in the KardiaChain Blockchain, a user can Upload & Mint (In IPFs), buy and Sell NFT, in the ArgoChain NFT marketplace.

It provides a way for farmers to sell carbon credits in the form of NFT to industrial buyers who needs to buy carbon credits in order to achieve sustainability goals, thus giving farmers money to invest in more sustainable farming practices, and a win-win situation for all, the Air Quality verification is done using IOT devices, thus acting as a verification mechanism to ensure, that money is invested by farmers to adopt more sustainable farming methods.


## Features
- Mint NFT.
- Sell NFT in Marketplace.
- Buy NFT from Marketplace.
- User Dashboard to view all the NFT Minted, sold, and Purchased.


### 1. Clone/Download the Repository

```
git clone https://github.com/IntelegixLabs/AgroChain
```

### 2. Run the .NET Backend Application (fetches the historical pollution data from a public API):

```
cd AgroChain/agrochain/src/backend/Pollution.API
dotnet clean
dotnet build Pollution.API.sln
dotnet watch run --Pollution.API
```

### 3. Install Node/React Dependencies:

```
cd AgroChain/agrochain
npm install
```

### 4. Boot up local Hardhat development blockchain

```
npx hardhat node
```

### 5. Connect development blockchain accounts to Metamask
- Copy private key of the addresses and import to Metamask
- Connect your metamask to hardhat blockchain, network 127.0.0.1:8545.
- If you have not added hardhat to the list of networks on your metamask, open up a browser, click the fox icon, then click the top center dropdown button that lists all the available networks then click add networks. A form should pop up. For the "Network Name" field enter "Hardhat". For the "New RPC URL" field enter "http://127.0.0.1:8545". For the chain ID enter "31337". Then click save. 

<p align="center">
  <img src="DATA/metamask_config.png" />
</p>


### 6(a). Migrate Smart Contracts
```
npx hardhat run src/backend/scripts/deploy.js --network localhost
```

### 6(b). Migrate Smart Contracts (Rinkeby Network)
```
npx hardhat run src/backend/scripts/deploy.js --network rinkeby
```

### 7. Run Tests
```
npx hardhat test
```

### 8. Launch Frontend
```
npm run start
```


### 9. Project Architecture

<p align="center">
  <img src="DATA/0.png" width="450" height="650" />
</p>

### 10. Application Screenshots

<br />
<p align="center">
  <img src="DATA/screenshots/0.png" width="400"/>
  <img src="DATA/screenshots/1.png" width="400"/>
  <img src="DATA/screenshots/2.png" width="400"/>
  <img src="DATA/screenshots/3.png" width="400"/>
  <img src="DATA/screenshots/4.png" width="400"/>
  <img src="DATA/screenshots/5.png" width="400"/>
  <img src="DATA/screenshots/6.png" width="400"/>
  <img src="DATA/screenshots/7.png" width="400"/>
  <img src="DATA/screenshots/8.png" width="400"/>
</p>
<br />





