import { useEffect, useState } from 'react'
import {
    Routes,
    Route
} from "react-router-dom";

import MarketplaceAbi from './frontend/contractsData/Marketplace.json'
import MarketplaceAddress from './frontend/contractsData/Marketplace-address.json'
import NFTAbi from './frontend/contractsData/NFT.json'
import NFTAddress from './frontend/contractsData/NFT-address.json'
import { ethers } from "ethers"

import Navigation from "./Components/Navigation";
import { NFT } from "./Components/NFT";
import { NFTDetails } from "./Components/NFTDetails";
import Profile from "./Components/Profile";
import { Register } from "./Components/Register";
import { Loading } from "./Components/Loading";
import { Front } from "./Components/Front";

import './App.css';

/*const RpcHttpUrl = "https://mainnet.infura.io/v3/9f37c36eaea34b42a0bce7936c691b67";*/

function App() {
    const [loading, setLoading] = useState(true)
    const [account, setAccount] = useState(null)
    const [nft, setNFT] = useState({})
    const [marketplace, setMarketplace] = useState({})
    const [balance, SetBalance] = useState(null)

    useEffect(() => {
        if (!!localStorage.getItem('account')) {
            web3Handler();
        }
    }, []);

    useEffect(() => {
        console.log(account);
        if (!!account) {
            localStorage.setItem('account', account);
        }
    }, [account]);

    // MetaMask Login/Connect
    const web3Handler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0])
        // Get provider from Metamask
        /*const provider = new ethers.providers.JsonRpcProvider(RpcHttpUrl)*/
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        // Set signer
        const signer = provider.getSigner()
        const balance = await provider.getBalance(accounts[0])
        const balances = ethers.utils.formatEther(balance);
        SetBalance(balances)
        console.log(balances);


        window.ethereum.on('chainChanged', (chainId) => {
            window.location.reload();
        })

        window.ethereum.on('accountsChanged', async function (accounts) {
            setAccount(accounts[0])
            await web3Handler()
        })

        loadContracts(signer)
    }
    const loadContracts = async (signer) => {
        // Get deployed copies of contracts
        const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer)
        setMarketplace(marketplace)
        const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
        setNFT(nft)
        setLoading(false)
    }

    return (
        <>
            <Navigation web3Handler={web3Handler} account={account} />
            <Routes>
                <Route path="/" element={<Loading />} />
                <Route path="/front" element={<Front />} />
                <Route path="/profile" element={<Profile marketplace={marketplace} nft={nft} account={account} balance={balance} />} />
                <Route path="/register" element={<Register marketplace={marketplace} nft={nft} account={account} />} />
                <Route path="nft" element={<NFT marketplace={marketplace} nft={nft} account={account} balance={balance} />} />
                <Route path="nft-details" element={<NFTDetails marketplace={marketplace} />} />
                <Route path="*" element={<Loading />} />
            </Routes>
        </>
    );
}

export default App;
