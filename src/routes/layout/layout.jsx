import "./layout.scss";
import Navbar  from "../../componants/Navbar/Navbar";
import { Outlet } from "react-router-dom";

 function layout() {
  return (
    <div className="layout">
      <div className="navbar">
          <Navbar/>
      </div>
      <div className="content">
          <Outlet/>
      </div>
    </div>
  )
}

export default layout;