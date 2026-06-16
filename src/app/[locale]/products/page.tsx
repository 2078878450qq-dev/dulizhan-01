"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Package, ArrowRight } from "lucide-react";

const categories = ["全部", "工业零部件", "电子元器件", "精密模具", "五金制品"];

const allProducts = [
  { slug: "precision-gears", title: "精密齿轮", category: "工业零部件", desc: "高精度金属齿轮，模数 0.5-10，适用于汽车变速箱、工业传动系统" },
  { slug: "cnc-machined-parts", title: "CNC 加工件", category: "工业零部件", desc: "定制 CNC 精密加工零部件，公差 0.005mm" },
  { slug: "industrial-connectors", title: "工业连接器", category: "电子元器件", desc: "防水防尘连接器，IP67 防护等级，适用于户外设备" },
  { slug: "pcb-assembly", title: "PCB 组件", category: "电子元器件", desc: "PCBA 贴片组装，支持 SMT/DIP 混合工艺" },
  { slug: "injection-molds", title: "注塑模具", category: "精密模具", desc: "精密注塑模具，寿命 50 万-100 万模次" },
  { slug: "stamping-dies", title: "冲压模具", category: "精密模具", desc: "连续模、工程模，支持多工位级进冲压" },
  { slug: "stainless-bolts", title: "不锈钢螺栓", category: "五金制品", desc: "304/316 不锈钢紧固件，DIN/ANSI/JIS 标准" },
  { slug: "aluminum-brackets", title: "铝合金支架", category: "五金制品", desc: "定制铝合金支架，支持挤压成型和 CNC 加工" },
];

export default function ProductsPage() {
  const t = useTranslations("products");
  const [activeCat, setActiveCat] = useState("全部");
  const filtered = activeCat === "全部" ? allProducts : allProducts.filter((p) => p.category === activeCat);

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-page">
          <h1 className="section-title">{t("title")}</h1>
          <p className="section-subtitle">{t("subtitle")}</p>

          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCat(cat)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCat === cat ? "bg-brand-700 text-white" : "bg-brand-50 text-brand-700 hover:bg-brand-100"}`}>{cat}</button>
            ))}
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group bg-white rounded-xl border border-brand-100 hover:border-brand-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center">
                  <Package size={48} className="text-brand-300 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-gold-600 font-medium">{p.category}</span>
                  <h3 className="font-semibold text-brand-800 mt-1">{p.title}</h3>
                  <p className="text-sm text-brand-600 mt-2 line-clamp-2">{p.desc}</p>
                  <div className="mt-4 flex items-center text-sm text-brand-700 font-medium group-hover:text-gold-600 transition-colors">
                    {t("inquiry")}<ArrowRight size={14} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}