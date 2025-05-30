import React from "react";
import Link from "next/link";
import { Globe, Github, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const iconSize = 22

  return (
    <footer className="w-full bg-[#ffffff] dark:bg-[#000000] border border-[#f2f2f2] dark:border-[#2e2e2e] rounded-xl py-8 px-6 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-2">
            <h6 className="footer-text font-bold">Ege Uysal</h6>

            <p className="footer-text w-full">Innovate. Optimize. Create.</p>

            <p className="footer-text">&copy; {currentYear} Ege Uysal</p>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="footer-text font-bold">Resources</h6>

            <nav>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="mailto:hello@egeuysal.com"
                    className="footer-text"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="footer-text font-bold">Connect</h6>
              <div className="flex gap-2">
                <Link
                  href="https://www.egeuysal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                >
                  <Globe size={iconSize} className="text-black dark:text-white" />
                </Link>
                <Link
                  href="https://github.com/egeuysall"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={iconSize} className="text-black dark:text-white" />
                </Link>
                <Link
                  href="mailto:hello@egeuysal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                >
                  <Mail size={iconSize} className="text-black dark:text-white" />
                </Link>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
