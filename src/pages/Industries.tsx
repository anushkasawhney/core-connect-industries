import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { industries } from "@/data/products";
import { Building2, Sprout, Factory, FlaskConical, Fuel, Pill } from "lucide-react";
import AnimatedHero from "@/components/AnimatedHero";
import SEO from "@/components/SEO";
import heroIndustries from "@/assets/hero-industries.jpg";

const iconMap: Record<string, React.ElementType> = { Building2, Sprout, Factory, FlaskConical, Fuel, Pill };

const industryGradients = [
  "bg-gradient-to-br from-amber-900/60 via-orange-800/40 to-yellow-900/50",
  "bg-gradient-to-br from-green-900/60 via-emerald-800/40 to-lime-900/50",
  "bg-gradient-to-br from-cyan-900/60 via-teal-800/40 to-emerald-900/50",
  "bg-gradient-to-br from-slate-800/60 via-zinc-700/40 to-gray-800/50",
  "bg-gradient-to-br from-purple-900/60 via-violet-800/40 to-fuchsia-900/50",
  "bg-gradient-to-br from-red-900/60 via-orange-900/40 to-amber-900/50",
  "bg-gradient-to-br from-blue-900/60 via-cyan-800/40 to-sky-900/50",
];

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const handleIndustryClick = (i: number) => {
    const newVal = activeIndustry === i ? null : i;
    setActiveIndustry(newVal);
    if (newVal !== null) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  };

  return (
    <main>
      <SEO
        title="Industries We Serve"
        description="Dupon Industrial Enterprises serves construction, agriculture, manufacturing, pharmaceutical, chemical, and oil & gas industries with industrial flow solutions."
        canonical="/industries"
      />
      <AnimatedHero
        image={heroIndustries}
        badge="Sector Expertise"
        title="Industries We Serve"
        subtitle="Delivering mission-critical industrial flow solutions to diverse sectors across India."
      />
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          {/* Industry Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {industries.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Factory;
              return (
                <button
                  key={ind.name}
                  onClick={() => handleIndustryClick(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeIndustry === i
                      ? "bg-highlight text-primary-foreground shadow-md"
                      : "bg-card border border-border text-foreground hover:border-highlight/50"
                  }`}
                >
                  <Icon size={16} />
                  {ind.name}
                </button>
              );
            })}
          </div>

          {/* Active Industry Detail */}
          <div ref={detailRef}>
            <AnimatePresence mode="wait">
              {activeIndustry !== null && (() => {
                const ind = industries[activeIndustry];
                const Icon = iconMap[ind.icon] || Factory;
                return (
                  <motion.div
                    key={ind.name}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 overflow-hidden"
                  >
                    <div className="relative rounded-xl overflow-hidden min-h-[420px]">
                      <div className="absolute inset-0">
                        <motion.img
                          src={ind.image}
                          alt={ind.name}
                          className="w-full h-full object-cover"
                          animate={{ scale: [1, 1.05, 1, 1.03, 1] }}
                          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className={`absolute inset-0 ${industryGradients[activeIndustry % industryGradients.length]}`} />
                      </div>
                      <div className="relative p-8 md:p-12 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-center min-h-[420px]">
                        {/* Left: Name */}
                        <motion.div
                          initial={{ opacity: 0, x: -40 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <div className="w-16 h-16 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4">
                            <Icon size={32} className="text-primary-foreground/80" />
                          </div>
                          <h2 className="font-heading font-bold text-primary-foreground text-3xl md:text-4xl">{ind.name}</h2>
                          <p className="mt-2 text-sm text-primary-foreground/60">{ind.description}</p>
                        </motion.div>
                        {/* Right: Details + Brand Contribution */}
                        <motion.div
                          initial={{ opacity: 0, x: 40 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <p className="text-primary-foreground/90 leading-relaxed">{ind.details}</p>
                          <div className="mt-5">
                            <h4 className="text-sm font-heading font-semibold text-primary-foreground/70 uppercase tracking-wider mb-2">Our Contribution</h4>
                            <p className="text-primary-foreground/80 leading-relaxed">{ind.brandContribution}</p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* Grid of all industries */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {industries.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Factory;
              return (
                <motion.button
                  key={ind.name}
                  onClick={() => handleIndustryClick(i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative rounded-xl overflow-hidden group text-left transition-all ${
                    activeIndustry === i ? "ring-2 ring-highlight" : ""
                  }`}
                >
                  <div className="absolute inset-0">
                    <motion.img
                      src={ind.image}
                      alt={ind.name}
                      className="w-full h-full object-cover"
                      animate={{ scale: [1, 1.05, 1, 1.03, 1] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className={`absolute inset-0 ${industryGradients[i]} group-hover:opacity-80 transition-opacity`} />
                  </div>
                  <div className="relative p-4 sm:p-8 min-h-[150px] sm:min-h-[220px] flex flex-col justify-end">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-2 sm:mb-4">
                      <Icon size={20} className="text-primary-foreground/80 sm:hidden" />
                      <Icon size={26} className="text-primary-foreground/80 hidden sm:block" />
                    </div>
                    <h3 className="font-heading font-semibold text-primary-foreground text-sm sm:text-lg">{ind.name}</h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-primary-foreground/70 hidden sm:block">{ind.description}</p>
                    <span className="mt-1 sm:mt-2 text-[10px] sm:text-xs font-medium text-highlight">
                      {activeIndustry === i ? "Close ×" : "View Details →"}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Industries;
