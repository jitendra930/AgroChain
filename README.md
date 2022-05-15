# AgroChain

### 1. Clone/Download the Repository

```
$ git clone https://github.com/IntelegixLabs/AgroChain
```

### 2. Install Dependencies:

```
$ cd AgroChain/agrochain
$ npm install
```

### 3. Boot up local development blockchain

```
$ npx hardhat node
```

### 4. Connect development blockchain accounts to Metamask
- Copy private key of the addresses and import to Metamask
- Connect your metamask to hardhat blockchain, network 127.0.0.1:8545.
- If you have not added hardhat to the list of networks on your metamask, open up a browser, click the fox icon, then click the top center dropdown button that lists all the available networks then click add networks. A form should pop up. For the "Network Name" field enter "Hardhat". For the "New RPC URL" field enter "http://127.0.0.1:8545". For the chain ID enter "31337". Then click save.  


### 5. Migrate Smart Contracts
`npx hardhat run src/backend/scripts/deploy.js --network localhost`

### 6. Run Tests
`$ npx hardhat test`

### 7. Launch Frontend
`$ npm run start`


### 8. Project Architecture

<p align="center">
  <img src="DATA/0.png" width="450" height="650" />
</p>

### 9. Application Screenshots

<br />
<p align="center">
  <img src="DATA/1.png" width="400"/>
  <img src="DATA/2.png" width="400"/>
  <img src="DATA/3.png" width="400"/>
  <img src="DATA/4.png" width="400"/>
  <img src="DATA/5.png" width="400"/>	
</p>
<br />





