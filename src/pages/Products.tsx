import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { productCategories } from "@/data/products";
import heroProducts from "@/assets/hero-products.jpg";
import SectionHeading from "@/components/SectionHeading";
import AnimatedHero from "@/components/AnimatedHero";
import SEO from "@/components/SEO";

const ProductImageRotator = ({ images, name }: { images: string[]; name: string }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCurrent((p) => (p + 1) % images.length), 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="aspect-[4/3] overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${name} - Image ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
      <div className="absolute bottom-3 left-3">
        <h3 className="font-heading font-semibold text-primary-foreground text-lg drop-shadow-lg">{name}</h3>
      </div>
      <div className="absolute top-3 right-3 flex gap-1.5">
        {images.map((_, i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${i === current ? "bg-highlight" : "bg-primary-foreground/50"}`} />
        ))}
      </div>
    </div>
  );
};

const Products = () => (
  <main>
    <SEO
      title="Products"
      description="Browse our comprehensive range of industrial hoses, hydraulic assemblies, gaskets, and custom rubber components. Pan-India supplier with 500+ product variants."
      canonical="/products"
    />
    <AnimatedHero
      image={heroProducts}
      badge="Our Products"
      title="Comprehensive Industrial Product Range"
      subtitle="From industrial hoses and hydraulic assemblies to precision gaskets and custom rubber components — we supply engineering solutions that keep industries moving."
      ctaText="Request Quote"
      ctaLink="/contact"
    />

    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <SectionHeading title="Product Categories" subtitle="Browse our complete range of industrial engineering products." />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {productCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/products/${cat.slug}`} className="block group glass-card overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_-10px_hsl(var(--highlight)/0.3)] hover:border-highlight/30">
                <ProductImageRotator images={cat.images} name={cat.name} />
                <div className="p-5">
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{cat.description}</p>
                  <span className="mt-3 inline-flex text-sm font-medium text-highlight group-hover:translate-x-1 transition-transform duration-300">View Details →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-surface">
      <div className="container-wide mx-auto text-center">
        <SectionHeading title="Product Catalog" subtitle="Download our comprehensive product catalog." />
        <div className="flex justify-center">
          <a href="https://drive.google.com/file/d/1ezdHh488hmbeyBR0kei4CgaOuVnpZ4WZ/view" target="_blank" className="px-8 py-4 rounded-md gradient-navy text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity inline-block">
            Download Product Catalog
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default Products;
