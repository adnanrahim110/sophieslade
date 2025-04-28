import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

const Header = () => {
  const { navbar, toggleLanguage, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // helper for exact-path match
  const isActive = (path) => location.pathname === path;

  // treats a nav-item as active if its own path matches OR any child matches
  const isNavItemActive = (item) =>
    isActive(item.path) ||
    (item.children && item.children.some((c) => isActive(c.path)));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = navbar.filter((item) => !item.action);
  const langItem = navbar.find((item) => item.action === "toggleLanguage");

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 border-b py-4 border-white ${
        isScrolled
          ? "bg-white/30 backdrop-blur-sm shadow-md"
          : "bg-transparent backdrop-blur-xs"
      }`}
    >
      <div className="imago-container flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold text-imago-700">
          Sophie Slade
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <div className="inline-flex items-center ">
                  <Link
                    to={item.path}
                    className={`nav-link flex items-center ${
                      isNavItemActive(item) ? "nav-link-active" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                  <ChevronDown
                    size={16}
                    className={`ml-1 ${
                      isNavItemActive(item) ? "text-imago-700" : ""
                    } group-hover:rotate-180 transition-all duration-300 ease-in-out`}
                  />
                </div>
                <div className="absolute left-0 z-[2] bg-white border border-neutral-300 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.path}
                      className={`block px-4 py-2 whitespace-nowrap transition-all duration-300 ease-in-out ${
                        isActive(child.path)
                          ? "font-semibold bg-gray-200"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                className={`nav-link ${
                  isNavItemActive(item) ? "nav-link-active" : ""
                }`}
              >
                {item.label}
              </Link>
            )
          )}

          <button
            className="btn-secondary relative ml-4 h-10 bg-white hover:border-imago-800 shadow-[0_0_5px_3px_rgba(0,0,0,0.07)] group cursor-pointer w-32"
            onClick={toggleLanguage}
          >
            <img src={langItem.img} className="w-5" alt={langItem.label} />
            <span className="group-hover:w-0 group-hover:opacity-0">
              {langItem.label}
            </span>
            <div className="overflow-hidden w-0 group-hover:w-5 transition-all duration-100 ease-in-out relative h-full">
              <FaArrowLeftLong className="text-primary absolute top-1/2 left-0 -translate-y-[25%] group-hover:animate-slide-right" />
              <FaArrowRightLong className="text-primary absolute top-1/2 left-0 -translate-y-[75%] group-hover:animate-slide-left" />
            </div>
          </button>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2 animate-slide-down">
          <div className="py-2 px-4 space-y-3">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  className="block py-2 px-4 text-gray-700 hover:bg-imago-100 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-6 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block py-2 px-4 text-gray-600 hover:bg-imago-100 rounded"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-imago-100 rounded"
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
            >
              {langItem.label}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
