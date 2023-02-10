import React from "react";
import classNames from "classnames";

const hamburgerClass = (isOpen: boolean) => classNames([
  'link-image',
  'hamburger',
  isOpen ? 'hamburger--open' : ''
]);

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      type="button"
      title="menu"
      className={hamburgerClass(isOpen)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
}

export default Hamburger;