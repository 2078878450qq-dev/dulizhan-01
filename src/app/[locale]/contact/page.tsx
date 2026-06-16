"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-page">
          <h1 className="section-title">{t("title")}</h1>
          <p className="section-subtitle">{t("subtitle")}</p>

          <div className="mt-16 grid md:grid-cols-3 gap-12">
            <div className="space-y-8">
              {[
                { icon: MapPin, label: t("address"), value: t("addressValue") },
                { icon: Phone, label: t("phoneLabel"), value: t("phoneValue") },
                { icon: Mail, label: t("emailLabel"), value: t("emailValue") },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-brand-700" />
                  </div>
                  <div>
                    <div className="text-sm text-brand-500">{item.label}</div>
                    <div className="text-brand-800 font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:col-span-2">
              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-green-800">{t("success")}</h3>
                  <p className="text-green-600 mt-2">我们会尽快回复您的咨询</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-brand-700 mb-1.5">{t("name")}</label>
                      <input
                        name="name"
                        required
                        className="w-full rounded-lg border border-brand-200 px-4 py-2.5 text-brand-800 placeholder:text-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-700 mb-1.5">{t("email")}</label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-brand-200 px-4 py-2.5 text-brand-800 placeholder:text-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-400 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-brand-700 mb-1.5">{t("phone")}</label>
                      <input
                        name="phone"
                        className="w-full rounded-lg border border-brand-200 px-4 py-2.5 text-brand-800 placeholder:text-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-700 mb-1.5">{t("company")}</label>
                      <input
                        name="company"
                        className="w-full rounded-lg border border-brand-200 px-4 py-2.5 text-brand-800 placeholder:text-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-400 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-700 mb-1.5">{t("message")}</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-lg border border-brand-200 px-4 py-2.5 text-brand-800 placeholder:text-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-400 transition-colors resize-none"
                    />
                  </div>
                  <Button type="submit" variant="gold" size="lg" disabled={status === "loading"}>
                    <Send size={18} className="mr-2" />
                    {status === "loading" ? "发送中..." : t("submit")}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
