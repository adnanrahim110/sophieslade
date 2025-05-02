import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

const Header = () => {
  const { navbar, toggleLanguage, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Exact-path match
  const isActive = (path) => location.pathname === path;
  // Treat nav-item as active if itself or any child matches
  const isNavItemActive = (item) =>
    isActive(item.path) ||
    (item.children && item.children.some((c) => isActive(c.path)));

  // Header background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu if click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Close mobile menu + submenus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenMobileSubmenus({});
  }, [location.pathname]);

  const navItems = navbar.filter((item) => !item.action);
  const langItem = navbar.find((item) => item.action === "toggleLanguage");

  const toggleMobileSubmenu = (label) => {
    setOpenMobileSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <header
      className={`fixed w-full z-50 h-20 transition-all duration-300 border-b py-5 border-white ${
        isScrolled
          ? "bg-white/50 backdrop-blur-[5px] shadow-md"
          : "bg-transparent backdrop-blur-xs"
      }`}
    >
      <div className="imago-container flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold text-imago-700">
          Sophie Slade
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center space-x-8">
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
                <div className="absolute -left-40 w-md z-[2] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto pt-3">
                  <div className="bg-white border border-black/20 rounded-lg shadow-lg p-2">
                    <div className="rounded-sm bg-imago-100 border border-imago-300 overflow-hidden text-sm">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className={`block px-4 py-3 whitespace-nowrap transition-all duration-300 ease-in-out not-last:border-b border-b-imago-300 ${
                            isActive(child.path)
                              ? "font-semibold bg-imago-300"
                              : "text-black hover:bg-imago-200"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
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

        <div className="flex lg:hidden items-center justify-end gap-3">
          <button
            className="flex lg:hidden btn-secondary relative ml-2 h-10 bg-white hover:border-imago-800 shadow-[0_0_3px_1px_rgba(0,0,0,0.05)] group cursor-pointer w-32"
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
          <button
            ref={buttonRef}
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden bg-white border-t mt-2 animate-slide-down"
        >
          <div className="py-2 px-4 space-y-3">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between items-center py-2 px-4">
                  <Link
                    to={item.path}
                    className={`nav-link block rounded ${
                      isNavItemActive(item)
                        ? "nav-link-active"
                        : " text-gray-700"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className="p-2 text-gray-700"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openMobileSubmenus[item.label] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && openMobileSubmenus[item.label] && (
                  <div className="pl-6 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className={`block py-2 px-4 rounded ${
                          isActive(child.path)
                            ? "nav-link-active"
                            : " text-gray-700 hover:bg-imago-100 "
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
