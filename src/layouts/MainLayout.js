import React from "react";
import Nav from "../components/Navbar/Nav";

const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};
export default MainLayout;
