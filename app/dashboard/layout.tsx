import { ReactNode } from "react";
import SideNav from "../ui/dashboard/sidenav";

const Layout = ({children}: {children : React.ReactNode}) => {
  return (
    /* Container */ 
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden"> 

       {/* Navigation */}
      <div className="w-full flex-none md:w-64"> 
        <SideNav/>  
      </div>

      {/*Content */}
      <div className="flex-grow md:overflow-y-auto"> {children} </div>

    </div>
  )
}

export default Layout; 