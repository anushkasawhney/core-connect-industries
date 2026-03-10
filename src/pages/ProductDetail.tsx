import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productCategories } from "@/data/products";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import AnimatedHero from "@/components/AnimatedHero";
import { ChevronRight } from "lucide-react";

const subcategoryGradients = [
  "bg-gradient-to-br from-slate-800/70 via-zinc-700/50 to-gray-800/60",
  "bg-gradient-to-br from-blue-900/70 via-cyan-800/50 to-sky-900/60",
  "bg-gradient-to-br from-amber-900/70 via-orange-800/50 to-yellow-900/60",
  "bg-gradient-to-br from-teal-900/70 via-emerald-800/50 to-cyan-900/60",
  "bg-gradient-to-br from-indigo-900/70 via-blue-800/50 to-violet-900/60",
  "bg-gradient-to-br from-red-900/70 via-rose-800/50 to-orange-900/60",
  "bg-gradient-to-br from-green-900/70 via-emerald-800/50 to-lime-900/60",
  "bg-gradient-to-br from-purple-900/70 via-violet-800/50 to-fuchsia-900/60",
  "bg-gradient-to-br from-orange-900/70 via-red-800/50 to-amber-900/60",
  "bg-gradient-to-br from-emerald-900/70 via-green-800/50 to-teal-900/60",
  "bg-gradient-to-br from-cyan-900/70 via-blue-800/50 to-indigo-900/60",
  "bg-gradient-to-br from-yellow-900/70 via-amber-800/50 to-orange-900/60",
];

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productCategories.find((p) => p.slug === slug);
  const [activeSub, setActiveSub] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!product) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % product.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [product]);

  if (!product) return (
    <main className="pt-20 section-padding text-center">
      <h1 className="font-heading text-2xl font-bold text-foreground">Product not found</h1>
      <Link to="/products" className="text-highlight mt-4 inline-block">← Back to Products</Link>
    </main>
  );

  return (
    <main>
      <AnimatedHero
        image={product.images[0]}
        badge="Our Products"
        title={product.name}
        subtitle={product.tagline}
      />

      {/* Product Images + Name/Tagline */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden industrial-shadow">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={product.images[currentImage]}
                alt={`${product.name} - Image ${currentImage + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">{product.name}</h3>
              <p className="text-primary-foreground/70 text-sm mt-1 italic">{product.tagline}</p>
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              {product.images.map((_, i) => (
                <button key={i} onClick={() => setCurrentImage(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentImage ? "bg-highlight" : "bg-primary-foreground/50"}`} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <ChevronRight size={14} />
              <Link to="/products" className="hover:text-foreground">Products</Link>
              <ChevronRight size={14} />
              <span className="text-foreground">{product.name}</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{product.name}</h2>
            <p className="mt-2 text-lg text-highlight font-medium italic">{product.tagline}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{product.fullDescription}</p>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-surface">
        <div className="container-wide mx-auto">
          <SectionHeading title="Technical Specifications" align="left" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
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
            <div className="rounded-lg overflow-hidden border border-border bg-card p-4">
              <p className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wider">Technical Drawing</p>
              <img src={product.technicalDrawing} alt={`${product.name} technical drawing`} className="w-full h-auto rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Variants - Industries-style expandable */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading title="Product Variants" subtitle="Click on a category to view detailed information and applications." />

          {/* Active Subcategory Detail */}
          <AnimatePresence mode="wait">
            {activeSub !== null && (() => {
              const sub = product.subcategories[activeSub];
              if (!sub) return null;
              return (
                <motion.div
                  key={sub.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8 overflow-hidden"
                >
                  <div className="relative rounded-xl overflow-hidden min-h-[380px]">
                    <div className="absolute inset-0">
                      <motion.img
                        src={sub.image}
                        alt={sub.name}
                        className="w-full h-full object-cover"
                        animate={{ scale: [1, 1.05, 1, 1.03, 1] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <div className={`absolute inset-0 ${subcategoryGradients[activeSub % subcategoryGradients.length]}`} />
                    </div>
                    <div className="relative p-8 md:p-12 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 items-center min-h-[380px]">
                      {/* Left: Name */}
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <h3 className="font-heading font-bold text-primary-foreground text-2xl md:text-3xl leading-tight">{sub.name}</h3>
                        <p className="mt-2 text-sm text-primary-foreground/60 italic">{sub.description}</p>
                        <Link
                          to="/contact"
                          className="mt-5 inline-flex px-6 py-2.5 rounded-md bg-highlight text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                        >
                          Enquire Now
                        </Link>
                      </motion.div>
                      {/* Right: Details + Applications */}
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <p className="text-primary-foreground/90 leading-relaxed">{sub.details}</p>
                        {sub.applications && (
                          <div className="mt-5">
                            <h4 className="text-sm font-heading font-semibold text-primary-foreground/70 uppercase tracking-wider mb-2">Applications</h4>
                            <p className="text-primary-foreground/80 leading-relaxed">{sub.applications}</p>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>

          {/* Subcategory Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.subcategories.map((sub, i) => (
              <motion.button
                key={sub.id}
                onClick={() => setActiveSub(activeSub === i ? null : i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`relative rounded-xl overflow-hidden group text-left transition-all min-h-[180px] ${
                  activeSub === i ? "ring-2 ring-highlight" : ""
                }`}
              >
                <div className="absolute inset-0">
                  <img src={sub.image} alt={sub.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-navy-dark/50 group-hover:bg-navy-dark/40 transition-colors" />
                </div>
                <div className="relative p-5 flex flex-col justify-end min-h-[180px]">
                  <h4 className="font-heading font-semibold text-primary-foreground text-sm leading-tight">{sub.name}</h4>
                  <p className="text-xs text-primary-foreground/60 mt-1 line-clamp-2">{sub.description}</p>
                  <span className="mt-2 text-xs font-medium text-highlight">
                    {activeSub === i ? "Close ×" : "View Details →"}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
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
