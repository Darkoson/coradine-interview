import {Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";

const SecuredPages = () => (
  <>
    <div className="home-bg">
      <Navigation />
      home is here
      <Outlet />
    </div>
  </>
);


export default SecuredPages;