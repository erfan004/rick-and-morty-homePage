import React from "react";
import Header from "./Components/Header/Header";
import CharDetail from "./Components/charDetail/CharDetail";
import SiteLabel from "./Components/siteLabel/SiteLabel";
import Footer from "./Components/footer/Footer";
const App = () =>{
  return(
    <div>
      <Header />
      <SiteLabel />
      <CharDetail />
      <Footer />
    </div>
  )
}
export default App