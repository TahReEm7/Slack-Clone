// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        {/* Company Name */}
        <div className="text-lg font-semibold">YourCompany</div>

        {/* Links */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/about" className="hover:text-gray-800">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-800">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-gray-800">
            Privacy
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} YourCompany
        </div>
      </div>
    </footer>
  );
};

export default Footer;
