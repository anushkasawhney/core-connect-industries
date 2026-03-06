import { useParams, Link } from "react-router-dom";
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
    <main className="pt-20">
      <section className="section-padding gradient-navy">
        <div className="container-wide mx-auto">
          <div className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-6">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <ChevronRight size={14} />
            <Link to="/brands" className="hover:text-primary-foreground">Brands</Link>
            <ChevronRight size={14} />
            <span className="text-primary-foreground">{brand.name}</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
              <span className="font-heading font-bold text-primary-foreground text-3xl">{brand.name.slice(0, 2)}</span>
            </div>
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">{brand.name}</h1>
              <p className="mt-2 text-primary-foreground/70">Authorized distributor</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">About {brand.name}</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">{brand.description}</p>
          <h3 className="font-heading text-xl font-bold text-foreground mb-3">Products Supplied</h3>
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
