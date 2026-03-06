import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { productCategories } from "@/data/products";
import productsHero from "@/assets/products-hero.jpg";
import SectionHeading from "@/components/SectionHeading";

const Products = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="section-padding gradient-navy">
      <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full border border-primary-foreground/20 text-primary-foreground/70 text-sm mb-4">Our Products</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
            Comprehensive Industrial Product Range
          </h1>
          <p className="mt-4 text-primary-foreground/70 text-lg">
            From industrial hoses and hydraulic assemblies to precision gaskets and custom rubber components — we supply engineering solutions that keep industries moving.
          </p>
          <Link to="/contact" className="inline-flex mt-6 px-6 py-3 rounded-md bg-highlight text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
            Request Quote
          </Link>
        </div>
        <div className="rounded-lg overflow-hidden industrial-shadow">
          <img src={productsHero} alt="Industrial products range" className="w-full h-auto" />
        </div>
      </div>
    </section>

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
              <Link to={`/products/${cat.slug}`} className="block group glass-card hover-lift overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground text-lg">{cat.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{cat.description}</p>
                  <span className="mt-3 inline-flex text-sm font-medium text-highlight">View Details →</span>
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
