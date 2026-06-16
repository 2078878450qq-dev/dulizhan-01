"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Award, Globe, Package, Factory } from "lucide-react";
import { useEffect, useState, useRef } from "react";

function CountUp({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = Date.now();
          const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-brand-800">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-brand-600 mt-1">{label}</div>
    </div>
  );
}

export function Hero() {
  const th = useTranslations("hero");
  const ts = useTranslations("home.stats");

  return (
    <>
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-brand-50 to-white pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-400/20 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="container-page relative z-10">
          <div className="max-w-3xl mx-auto text-center py-20">
            <h1 className="text-display-xl text-brand-800 text-balance animate-slide-up">
              {th("title")}
            </h1>
            <p className="mt-6 text-xl text-brand-600 max-w-2xl mx-auto text-balance animate-slide-up" style={{ animationDelay: "0.15s", animationFillMode: "both" }}>
              {th("subtitle")}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
              <Link href="/products">
                <Button variant="gold" size="lg">
                  {th("cta")}
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  <Globe size={20} className="mr-2" />
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-brand-100">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CountUp end={2005} label={ts("years")} />
            <CountUp end={50} suffix="+" label={ts("countries")} />
            <CountUp end={200} suffix="+" label={ts("products")} />
            <CountUp end={50000} suffix="" label={ts("factory")} />
          </div>
        </div>
      </section>
    </>
  );
}

