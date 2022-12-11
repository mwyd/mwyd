import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import Hamburger from './Hamburger'
import ThemeSwitch from './ThemeSwitch'
import ImageLink from './ImageLink'
import socials from '../data/socials'
import links from '../data/links'

const linkClass = (isActive) => classNames([
  'link-text',
  'link-page',
  isActive ? 'border-b-2 border-red-500' : ''
])

const sideMenuClass = (isOpen) => classNames([
  'side-menu',
  isOpen ? 'side-menu--open' : ''
])

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { pathname } = useLocation()

  return (
    <nav
      className="flex h-14 flex-col p-2 border-b border-b-lightgrey-700 dark:border-b-darkgrey-200 fixed w-full bg-white-0 dark:bg-black-200 z-40">
      <div className="flex justify-between items-center w-full max-w-hd m-auto">
        <Link
          className="text-xl mx-2 link-text"
          to="/"
        >
          m<span className="text-red-500">.</span>wyd
        </Link>
        <div className={sideMenuClass(isMenuOpen)}>
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
          <ThemeSwitch/>
          <div className="side-menu__socials flex">
            {socials.map((data, i) =>
              <ImageLink
                key={`social-${i}`}
                {...data}
              />
            )}
          </div>
        </div>
        <Hamburger
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </nav>
  )
}