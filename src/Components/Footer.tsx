import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0A2538] text-white py-16 font-poppins">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Address Section */}
        <div className="space-y-4">
          <Image
            src="/logo.svg"
            alt="Padikkal Logo"
            width={150}
            height={50}
            className="mb-4"
          />
          <div className="text-sm">
            <p>Padikkal Travels Private Limited</p>
            <p>304, No16,Mittal Tower Residency,Mittal Appartments,</p>
            <p>M.G.Road, Bangalore, Karnataka-560001</p>
          </div>
          <div className="mt-6">
            <h3 className="font-medium mb-2">Customer Helpline</h3>
            <p className="flex items-center gap-2">
              <Phone size={20} />
              <span>08046333629</span>
            </p>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/benefit" className="hover:text-gray-300">
                Benefit
              </Link>
            </li>
            <li>
              <Link href="/service" className="hover:text-gray-300">
                Service
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-gray-300">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-gray-300">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/help-center" className="hover:text-gray-300">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/safety" className="hover:text-gray-300">
                Safety
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gray-300">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-gray-300">
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Socials</h3>
          <div className="space-y-2">
            <Link
              href="https://instagram.com"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <Image
                src="/socials/instagram.png"
                alt="instagram"
                width={20}
                height={20}
              />
              <span>Instagram</span>
            </Link>
            <Link
              href="https://facebook.com"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <Image
                src="/socials/facebook.png"
                alt="facebook"
                width={20}
                height={20}
              />
              <span>Facebook</span>
            </Link>
            <Link
              href="https://linkedin.com"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <Image
                src="/socials/linkedin.png"
                alt="linkedin"
                width={20}
                height={20}
              />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
