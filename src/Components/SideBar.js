import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import "../Styles/SideBar.css"
import DropDown from "./DropDown";

function SideBar() {
  return (
    <main>
      <section className="sideContainer">
        <div className="dashboard">
          <FontAwesomeIcon icon={faTachometerAlt} size="2x" color="black"  style={{color:"black"}}/>
          <h3>Dashboard</h3>
        </div>

        <div className="analytics">
          <FontAwesomeIcon size="2x" color="black" icon={faChartBar} />
          <h3>Analytics</h3>
        </div>

        <div className="team">
          <FontAwesomeIcon size="2x" color="black" icon={faUsers} />
          <h3>Team</h3>
        </div>

        <div className="document">
          <FontAwesomeIcon size="2x" color="black" icon={faTools} />
          <h3>Setting</h3>
        </div>

        <DropDown/>
      </section>
    </main>
  );
}

export default SideBar;
