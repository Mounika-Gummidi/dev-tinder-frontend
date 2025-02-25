import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Body = () =>{
  return(
    <div>
      <Navbar/>
      <Footer/>
      <Outlet/>
    </div>
  )
}
export default Body;