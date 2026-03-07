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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link to={`/brands/${brand.id}`} className="block glass-card hover-lift p-8 text-center">
                <div className="w-20 h-20 mx-auto rounded-full gradient-navy flex items-center justify-center mb-4">
                  <span className="font-heading font-bold text-primary-foreground text-xl">{brand.name.slice(0, 2)}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg">{brand.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{brand.description.slice(0, 80)}...</p>
                <span className="mt-3 inline-flex text-sm font-medium text-highlight">View Details →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Brands;
