"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Benefit", href: "#benefit" },
    { name: "Service", href: "#service" },
    { name: "FAQ", href: "#faq" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className="bg-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Padikkal Travels"
                width={140}
                height={140}
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-gray-200 font-poppins text-sm transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://www.padikkaltravels.com/"
              className="bg-white text-black font-poppins font-medium px-4 py-2 rounded-md hover:opacity-90 transition"
            >
              School Travels
            </Link>
          </div>

          {/* Always-visible Book Now button */}
          <div className="flex items-center space-x-4">
            <Link
              href="#connect"
              className="bg-gradient-to-r from-secondary to-accent text-white font-poppins font-medium px-4 py-2 rounded-md hover:opacity-90 transition"
            >
              Book Now
            </Link>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary px-4 pt-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-gray-200 font-poppins text-sm"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://www.padikkaltravels.com/"
            className="block bg-white text-black font-poppins font-medium px-4 py-2 rounded-md hover:opacity-90 transition"
          >
            School Travels
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
