import React from "react";
import classNames from "classnames";

const hamburgerClass = (isOpen: boolean) => classNames([
  'link-image',
  'hamburger',
  isOpen ? 'hamburger--open' : ''
]);

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Hamburger({ isOpen, setIsOpen }: Props) {
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