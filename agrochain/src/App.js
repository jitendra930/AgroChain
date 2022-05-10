import logo from './logo.svg';
import './App.css';

import Navigation from "./Components/Navigation";
import { Footer } from "./Components/Footer";
import { NFT } from "./Components/NFT";
import { NFTDetails } from "./Components/NFTDetails";


function App() {
  return (
    <>
          
          <Navigation title="AGRO CHAIN" />
          <NFTDetails/>
          <Footer />
        
    </>
  );
}

export default App;
