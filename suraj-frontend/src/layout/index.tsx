import Sidebar from "./Sidebar";
import { ReactNode } from "react";

function Layout(Props: { children: ReactNode }) {
  return (
    <>
      <Sidebar>{Props.children}</Sidebar>
    </>
  );
}

export default Layout;
