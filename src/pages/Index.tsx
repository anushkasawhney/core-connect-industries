import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Shield, Package, Lightbulb, Truck, IndianRupee, Handshake, Building2, Sprout, Factory, FlaskConical, Fuel, Car, Phone, Mail, MapPin, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { productCategories, industries } from "@/data/products";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";

const iconMap: Record<string, React.ElementType> = { Building2, Sprout, Factory, FlaskConical, Fuel, Car };

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 origin-center"
          initial={{ scale: 1.3, rotateX: 8, rotateY: -5 }}
          animate={{ scale: 1, rotateX: 0, rotateY: 0 }}
          transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ perspective: 1200, transformStyle: "preserve-3d" }}
        >
          <motion.img
            src={heroBg}
            alt="Industrial engineering background"
            className="w-full h-full object-cover"
            animate={{
              scale: [1, 1.06, 1, 1.04, 1],
              rotateY: [0, 3, -3, 2, 0],
              rotateX: [0, -2, 2, -1, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-navy-dark/80" />
        </motion.div>
        <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary-foreground/20 text-primary-foreground/70 text-sm font-medium mb-6">
              40+ Years of Industrial Excellence
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto">
              Engineering Industrial Flow Solutions
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
              Trusted supplier of industrial hoses, rubber moulding and gasket solutions for over 40 years.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="px-8 py-4 rounded-md bg-highlight text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
                View Products
              </Link>
              <Link to="/contact" className="px-8 py-4 rounded-md border border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors">
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={28} className="text-primary-foreground/50" />
        </motion.div>
      </section>

      {/* Trust Stats */}
      <section className="section-padding bg-card">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={40} suffix="+" label="Years Industry Experience" />
            <AnimatedCounter end={1000} suffix="+" label="Industrial Clients" />
            <AnimatedCounter end={500} suffix="+" label="Product Variants" />
            <AnimatedCounter end={28} suffix="" label="States Supplied" />
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading title="Our Product Range" subtitle="Comprehensive range of industrial hoses, gaskets, rubber components and sealing solutions." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat, i) => (
              <motion.div key={cat.id} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Link to={`/products/${cat.slug}`} className="block group glass-card hover-lift overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-foreground text-lg">{cat.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{cat.description}</p>
                    <span className="mt-3 inline-flex text-sm font-medium text-highlight">Learn More →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding gradient-navy">
        <div className="container-wide mx-auto">
          <SectionHeading title="Industries We Serve" subtitle="Delivering engineered solutions across diverse industrial sectors." light />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Factory;
              return (
                <motion.div key={ind.name} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="text-center group">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-highlight/20 transition-colors">
                    <Icon size={28} className="text-primary-foreground/80" />
                  </div>
                  <h3 className="mt-3 font-heading font-semibold text-primary-foreground text-sm">{ind.name}</h3>
                  <p className="mt-1 text-xs text-primary-foreground/50 hidden md:block">{ind.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading title="Why Choose Us" subtitle="Four decades of trust, expertise, and engineering excellence." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "40+ Years Expertise", desc: "Decades of deep industry knowledge and technical understanding." },
              { icon: Package, title: "Large Inventory", desc: "Extensive stock of products ready for immediate dispatch." },
              { icon: Lightbulb, title: "Technical Knowledge", desc: "Expert product selection guidance for your application." },
              { icon: Truck, title: "Reliable Supply Chain", desc: "Pan-India distribution network ensuring on-time delivery." },
              { icon: IndianRupee, title: "Competitive Pricing", desc: "Best value through strong manufacturer partnerships." },
              { icon: Handshake, title: "Supplier Network", desc: "Partnerships with leading global and domestic manufacturers." },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card hover-lift p-6">
                <div className="w-12 h-12 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-highlight" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-surface">
        <div className="container-wide mx-auto">
          <SectionHeading title="Get In Touch" subtitle="Have a requirement? Contact us for a quick quote." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-highlight mt-1 shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold text-foreground">Address</h4>
                  <p className="text-sm text-muted-foreground">123 Industrial Area, Phase II, Mumbai, Maharashtra 400001, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-highlight mt-1 shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold text-foreground">Phone</h4>
                  <p className="text-sm text-muted-foreground">+91 22 1234 5678</p>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-highlight mt-1 shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold text-foreground">Email</h4>
                  <p className="text-sm text-muted-foreground">info@industrialengineering.com</p>
                  <p className="text-sm text-muted-foreground">sales@industrialengineering.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={20} className="text-highlight mt-1 shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold text-foreground">Business Hours</h4>
                  <p className="text-sm text-muted-foreground">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-heading font-semibold text-foreground text-lg mb-6">Send Us an Enquiry</h3>
              <EnquiryForm compact />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
