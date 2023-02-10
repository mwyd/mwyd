import React, { useState } from "react";
import Logo from "./logo";
import SideMenu from "./side-menu";
import Hamburger from "./hamburger";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="flex h-14 flex-col p-2 border-b border-b-lightgrey-700 dark:border-b-darkgrey-200 fixed w-full bg-white-0 dark:bg-black-200 z-40">
      <div className="flex justify-between items-center w-full max-w-hd m-auto">
        <Logo/>
        <SideMenu isOpen={isMenuOpen}/>
        <Hamburger
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
        />
      </div>
    </nav>
  );
}