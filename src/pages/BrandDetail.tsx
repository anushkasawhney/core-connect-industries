import { useParams, Link } from "react-router-dom";
import { brands } from "@/data/products";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import AnimatedHero from "@/components/AnimatedHero";
import heroBrands from "@/assets/hero-brands.jpg";
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
      <AnimatedHero
        image={heroBrands}
        badge="Authorized Distributor"
        title={brand.name}
        subtitle={`Trusted partner for premium industrial products.`}
      />

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
            <div className="w-20 h-20 rounded-xl gradient-navy flex items-center justify-center shrink-0">
              <span className="font-heading font-bold text-primary-foreground text-2xl">{brand.name.slice(0, 2)}</span>
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
