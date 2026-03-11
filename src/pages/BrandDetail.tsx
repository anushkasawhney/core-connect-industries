import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { brands } from "@/data/products";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import { ChevronRight } from "lucide-react";

const BrandDetail = () => {
  const { id } = useParams();
  const brand = brands.find((b) => b.id === id);

  if (!brand) return (
    <main className="pt-20 section-padding text-center">
      <h1 className="font-heading text-2xl font-bold text-foreground">Brand not found</h1>
      <Link to="/brands" className="text-highlight mt-4 inline-block">← Back to Brands</Link>
    </main>
  );

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden pt-14">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-accent">
          {[...Array(6)].map((_, i) => (
            <motion.img
              key={i}
              src={brand.logo}
              alt=""
              className="absolute opacity-[0.06] w-32 h-32 object-contain"
              style={{
                left: `${15 + (i % 3) * 30}%`,
                top: `${10 + Math.floor(i / 3) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0, 20, 0],
                rotate: [0, 5, 0, -5, 0],
                scale: [1, 1.1, 1, 0.95, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-muted-foreground text-sm font-medium mb-6">
              Authorized Distributor
            </span>
            <motion.div
              className="w-24 h-24 mx-auto mb-6 bg-card rounded-2xl border border-border flex items-center justify-center industrial-shadow"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src={brand.logo} alt={brand.name} className="w-20 h-20 object-contain" />
            </motion.div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
              {brand.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted partner for premium industrial products.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto max-w-3xl">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight size={14} />
            <Link to="/brands" className="hover:text-foreground">Brands</Link>
            <ChevronRight size={14} />
            <span className="text-foreground">{brand.name}</span>
          </div>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-xl bg-card border border-border flex items-center justify-center shrink-0 overflow-hidden">
              <img src={brand.logo} alt={brand.name} className="w-16 h-16 object-contain" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">{brand.name}</h2>
              <p className="text-sm text-muted-foreground">Authorized distributor</p>
            </div>
          </div>
          <h3 className="font-heading text-lg font-bold text-foreground mb-3">About {brand.name}</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">{brand.description}</p>
          <h3 className="font-heading text-lg font-bold text-foreground mb-3">Products Supplied</h3>
          <p className="text-muted-foreground">{brand.products}</p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-wide mx-auto max-w-3xl">
          <SectionHeading title="Enquiry" subtitle={`Interested in ${brand.name} products? Contact us.`} />
          <div className="glass-card p-6 md:p-8">
            <EnquiryForm productName={`${brand.name} Products`} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrandDetail;
