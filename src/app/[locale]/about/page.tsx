import { useTranslations } from "next-intl";
import { Award, Target, TrendingUp, Users } from "lucide-react";

const milestones = [
  { year: "2005", event: "公司成立，初始团队 20 人" },
  { year: "2010", event: "通过 ISO9001 认证，新建第二车间" },
  { year: "2015", event: "出口业务突破 20 个国家，年产值破亿" },
  { year: "2020", event: "全面升级智能生产线，引入工业 4.0 管理系统" },
  { year: "2025", event: "50,000m² 新厂区启用，服务全球 50+ 国家" },
];

const values = [
  { icon: Target, title: "企业使命", text: "以创新驱动发展，以品质赢得市场" },
  { icon: TrendingUp, title: "企业愿景", text: "成为全球领先的制造服务提供商" },
  { icon: Award, title: "核心价值观", text: "诚信、创新、品质、共赢" },
  { icon: Users, title: "团队理念", text: "以人为本，共同成长" },
];

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-page">
          <h1 className="section-title">{t("title")}</h1>
          <p className="section-subtitle">{t("subtitle")}</p>

          <div className="mt-16 max-w-3xl mx-auto">
            <p className="text-lg text-brand-700/80 leading-relaxed text-center">
              {t("intro")}
            </p>
          </div>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6 rounded-xl border border-brand-100 hover:border-brand-200 transition-colors">
                <v.icon size={32} className="mx-auto text-gold-500 mb-4" />
                <h3 className="font-semibold text-brand-800 mb-2">{v.title}</h3>
                <p className="text-sm text-brand-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-50/50">
        <div className="container-page">
          <h2 className="section-title">{t("history")}</h2>
          <div className="mt-12 max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 pb-8 relative">
                {i < milestones.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-0 w-px bg-brand-200" />
                )}
                <div className="w-10 h-10 rounded-full bg-gold-500 text-white flex items-center justify-center shrink-0 text-sm font-bold z-10">
                  {m.year.slice(2)}
                </div>
                <div className="pt-1.5">
                  <div className="text-gold-600 font-bold">{m.year}</div>
                  <div className="text-brand-700 mt-1">{m.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
