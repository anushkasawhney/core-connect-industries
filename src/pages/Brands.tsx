import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { brands } from "@/data/products";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import AnimatedHero from "@/components/AnimatedHero";
import heroBrands from "@/assets/hero-brands.jpg";

const brandGradients = [
  "bg-gradient-to-br from-amber-900/60 via-orange-800/40 to-yellow-900/50",
  "bg-gradient-to-br from-blue-900/60 via-cyan-800/40 to-sky-900/50",
  "bg-gradient-to-br from-red-900/60 via-rose-800/40 to-orange-900/50",
  "bg-gradient-to-br from-teal-900/60 via-emerald-800/40 to-cyan-900/50",
  "bg-gradient-to-br from-indigo-900/60 via-blue-800/40 to-violet-900/50",
  "bg-gradient-to-br from-green-900/60 via-emerald-800/40 to-lime-900/50",
  "bg-gradient-to-br from-slate-800/60 via-zinc-700/40 to-gray-800/50",
  "bg-gradient-to-br from-purple-900/60 via-violet-800/40 to-fuchsia-900/50",
  "bg-gradient-to-br from-emerald-900/60 via-green-800/40 to-teal-900/50",
  "bg-gradient-to-br from-yellow-900/60 via-amber-800/40 to-orange-900/50",
  "bg-gradient-to-br from-amber-800/60 via-yellow-700/40 to-orange-800/50",
  "bg-gradient-to-br from-orange-900/60 via-red-800/40 to-amber-900/50",
];

const Brands = () => {
  const [activeBrand, setActiveBrand] = useState<number | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle hash-based navigation from other pages
  useEffect(() => {
    if (location.hash) {
      const brandId = location.hash.replace("#", "");
      const index = brands.findIndex((b) => b.id === brandId);
      if (index !== -1) {
        setActiveBrand(index);
        setTimeout(() => {
          detailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
      }
    }
  }, [location.hash]);

  const handleBrandClick = (i: number) => {
    const newVal = activeBrand === i ? null : i;
    setActiveBrand(newVal);
    if (newVal !== null) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  };

  return (
    <main>
      <AnimatedHero
        image={heroBrands}
        badge="Trusted Partners"
        title="Our Brands"
        subtitle="We partner with leading manufacturers to bring you the highest quality industrial products."
      />
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading title="Brand Partners" subtitle="Click on a brand to learn more about their products and capabilities." />

          {/* Active Brand Detail */}
          <div ref={detailRef}>
            <AnimatePresence mode="wait">
              {activeBrand !== null && (() => {
                const brand = brands[activeBrand];
                return (
                  <motion.div
                    key={brand.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 overflow-hidden"
                  >
                    <div className="relative rounded-xl overflow-hidden min-h-[420px]">
                      <div className="absolute inset-0">
                        <motion.img
                          src={brand.backgroundImage}
                          alt={brand.name}
                          className="w-full h-full object-cover"
                          animate={{ scale: [1, 1.05, 1, 1.03, 1] }}
                          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className={`absolute inset-0 ${brandGradients[activeBrand % brandGradients.length]}`} />
                      </div>
                      <div className="relative p-8 md:p-12 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-center min-h-[420px]">
                        <motion.div
                          initial={{ opacity: 0, x: -40 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="flex flex-col items-center md:items-start"
                        >
                          <div className={`w-28 h-28 rounded-2xl ${brand.bgColor} flex items-center justify-center mb-5 border border-primary-foreground/10 shadow-lg`}>
                            <img src={brand.logo} alt={brand.name} className="w-22 h-22 object-contain" />
                          </div>
                          <h2 className="font-heading font-bold text-primary-foreground text-3xl md:text-4xl">{brand.name}</h2>
                          <span className="mt-2 text-sm text-primary-foreground/60 font-medium">Authorized Distributor</span>
                          <button
                            onClick={() => {
                              const enquirySection = document.getElementById("brand-enquiry");
                              enquirySection?.scrollIntoView({ behavior: "smooth", block: "center" });
                            }}
                            className="mt-4 inline-flex px-6 py-2.5 rounded-md bg-highlight text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                          >
                            Enquire Now →
                          </button>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 40 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <p className="text-primary-foreground/90 leading-relaxed text-base">{brand.description}</p>
                          <div className="mt-6">
                            <h4 className="text-sm font-heading font-semibold text-primary-foreground/70 uppercase tracking-wider mb-2">Products Supplied</h4>
                            <div className="flex flex-wrap gap-2">
                              {brand.products.split(", ").map((product) => (
                                <span key={product} className="px-3 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-xs font-medium border border-primary-foreground/10">
                                  {product}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* Brand Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand, i) => (
              <motion.button
                key={brand.id}
                onClick={() => handleBrandClick(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`block glass-card hover-lift p-6 text-center transition-all ${
                  activeBrand === i ? "ring-2 ring-highlight shadow-lg" : ""
                }`}
              >
                <div className={`w-24 h-24 mx-auto rounded-xl ${brand.bgColor} flex items-center justify-center mb-3 overflow-hidden border border-border shadow-sm`}>
                  <motion.img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-20 h-20 object-contain"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm">{brand.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{brand.description.slice(0, 60)}...</p>
                <span className="mt-2 inline-flex text-xs font-medium text-highlight">
                  {activeBrand === i ? "Close ×" : "View Details →"}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section id="brand-enquiry" className="section-padding bg-surface">
        <div className="container-wide mx-auto max-w-3xl">
          <SectionHeading title="Brand Enquiry" subtitle={activeBrand !== null ? `Interested in ${brands[activeBrand].name} products? Send us your requirements.` : "Interested in any of our brand products? Send us your requirements."} />
          <div className="glass-card p-6 md:p-8">
            <EnquiryForm productName={activeBrand !== null ? `${brands[activeBrand].name} Products` : undefined} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Brands;
