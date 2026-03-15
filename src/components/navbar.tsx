"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X, BookOpen } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-surface-dark/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl gradient-bg-primary text-white">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:inline">
              EasyJapanese
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:gradient-bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/login"
              className="hidden sm:inline-flex text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-4 py-2"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center text-sm font-semibold text-white gradient-bg-primary px-5 py-2.5 rounded-xl hover:opacity-90 transition-all duration-300 neon-glow"
            >
              Sign up free
            </Link>

            {/* Mobile menu */}
            <button
              className="md:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4 animate-slide-up">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-2 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 px-2 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Log in
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
