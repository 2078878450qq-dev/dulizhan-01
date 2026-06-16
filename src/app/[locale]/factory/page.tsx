import { useTranslations } from "next-intl";
import { Factory, Shield, Cpu, Package, Gauge, Wrench } from "lucide-react";

const stats = [
  { icon: Factory, key: "area", value: "50,000" },
  { icon: Package, key: "workshop", value: "8" },
  { icon: Cpu, key: "lines", value: "12" },
  { icon: Wrench, key: "workers", value: "300+" },
];

const equipment = [
  { name: "CNC 数控加工中心", qty: "20 台", desc: "德国/日本进口，精度 0.001mm" },
  { name: "注塑成型机", qty: "15 台", desc: "全自动伺服控制" },
  { name: "自动化装配线", qty: "4 条", desc: "柔性机器人装配" },
  { name: "三坐标测量仪", qty: "6 台", desc: "ZEISS 高精度测量" },
  { name: "激光切割机", qty: "8 台", desc: "光纤激光，高速切割" },
  { name: "表面处理线", qty: "3 条", desc: "电镀/喷涂全自动" },
];

export default function FactoryPage() {
  const t = useTranslations("factory");

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-page">
          <h1 className="section-title">{t("title")}</h1>
          <p className="section-subtitle">{t("subtitle")}</p>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.key} className="text-center p-6 bg-brand-50 rounded-xl">
                <s.icon size={32} className="mx-auto text-gold-500 mb-3" />
                <div className="text-3xl font-bold text-brand-800">{s.value}</div>
                <div className="text-sm text-brand-600 mt-1">{t(s.key)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-50/50">
        <div className="container-page">
          <h2 className="section-title">{t("equipment")}</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((eq) => (
              <div key={eq.name} className="bg-white rounded-xl p-6 border border-brand-100 hover:border-brand-200 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-brand-800">{eq.name}</h3>
                  <span className="text-gold-600 font-bold text-sm">{eq.qty}</span>
                </div>
                <p className="text-sm text-brand-600">{eq.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 rounded-full px-6 py-3 mb-6">
              <Shield size={20} />
              <span className="font-medium">{t("qualityText")}</span>
            </div>
            <h2 className="section-title">{t("quality")}</h2>
            <p className="mt-6 text-brand-700/80 leading-relaxed">
              我们建立了从原材料入厂到成品出厂的全流程质量管控体系。每道工序均设有质量检测点，
              所有产品经过严格测试后方可出厂，确保交付给客户的每一个产品都符合最高标准。
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-50/50">
        <div className="container-page">
          <h2 className="section-title">{t("gallery")}</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[4/3] bg-gradient-to-br from-brand-100 to-brand-50 rounded-xl flex items-center justify-center">
                <Factory size={40} className="text-brand-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
