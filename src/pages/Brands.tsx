import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { brands } from "@/data/products";
import SectionHeading from "@/components/SectionHeading";
import AnimatedHero from "@/components/AnimatedHero";
import heroBrands from "@/assets/hero-brands.jpg";

const Brands = () => (
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link to={`/brands/${brand.id}`} className="block glass-card hover-lift p-6 text-center">
                <div className="w-16 h-16 mx-auto rounded-full gradient-navy flex items-center justify-center mb-3">
                  <span className="font-heading font-bold text-primary-foreground text-lg">{brand.name.slice(0, 2)}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm">{brand.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{brand.description.slice(0, 60)}...</p>
                <span className="mt-2 inline-flex text-xs font-medium text-highlight">View Details →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Brands;
