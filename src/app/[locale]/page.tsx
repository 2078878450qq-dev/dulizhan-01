import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Hero } from '@/components/home/Hero';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle, Factory, Package } from 'lucide-react';

const featuredProducts = [
  { title: '工业零部件', desc: '高精度机械加工零部件，适用于汽车、航空等领域' },
  { title: '电子元器件', desc: '高性能电子连接器及组件，满足工业级标准' },
  { title: '精密模具', desc: '定制化模具设计与制造，精度达微米级' },
  { title: '五金制品', desc: '标准及非标五金件，材质涵盖不锈钢、铜、铝等' },
];

const advantages = [
  { title: '先进设备', desc: '引进德国、日本高端数控设备，保障精度与效率' },
  { title: '质量管控', desc: 'ISO9001 认证，全流程质检，批次可追溯' },
  { title: '快速交付', desc: '标准化流程 + 柔性生产，交期可靠' },
  { title: '定制服务', desc: 'OEM/ODM 经验丰富，按需定制' },
];

export default function HomePage() {
  const t = useTranslations('home');
  const tn = useTranslations('nav');

  return (
    <>
      <Hero />

      <section className="section-padding" id="about">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-left">{t('aboutTitle')}</h2>
              <p className="mt-6 text-brand-700/80 leading-relaxed">{t('aboutDesc')}</p>
              <div className="mt-8 space-y-3">
                {advantages.map((a) => (
                  <div key={a.title} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gold-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-brand-800">{a.title}</span>
                      <span className="text-brand-600"> — {a.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-block mt-8">
                <Button variant="primary">{t('ctaButton')}<ArrowRight size={16} className="ml-2" /></Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 to-brand-50 rounded-2xl flex items-center justify-center">
                <Factory size={80} className="text-brand-300" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold-500 text-white rounded-xl px-6 py-4 shadow-lg">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-50/50" id="products">
        <div className="container-page">
          <h2 className="section-title">{t('productsTitle')}</h2>
          <p className="section-subtitle">{t('productsDesc')}</p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((p) => (
              <Link key={p.title} href="/products" className="group bg-white rounded-xl p-6 border border-brand-100 hover:border-brand-300 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-brand-100 group-hover:bg-brand-200 transition-colors flex items-center justify-center mb-4">
                  <Package size={24} className="text-brand-600" />
                </div>
                <h3 className="font-semibold text-brand-800 mb-2">{p.title}</h3>
                <p className="text-sm text-brand-600 leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/products"><Button variant="secondary">{tn('products')}<ArrowRight size={16} className="ml-2" /></Button></Link>
          </div>
        </div>
      </section>

      <section className="section-padding" id="factory">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 to-brand-50 rounded-2xl flex items-center justify-center">
                <Factory size={80} className="text-brand-300" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="section-title text-left">{t('factoryTitle')}</h2>
              <p className="mt-4 text-brand-700/80 leading-relaxed">{t('factoryDesc')}</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[{ num: '50000', label: 'm2 占地面积' },{ num: '8', label: '条生产线' },{ num: '300+', label: '员工人数' },{ num: '98%', label: '良品率' }].map((item) => (
                  <div key={item.label} className="bg-brand-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-brand-800">{item.num}</div>
                    <div className="text-sm text-brand-600">{item.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/factory" className="inline-block mt-8">
                <Button variant="primary">{tn('factory')}<ArrowRight size={16} className="ml-2" /></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-800 text-white text-center" id="cta">
        <div className="container-page max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">{t('ctaTitle')}</h2>
          <p className="mt-4 text-brand-300 text-lg">{t('ctaDesc')}</p>
          <Link href="/contact" className="inline-block mt-8">
            <Button variant="gold" size="lg">{t('ctaButton')}<ArrowRight size={20} className="ml-2" /></Button>
          </Link>
        </div>
      </section>
    </>
  );
}