import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shield, Package, Lightbulb, Truck, IndianRupee, Handshake, Building2, Sprout, Factory, FlaskConical, Fuel, Car, Pill } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import journeyHero from "@/assets/journey-hero.jpg";
import { productCategories, industries, brands } from "@/data/products";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeading from "@/components/SectionHeading";

const iconMap: Record<string, React.ElementType> = { Building2, Sprout, Factory, FlaskConical, Fuel, Car, Pill };

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-80px" },
  transition: { duration: 0.5 },
};

const timelineEvents = [
  { year: "1984", title: "Company Founded", desc: "Started as a small trading firm supplying industrial rubber products." },
  { year: "1995", title: "Expanded Product Range", desc: "Added industrial hoses and gasket solutions to the portfolio." },
  { year: "2005", title: "Pan-India Operations", desc: "Established pan-India distribution network." },
  { year: "2018", title: "Trusted Industry Supplier", desc: "Became a trusted supplier for pharmaceutical, steel and heavy industries." },
  { year: "2024", title: "40 Years of Excellence", desc: "Four decades of engineering trust." },
];

const ProductImageRotator = ({ product }: { product: typeof productCategories[0] }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % product.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <div className="aspect-[4/3] overflow-hidden relative rounded-t-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={product.images[current]}
          alt={`${product.name} - Image ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-3 left-3 pointer-events-none">
        <h3 className="font-heading font-semibold text-primary-foreground text-lg drop-shadow-lg">{product.name}</h3>
      </div>
      <div className="absolute top-3 right-3 flex gap-1.5">
        {product.images.map((_, i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${i === current ? "bg-highlight" : "bg-primary-foreground/50"}`} />
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  const brandsRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 origin-center" initial={{ scale: 1.3, rotateX: 8, rotateY: -5 }} animate={{ scale: 1, rotateX: 0, rotateY: 0 }} transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }} style={{ perspective: 1200, transformStyle: "preserve-3d" }}>
          <motion.img src={heroBg} alt="Industrial engineering background" className="w-full h-full object-cover" animate={{ scale: [1, 1.06, 1, 1.04, 1], rotateY: [0, 3, -3, 2, 0], rotateX: [0, -2, 2, -1, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
          <div className="absolute inset-0 bg-navy-dark/80" />
        </motion.div>
        <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary-foreground/20 text-primary-foreground/70 text-sm font-medium mb-6">40+ Years of Industrial Excellence</span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto">Engineering Industrial Flow Solutions</h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">Trusted supplier of industrial hoses, rubber products and gasket solutions for over 40 years.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="px-8 py-4 rounded-md bg-highlight text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">View Products</Link>
              <Link to="/contact" className="px-8 py-4 rounded-md border border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors">Request Quote</Link>
            </div>
          </motion.div>
        </div>
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={28} className="text-primary-foreground/50" />
        </motion.div>
      </section>

      {/* Trust Stats */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={40} suffix="+" label="Years Industry Experience" />
          <AnimatedCounter end={1000} suffix="+" label="Industrial Clients" />
          <AnimatedCounter end={500} suffix="+" label="Product Variants" />
          <AnimatedCounter end={28} suffix="" label="States Supplied" />
        </div>
      </section>

      {/* Product Categories with rotating images */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading title="Our Product Range" subtitle="Comprehensive range of industrial hoses, gaskets, and rubber products." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat, i) => (
              <motion.div key={cat.id} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Link to={`/products/${cat.slug}`} className="block group glass-card hover-lift overflow-hidden">
                  <ProductImageRotator product={cat} />
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground line-clamp-3">{cat.description}</p>
                    <span className="mt-3 inline-flex text-sm font-medium text-highlight">Learn More →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section-padding bg-surface">
        <div className="container-wide mx-auto">
          <SectionHeading title="Our Journey" subtitle="From a small trading firm to a pan-India industrial solutions provider." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div className="relative rounded-xl overflow-hidden industrial-shadow aspect-[4/3]" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.7 }}>
              <motion.img src={journeyHero} alt="40 years of industrial heritage" className="w-full h-full object-cover" animate={{ scale: [1, 1.04, 1, 1.03, 1], rotateY: [0, 1.5, -1.5, 1, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-heading text-5xl font-bold text-primary-foreground">40+</span>
                <p className="text-primary-foreground/70 text-sm mt-1">Years of Excellence</p>
              </div>
            </motion.div>
            <div>
              {timelineEvents.map((event, i) => (
                <motion.div key={event.year} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex gap-4 mb-6 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full gradient-navy flex items-center justify-center shrink-0">
                      <span className="text-primary-foreground font-heading font-bold text-[10px]">{event.year}</span>
                    </div>
                    {i < timelineEvents.length - 1 && <div className="w-0.5 h-full bg-border mt-1" />}
                  </div>
                  <div className="pb-4">
                    <h3 className="font-heading font-semibold text-foreground text-sm">{event.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding gradient-navy">
        <div className="container-wide mx-auto">
          <SectionHeading title="Industries We Serve" subtitle="Delivering engineered solutions across diverse industrial sectors." light />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Factory;
              return (
                <Link to="/industries" key={ind.name}>
                  <motion.div {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="text-center group cursor-pointer">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-highlight/20 transition-colors">
                      <Icon size={28} className="text-primary-foreground/80" />
                    </div>
                    <h3 className="mt-3 font-heading font-semibold text-primary-foreground text-sm">{ind.name}</h3>
                    <p className="mt-1 text-xs text-primary-foreground/50 hidden md:block">{ind.description}</p>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands - Clickable icons linking to brands page */}
      <section className="section-padding bg-background" ref={brandsRef}>
        <div className="container-wide mx-auto">
          <SectionHeading title="Our Brand Partners" subtitle="Authorized distributors of leading global and domestic industrial brands." />
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {brands.map((brand, i) => (
              <motion.div key={brand.id} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Link
                  to={`/brands#${brand.id}`}
                  className="block glass-card hover-lift p-4 text-center group"
                >
                  <div className={`w-16 h-16 mx-auto rounded-xl ${brand.bgColor} flex items-center justify-center mb-2 border border-border shadow-sm`}>
                    <img src={brand.logo} alt={brand.name} className="w-12 h-12 object-contain" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground text-xs">{brand.name}</h4>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-surface">
        <div className="container-wide mx-auto">
          <SectionHeading title="Why Choose Us" subtitle="Four decades of trust, expertise, and engineering excellence." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "40+ Years Expertise", desc: "Decades of deep industry knowledge and technical understanding." },
              { icon: Package, title: "Large Inventory", desc: "Extensive stock of products ready for immediate dispatch." },
              { icon: Lightbulb, title: "Technical Knowledge", desc: "Expert product selection guidance for your application." },
              { icon: Truck, title: "Reliable Supply Chain", desc: "Pan-India distribution network ensuring on-time delivery." },
              { icon: IndianRupee, title: "Competitive Pricing", desc: "Best value through strong manufacturer partnerships." },
              { icon: Handshake, title: "Supplier Network", desc: "Partnerships with leading global and domestic manufacturers." },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card hover-lift p-6">
                <div className="w-12 h-12 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-highlight" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
