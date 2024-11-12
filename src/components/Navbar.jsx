import { bagImg, salvayImg, searchImg } from '../utils';
import { navLists } from '../constants';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <Link to='/'><img src={salvayImg} alt="Apple" width={22} height={18} /></Link>
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => {
             const modifiedNav = nav.split(' ').join('-').toLowerCase()
             return (
              <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                <Link to={modifiedNav === 'model-customization' ? '/' : modifiedNav}>{nav}</Link>
              </div>
             )
          }
          )}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar