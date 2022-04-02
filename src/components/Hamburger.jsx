import classNames from 'classnames'

const hamburgerClass = (isOpen) => classNames([
  'link-image',
  'hamburger',
  isOpen ? 'hamburger--open' : ''
])

export default function Hamburger({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div 
      className={hamburgerClass(isMenuOpen)}
      onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) 
}