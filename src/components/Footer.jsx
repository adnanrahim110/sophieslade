import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

const Footer = () => {
  const { footer } = useLanguage();
  const currentYear = new Date().getFullYear();

  const { text, contact, rights, newsletter } = footer;

  return (
    <footer className="bg-imago-700 text-white pt-12 pb-6">
      <div className="imago-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold">Sophie Slade</h2>
            <p className="text-imago-100">{text}</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-imago-600 text-xl border border-imago-100 hover:bg-imago-500/10 hover:backdrop-blur-xs hover:text-imago-50 transition-all duration-300 border-e-imago-50 rounded-full w-10 h-10 bg-imago-100 flex items-center justify-center"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-imago-600 text-xl border border-imago-100 hover:bg-imago-500/10 hover:backdrop-blur-xs hover:text-imago-50 transition-all duration-300 border-e-imago-50 rounded-full w-10 h-10 bg-imago-100 flex items-center justify-center"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-imago-600 text-xl border border-imago-100 hover:bg-imago-500/10 hover:backdrop-blur-xs hover:text-imago-50 transition-all duration-300 border-e-imago-50 rounded-full w-10 h-10 bg-imago-100 flex items-center justify-center"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">{contact.heading}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-imago-400" />
                <span>{contact.emailLabel}: slade.imago@icloud.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-imago-400" />
                <span>{contact.phoneLabel}: +1 (555) 123-4567</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">{newsletter.heading}</h3>
            <p className="text-imago-100 mb-4">{newsletter.label}</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className="px-4 py-2 rounded flex-1 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-imago-500"
              />
              <button
                type="submit"
                className="btn-primary bg-imago-500 hover:bg-imago-600"
              >
                {newsletter.btn}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-imago-600 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            © {currentYear}{" "}
            <Link
              to="/"
              className="text-white underline underline-offset-2 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
            >
              Sophie Slade
            </Link>
            . {rights}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
