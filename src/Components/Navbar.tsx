import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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

          <div className="flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-gray-200 font-poppins text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            {/* Book Now Button */}
            <div>
              <Link
                href="#book"
                className="bg-gradient-to-r from-secondary to-accent text-white font-poppins font-medium px-6 py-2 rounded-md hover:opacity-90 transition-opacity duration-200"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
