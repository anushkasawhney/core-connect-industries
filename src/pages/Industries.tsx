import { motion } from "framer-motion";
import { industries } from "@/data/products";
import { Building2, Sprout, Factory, FlaskConical, Fuel, Car } from "lucide-react";
import AnimatedHero from "@/components/AnimatedHero";
import heroIndustries from "@/assets/hero-industries.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const iconMap: Record<string, React.ElementType> = { Building2, Sprout, Factory, FlaskConical, Fuel, Car };

const industryImages = [heroBg, heroIndustries, heroBg, heroIndustries, heroBg, heroIndustries];

const Industries = () => (
  <main>
    <AnimatedHero
      image={heroIndustries}
      badge="Sector Expertise"
      title="Industries We Serve"
      subtitle="Delivering mission-critical industrial flow solutions to diverse sectors across India."
    />
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => {
            const Icon = iconMap[ind.icon] || Factory;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-xl overflow-hidden group"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <motion.img
                    src={industryImages[i % industryImages.length]}
                    alt={ind.name}
                    className="w-full h-full object-cover"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 bg-navy-dark/80 group-hover:bg-navy-dark/70 transition-colors" />
                </div>
                <div className="relative p-8 min-h-[220px] flex flex-col justify-end">
                  <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4">
                    <Icon size={26} className="text-primary-foreground/80" />
                  </div>
                  <h3 className="font-heading font-semibold text-primary-foreground text-lg">{ind.name}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/60">{ind.description}</p>
                  <Link to="/products" className="mt-3 inline-flex text-sm font-medium text-highlight">View Products →</Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  </main>
);

export default Industries;
