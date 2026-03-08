import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productCategories } from "@/data/products";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import AnimatedHero from "@/components/AnimatedHero";
import { ChevronRight, ChevronLeft } from "lucide-react";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productCategories.find((p) => p.slug === slug);
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-rotate product images
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

  const scrollSubcategories = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <main>
      {/* Hero with animated background */}
      <AnimatedHero
        image={product.images[0]}
        badge="Our Products"
        title={product.name}
        subtitle={product.tagline}
      />

      {/* Product Images + Name/Tagline */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Rotating images */}
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
            {/* Image dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
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

      {/* Technical Specifications with Drawing */}
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

      {/* Subcategories with horizontal scroll */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading title="Product Variants" subtitle="Click on a category to view details." />
          
          {/* Horizontal scrollable subcategories */}
          <div className="relative">
            <button onClick={() => scrollSubcategories("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-accent transition-colors -ml-2">
              <ChevronLeft size={18} className="text-foreground" />
            </button>
            <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide px-6 py-2 scroll-smooth">
              {product.subcategories.map((sub) => (
                <motion.button
                  key={sub.id}
                  onClick={() => setActiveSub(activeSub === sub.id ? null : sub.id)}
                  className={`flex-shrink-0 w-[calc(25%-12px)] min-w-[200px] p-4 rounded-lg border text-left transition-colors ${
                    activeSub === sub.id ? "border-highlight bg-highlight/5" : "border-border hover:border-highlight/50 bg-card"
                  }`}
                  layout
                >
                  <h4 className="font-heading font-semibold text-foreground text-sm leading-tight">{sub.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{sub.description}</p>
                </motion.button>
              ))}
            </div>
            <button onClick={() => scrollSubcategories("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-accent transition-colors -mr-2">
              <ChevronRight size={18} className="text-foreground" />
            </button>
          </div>

          <AnimatePresence>
            {activeSub && (() => {
              const sub = product.subcategories.find((s) => s.id === activeSub);
              if (!sub) return null;
              return (
                <motion.div key={sub.id} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mt-6 overflow-hidden">
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
