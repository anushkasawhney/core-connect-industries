import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import AnimatedHero from "@/components/AnimatedHero";
import heroAbout from "@/assets/hero-about.jpg";
import journeyHero from "@/assets/journey-hero.jpg";
import { Eye, Target, Award, Building2, Users } from "lucide-react";

const timelineEvents = [
  { year: "1984", title: "Company Founded", desc: "Started as a small trading firm supplying industrial rubber products." },
  { year: "1995", title: "Expanded Product Range", desc: "Added industrial hoses and gasket solutions to the product portfolio." },
  { year: "2005", title: "Pan-India Operations", desc: "Established distribution network across 15+ states." },
  { year: "2012", title: "Quality Certifications", desc: "Achieved ISO 9001 certification for quality management systems." },
  { year: "2018", title: "1000+ Client Milestone", desc: "Crossed 1000 active industrial clients across diverse sectors." },
  { year: "2024", title: "40 Years of Excellence", desc: "Celebrating four decades of engineering trust and reliability." },
];

const About = () => (
  <main>
    <AnimatedHero image={heroAbout} badge="Our Story" title="About Us" subtitle="Four decades of engineering industrial flow solutions with trust, precision, and reliability." />

    <section className="section-padding bg-card">
      <div className="container-wide mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <AnimatedCounter end={40} suffix="+" label="Years Experience" />
        <AnimatedCounter end={1000} suffix="+" label="Clients Served" />
        <AnimatedCounter end={500} suffix="+" label="Products" />
        <AnimatedCounter end={28} suffix="" label="States" />
      </div>
    </section>

    {/* Journey with 3D image */}
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <SectionHeading title="Our Journey" subtitle="From a small trading firm to a pan-India industrial solutions provider." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="relative rounded-xl overflow-hidden industrial-shadow aspect-[4/3]" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <motion.img src={journeyHero} alt="40 years of industrial heritage" className="w-full h-full object-cover" animate={{ scale: [1, 1.04, 1, 1.03, 1], rotateY: [0, 1.5, -1.5, 1, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="font-heading text-5xl font-bold text-primary-foreground">40+</span>
              <p className="text-primary-foreground/70 text-sm mt-1">Years of Excellence</p>
            </div>
          </motion.div>
          <div>
            {timelineEvents.map((event, i) => (
              <motion.div key={event.year} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex gap-4 mb-6 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full gradient-navy flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-heading font-bold text-[10px]">{event.year}</span>
                  </div>
                  {i < timelineEvents.length - 1 && <div className="w-0.5 h-full bg-border mt-1" />}
                </div>
                <div className="pb-4">
                  <h3 className="font-heading font-semibold text-foreground text-sm">{event.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-surface">
      <div className="container-wide mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { icon: Eye, title: "Our Vision", desc: "To be India's most trusted industrial solutions partner, known for product quality, technical expertise, and reliable supply chain performance." },
          { icon: Target, title: "Our Mission", desc: "To empower industries with high-quality engineering products and exceptional service, enabling operational efficiency and safety across every application." },
        ].map((item) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8">
            <div className="w-12 h-12 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
              <item.icon size={22} className="text-highlight" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">{item.title}</h3>
            <p className="mt-3 text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <SectionHeading title="Quality Commitment" subtitle="Our unwavering commitment to quality drives everything we do." />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Award, title: "ISO 9001 Certified", desc: "Our quality management system meets international standards." },
            { icon: Building2, title: "Modern Infrastructure", desc: "State-of-the-art warehousing and testing facilities." },
            { icon: Users, title: "Expert Team", desc: "Experienced engineers and product specialists at your service." },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card hover-lift p-6 text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-highlight/10 flex items-center justify-center mb-4">
                <item.icon size={24} className="text-highlight" />
              </div>
              <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
