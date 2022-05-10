import logo from './logo.svg';
import './App.css';

import Navigation from "./Components/Navigation";
import { Footer } from "./Components/Footer";
import { NFT } from "./Components/NFT";


function App() {
  return (
    <>
          
          <Navigation title="AGRO CHAIN" searchBar={false} />
          <NFT/>
          <Footer />
        
    </>
  );
}

export default App;
