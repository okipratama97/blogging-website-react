import { useCallback, useEffect, useState } from 'react';
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="w-full sticky text-white bg-black">
      <div
        className={`
          px-4
          md:px-16
          py-6
          flex
          flex-row
          items-center
          transition
          duration-500
          ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}
        `}
      >
         <div>
            <Link to="/">My-Blog</Link>
          </div>
        <div
          className="
            flex-row
            ml-8
            gap-7
            hidden
            lg:flex
          "
        >

          <div>
            <Link to="/register" className="hover:text-gray-400 transition">Register</Link>
          </div>

          <div>
            <Link to="/login" className="hover:text-gray-400 transition">Login</Link>
          </div>

          <div>
            <Link to="/category" className="hover:text-gray-400 transition">Category</Link>
          </div>

          <div>
            <Link to="/profile" className="hover:text-gray-400 transition">Profile</Link>
          </div>

          <div>
            <Link to="/create-blog" className="hover:text-gray-400 transition">Create</Link>
          </div>
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>

          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrHxSNhOer18DioDuZrz0Ol_tTpgORwxgyw&usqp=CAU"
                alt=""
              />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? 'rotate-180' : 'rotate-0'
              }`}
            />
            {showAccountMenu && (
              <div className="absolute top-10 right-0 bg-white py-2 px-4 rounded shadow">
                <button
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-700 transition block w-full text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
