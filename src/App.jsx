import React from "react";
import Header from "./Components/Header/Header";
import CharDetail from "./Components/charDetail/CharDetail";
import SiteLabel from "./Components/siteLabel/SiteLabel";
const App = (props) =>{
  return(
    <div>
      <Header />
      <SiteLabel />
      <CharDetail />
    </div>
  )
}
export default App