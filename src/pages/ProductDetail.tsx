import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productCategories } from "@/data/products";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import { ChevronRight } from "lucide-react";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productCategories.find((p) => p.slug === slug);
  const [activeSub, setActiveSub] = useState<string | null>(null);

  if (!product) return (
    <main className="pt-20 section-padding text-center">
      <h1 className="font-heading text-2xl font-bold text-foreground">Product not found</h1>
      <Link to="/products" className="text-highlight mt-4 inline-block">← Back to Products</Link>
    </main>
  );

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding gradient-navy">
        <div className="container-wide mx-auto">
          <div className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-6">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-primary-foreground">Products</Link>
            <ChevronRight size={14} />
            <span className="text-primary-foreground">{product.name}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">{product.name}</h1>
        </div>
      </section>

      {/* Product Info */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Product Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{product.fullDescription}</p>
          </div>
          <div className="rounded-lg overflow-hidden industrial-shadow">
            <img src={product.image} alt={product.name} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-padding bg-surface">
        <div className="container-wide mx-auto">
          <SectionHeading title="Technical Specifications" align="left" />
          <div className="overflow-x-auto">
            <table className="w-full max-w-2xl text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-heading font-semibold text-foreground">Parameter</th>
                  <th className="text-left py-3 px-4 font-heading font-semibold text-foreground">Value</th>
                </tr>
              </thead>
              <tbody>
                {product.specifications.map((spec) => (
                  <tr key={spec.label} className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground font-medium">{spec.label}</td>
                    <td className="py-3 px-4 text-foreground">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading title="Product Variants" subtitle="Click on a category to view details." />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {product.subcategories.map((sub) => (
              <motion.button
                key={sub.id}
                onClick={() => setActiveSub(activeSub === sub.id ? null : sub.id)}
                className={`p-4 rounded-lg border text-left transition-colors ${
                  activeSub === sub.id ? "border-highlight bg-highlight/5" : "border-border hover:border-highlight/50 bg-card"
                }`}
                layout
              >
                <h4 className="font-heading font-semibold text-foreground text-sm">{sub.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{sub.description}</p>
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {activeSub && (() => {
              const sub = product.subcategories.find((s) => s.id === activeSub);
              if (!sub) return null;
              return (
                <motion.div
                  key={sub.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 overflow-hidden"
                >
                  <div className="glass-card p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <img src={sub.image} alt={sub.name} className="rounded-lg w-full h-64 object-cover" />
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">{sub.name}</h3>
                      <p className="mt-3 text-muted-foreground leading-relaxed">{sub.details}</p>
                      <Link to="/contact" className="inline-flex mt-4 px-6 py-2.5 rounded-md gradient-navy text-primary-foreground font-medium text-sm">
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>
      </section>

      {/* Enquiry */}
      <section className="section-padding bg-surface">
        <div className="container-wide mx-auto max-w-3xl">
          <SectionHeading title="Product Enquiry" subtitle="Interested in this product? Send us your requirements." />
          <div className="glass-card p-6 md:p-8">
            <EnquiryForm productName={product.name} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
