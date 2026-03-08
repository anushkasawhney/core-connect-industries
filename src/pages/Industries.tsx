import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { industries } from "@/data/products";
import { Building2, Sprout, Factory, FlaskConical, Fuel, Car } from "lucide-react";
import AnimatedHero from "@/components/AnimatedHero";
import heroIndustries from "@/assets/hero-industries.jpg";

const iconMap: Record<string, React.ElementType> = { Building2, Sprout, Factory, FlaskConical, Fuel, Car };

const industryGradients = [
  "bg-gradient-to-br from-amber-900/60 via-orange-800/40 to-yellow-900/50",   // Construction
  "bg-gradient-to-br from-green-900/60 via-emerald-800/40 to-lime-900/50",    // Agriculture
  "bg-gradient-to-br from-slate-800/60 via-zinc-700/40 to-gray-800/50",       // Manufacturing
  "bg-gradient-to-br from-purple-900/60 via-violet-800/40 to-fuchsia-900/50", // Chemical
  "bg-gradient-to-br from-red-900/60 via-orange-900/40 to-amber-900/50",      // Oil & Gas
  "bg-gradient-to-br from-blue-900/60 via-cyan-800/40 to-sky-900/50",         // Automotive
];

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState<number>(0);

  return (
    <main>
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
                  onClick={() => setActiveIndustry(i)}
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
          <AnimatePresence mode="wait">
            {industries.map((ind, i) => {
              if (i !== activeIndustry) return null;
              const Icon = iconMap[ind.icon] || Factory;
              return (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-xl overflow-hidden min-h-[400px]"
                >
                  <div className="absolute inset-0">
                    <motion.img
                      src={ind.image}
                      alt={ind.name}
                      className="w-full h-full object-cover"
                      animate={{ scale: [1, 1.05, 1, 1.03, 1] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className={`absolute inset-0 ${industryGradients[i]}`} />
                  </div>
                  <div className="relative p-8 md:p-16 flex flex-col justify-center min-h-[400px]">
                    <div className="w-16 h-16 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                      <Icon size={32} className="text-primary-foreground/80" />
                    </div>
                    <h2 className="font-heading font-bold text-primary-foreground text-3xl md:text-4xl">{ind.name}</h2>
                    <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">{ind.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Grid of all industries */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {industries.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Factory;
              return (
                <motion.button
                  key={ind.name}
                  onClick={() => setActiveIndustry(i)}
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
                  <div className="relative p-8 min-h-[220px] flex flex-col justify-end">
                    <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4">
                      <Icon size={26} className="text-primary-foreground/80" />
                    </div>
                    <h3 className="font-heading font-semibold text-primary-foreground text-lg">{ind.name}</h3>
                    <p className="mt-2 text-sm text-primary-foreground/70">{ind.description}</p>
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
