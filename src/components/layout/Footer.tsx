import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const tc = useTranslations("contact");
  const tn = useTranslations("nav");

  return (
    <footer className="bg-brand-900 text-white">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">煜豪工艺品有限公司</h3>
            <p className="text-brand-300 text-sm leading-relaxed">
              煜豪工艺品 — 专注工艺品研发与制造
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-400 mb-4">{t("sitemap")}</h4>
            <div className="space-y-2">
              {[
                { key: "home", href: "/" },
                { key: "about", href: "/about" },
                { key: "products", href: "/products" },
                { key: "factory", href: "/factory" },
                { key: "contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="block text-brand-300 hover:text-white text-sm transition-colors"
                >
                  {tn(item.key)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-400 mb-4">{tc("title")}</h4>
            <div className="space-y-3 text-sm text-brand-300">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>{tc("addressValue")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>{tc("phoneValue")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span>{tc("emailValue")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="container-page py-6 text-center text-sm text-brand-500">
          &copy; {new Date().getFullYear()} {t("rights")}.
        </div>
      </div>
    </footer>
  );
}

