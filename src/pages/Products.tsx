import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { productCategories } from "@/data/products";
import heroProducts from "@/assets/hero-products.jpg";
import SectionHeading from "@/components/SectionHeading";
import AnimatedHero from "@/components/AnimatedHero";

const Products = () => (
  <main>
    <AnimatedHero
      image={heroProducts}
      badge="Our Products"
      title="Comprehensive Industrial Product Range"
      subtitle="From industrial hoses and hydraulic assemblies to precision gaskets and custom rubber components — we supply engineering solutions that keep industries moving."
      ctaText="Request Quote"
      ctaLink="/contact"
    />

    {/* Product Grid */}
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <SectionHeading title="Product Categories" subtitle="Browse our complete range of industrial engineering products." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/products/${cat.slug}`} className="block group glass-card overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_-10px_hsl(var(--highlight)/0.3)] hover:border-highlight/30">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground text-lg group-hover:text-highlight transition-colors duration-300">{cat.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{cat.description}</p>
                  <span className="mt-3 inline-flex text-sm font-medium text-highlight group-hover:translate-x-1 transition-transform duration-300">View Details →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Catalog Download */}
    <section className="section-padding bg-surface">
      <div className="container-wide mx-auto text-center">
        <SectionHeading title="Product Catalog" subtitle="Download our comprehensive product catalog and technical specifications." />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-md gradient-navy text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            Download Product Catalog
          </button>
          <button className="px-8 py-4 rounded-md border border-border text-foreground font-semibold text-sm hover:bg-accent transition-colors">
            Download Technical Specifications
          </button>
        </div>
      </div>
    </section>
  </main>
);

export default Products;
