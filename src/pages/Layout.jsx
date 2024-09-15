import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
  

const Layout = () => {
 
  return (
    <div className="flex flex-col min-h-screen">
     

     <Nav />

      {/* Main Content */}
      <main className="w-screen">
        <Outlet />
      </main>

      
    

    
    </div>
  );
};

export default Layout;
