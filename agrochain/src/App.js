import logo from './logo.svg';
import './App.css';

import Navigation from "./Components/Navigation";
import { Footer } from "./Components/Footer";
import { NFT } from "./Components/NFT";
import { NFTDetails } from "./Components/NFTDetails";
import { Profile } from "./Components/Profile";
import { Register } from "./Components/Register";


function App() {
  return (
    <>
          
          <Navigation title="AGRO CHAIN" />
          <Register />
          <Footer />
        
    </>
  );
}

export default App;
