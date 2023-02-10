import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import ThemeSwitch from "../theme/theme-switch";
import ImageLink from "../links/image-link";
import socials from "../../data/socials";
import links from "../../data/links";

const linkClass = (isActive: boolean) => classNames([
  'link-text',
  'link-page',
  isActive ? 'border-b-2 border-red-500' : ''
]);

const sideMenuClass = (isOpen: boolean) => classNames([
  'side-menu',
  isOpen ? 'side-menu--open' : ''
]);

interface SideMenuProps {
  isOpen: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen }) => {
  const { pathname } = useLocation();

  return (
    <div className={sideMenuClass(isOpen)}>
      <div className="side-menu__pages">
        {links.map(({ name, path }, i) =>
          <Link
            className={linkClass(pathname === path)}
            to={path}
            key={`link-${i}`}
          >
            {name}
          </Link>
        )}
      </div>
      <ThemeSwitch />
      <div className="side-menu__socials flex">
        {socials.map((data, i) =>
          <ImageLink
            key={`social-${i}`}
            {...data}
          />
        )}
      </div>
    </div>
  );
}

export default SideMenu;