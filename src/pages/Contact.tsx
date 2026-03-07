import { Phone, Mail, MapPin, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import AnimatedHero from "@/components/AnimatedHero";

const Contact = () => (
  <main>
    <AnimatedHero
      image={heroBg}
      badge="Get In Touch"
      title="Contact Us"
      subtitle="Get in touch for product enquiries, quotes, and technical support."
    />

    {/* Contact Info + Form */}
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Reach Us</h2>
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Office Address", lines: ["123 Industrial Area, Phase II", "Mumbai, Maharashtra 400001", "India"] },
              { icon: Phone, title: "Phone", lines: ["+91 22 1234 5678", "+91 98765 43210"] },
              { icon: Mail, title: "Email", lines: ["info@industrialengineering.com", "sales@industrialengineering.com"] },
              { icon: Clock, title: "Business Hours", lines: ["Monday – Saturday: 9:00 AM – 6:00 PM", "Sunday: Closed"] },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-highlight" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground text-sm">{item.title}</h4>
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="mt-8 rounded-lg overflow-hidden border border-border h-64 bg-muted flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Google Maps integration available</p>
          </div>
        </div>

        <div>
          <div className="glass-card p-6 md:p-8">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">Send Enquiry</h3>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Contact;
