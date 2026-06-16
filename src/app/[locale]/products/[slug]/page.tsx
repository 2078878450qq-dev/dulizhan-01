import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Package, CheckCircle, ArrowRight } from "lucide-react";

const productData: Record<string, { title: string; category: string; desc: string; specs: string[]; features: string[] }> = {
  "precision-gears": {
    title: "精密齿轮",
    category: "工业零部件",
    desc: "高品质精密齿轮，采用优质合金钢材料，经过精密加工和热处理工艺，具有高精度、高耐磨、低噪音等特点。广泛应用于汽车变速箱、工业传动系统、精密仪器等领域。",
    specs: ["模数: 0.5-10", "精度等级: DIN 6-8", "材质: 40Cr, 20CrMnTi", "热处理: 渗碳淬火"],
    features: ["高精度磨齿工艺", "低噪音传动", "长寿命耐磨", "可定制非标规格"],
  },
  "industrial-connectors": {
    title: "工业连接器",
    category: "电子元器件",
    desc: "高性能工业级连接器，IP67 防护等级，适应恶劣环境。广泛应用于自动化设备、新能源、户外通信基站等领域。",
    specs: ["防护等级: IP67", "额定电流: 5A-200A", "插拔次数: >5000次", "工作温度: -40C to +125C"],
    features: ["防水防尘设计", "高可靠性接触", "快速锁紧机构", "抗振动冲击"],
  },
  "injection-molds": {
    title: "注塑模具",
    category: "精密模具",
    desc: "精密注塑模具设计与制造，采用优质模具钢，先进 CAM 加工和 EDM 放电工艺。模具寿命长，成型精度高。",
    specs: ["模具寿命: 50-100万模次", "型腔精度: 0.01mm", "模架材质: S50C/P20", "冷却系统: 随形水路"],
    features: ["模流分析优化", "热流道系统", "快速换模设计", "全程试模验证"],
  },
  "stainless-bolts": {
    title: "不锈钢螺栓",
    category: "五金制品",
    desc: "高品质不锈钢紧固件，涵盖 304、316、316L 多种材质。符合 DIN、ANSI、JIS 国际标准。",
    specs: ["材质: 304/316/316L", "规格: M3-M36", "标准: DIN/ANSI/JIS", "强度等级: A2-70, A4-80"],
    features: ["耐腐蚀性能优异", "表面光洁无毛刺", "尺寸公差严格", "提供检测报告"],
  },
};

const defaultProduct = {
  title: "产品详情",
  category: "",
  desc: "高品质工业产品，经过严格的质量控制和工艺优化，满足各类工业应用需求。",
  specs: ["规格可根据需求定制", "通过 ISO9001 质量认证", "提供完整检测报告", "支持 OEM/ODM"],
  features: ["优质原材料", "严格质检", "快速交付", "售后保障"],
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const t = useTranslations("products");
  const product = productData[params.slug] || defaultProduct;

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 to-brand-50 rounded-2xl flex items-center justify-center">
              <Package size={80} className="text-brand-300" />
            </div>
            <div>
              <span className="text-sm text-gold-600 font-medium">{product.category}</span>
              <h1 className="text-3xl font-bold text-brand-800 mt-2">{product.title}</h1>
              <p className="mt-6 text-brand-700/80 leading-relaxed">{product.desc}</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {product.features.map((f) => (<div key={f} className="flex items-center gap-2 text-sm text-brand-700"><CheckCircle size={16} className="text-gold-500 shrink-0" />{f}</div>))}
              </div>
              <div className="mt-8 p-4 bg-brand-50 rounded-xl">
                <h4 className="font-semibold text-brand-800 mb-3">技术规格</h4>
                <div className="grid grid-cols-2 gap-2">{product.specs.map((s) => (<div key={s} className="text-sm text-brand-700">{s}</div>))}</div>
              </div>
              <Link href="/contact" className="inline-block mt-8">
                <Button variant="gold" size="lg">{t("inquiry")}<ArrowRight size={20} className="ml-2" /></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({ slug }));
}