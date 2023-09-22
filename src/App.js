import React from "react"
import SideBar from "./Components/SideBar";
import Search from "./Components/Search";
import "./App.css"
import MyTask from "./Components/MyTask";
import Finance from "./Components/Finance";
import Carousel from "./Components/Carousel";
import Jessica from "./Components/Jessica";
function App() {
  return (
    <div className="App">
      <SideBar />
      
      <div>
        <Search />
        <MyTask/>
        <Finance/>
        <Carousel/>
      </div>

      <Jessica/>
    </div>
  );
}

export default App;
