"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { Link } from "@/i18n/routing";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "products", href: "/products" },
  { key: "factory", href: "/factory" },
  { key: "contact", href: "/contact" },
];

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-100">
      <div className="container-page">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-brand-800 tracking-tight">
            煜豪工艺品有限公司
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-brand-50 text-brand-700"
                    : "text-brand-700/70 hover:text-brand-700 hover:bg-brand-50/50"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href={pathname}
              locale="zh"
              className="text-xs px-2 py-1 rounded text-brand-600 hover:bg-brand-50"
            >
              中
            </Link>
            <Link
              href={pathname}
              locale="en"
              className="text-xs px-2 py-1 rounded text-brand-600 hover:bg-brand-50"
            >
              EN
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-brand-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-brand-100 bg-white/95 backdrop-blur-md animate-fade-in">
          <div className="container-page py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-brand-50 text-brand-700"
                    : "text-brand-700/70 hover:text-brand-700 hover:bg-brand-50"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="flex gap-2 pt-4 px-4">
              <Link href={pathname} locale="zh" className="text-xs px-3 py-2 rounded bg-brand-50 text-brand-700">中文</Link>
              <Link href={pathname} locale="en" className="text-xs px-3 py-2 rounded bg-brand-50 text-brand-700">English</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

