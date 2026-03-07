import { motion } from "framer-motion";
import { industries } from "@/data/products";
import { Building2, Sprout, Factory, FlaskConical, Fuel, Car } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedHero from "@/components/AnimatedHero";
import heroIndustries from "@/assets/hero-industries.jpg";
import { Link } from "react-router-dom";

const iconMap: Record<string, React.ElementType> = { Building2, Sprout, Factory, FlaskConical, Fuel, Car };

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
                className="glass-card hover-lift p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-highlight/10 flex items-center justify-center mb-4">
                  <Icon size={26} className="text-highlight" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg">{ind.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{ind.description}</p>
                <Link to="/products" className="mt-3 inline-flex text-sm font-medium text-highlight">View Products →</Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  </main>
);

export default Industries;
