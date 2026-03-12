import { Phone, Mail, MapPin, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import AnimatedHero from "@/components/AnimatedHero";

const HEAD_OFFICE_MAP = "https://maps.app.goo.gl/eK1AxJAGvXwEWZSM8?g_st=aw";
const BRANCH_OFFICE_MAP = "https://maps.app.goo.gl/CsVDrGLFCGBMjX836?g_st=aw";

const Contact = () => (
  <main>
    <AnimatedHero
      image={heroBg}
      badge="Get In Touch"
      title="Contact Us"
      subtitle="Get in touch for product enquiries, quotes, and technical support."
    />

    <section className="section-padding bg-background">
      <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Reach Us</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <a href={HEAD_OFFICE_MAP} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center shrink-0 hover:bg-highlight/20 transition-colors">
                <MapPin size={18} className="text-highlight" />
              </a>
              <div>
                <h4 className="font-heading font-semibold text-foreground text-sm">Head Office</h4>
                <p className="text-sm text-muted-foreground">4-3-82, First Floor, Hill Street</p>
                <p className="text-sm text-muted-foreground">Ranigunj, Secunderabad - 500003</p>
                <p className="text-sm text-muted-foreground">Telangana, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <a href={BRANCH_OFFICE_MAP} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center shrink-0 hover:bg-highlight/20 transition-colors">
                <MapPin size={18} className="text-highlight" />
              </a>
              <div>
                <h4 className="font-heading font-semibold text-foreground text-sm">Branch Office</h4>
                <p className="text-sm text-muted-foreground">H.No.7-109/1, Kompally</p>
                <p className="text-sm text-muted-foreground">Near Dhola-ri-Dhani / RCI Logistics</p>
                <p className="text-sm text-muted-foreground">Kompally Dundigal, Gandimaisamma (Mandal)</p>
                <p className="text-sm text-muted-foreground">Medchal District - 500100</p>
              </div>
            </div>
            {[
              { icon: Phone, title: "Phone", lines: ["+91 22 1234 5678", "+91 98765 43210"] },
              { icon: Mail, title: "Email", lines: ["info@duponindustrial.com", "sales@duponindustrial.com"] },
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

          {/* Google Maps */}
          <div className="mt-8 space-y-6">
            <div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-2">Head Office — Ranigunj, Secunderabad</h4>
              <div className="rounded-lg overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.4983!3d17.4399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a21bfffffff%3A0x1234567890abcdef!2sHill%20Street%2C%20Ranigunj%2C%20Secunderabad%2C%20Telangana%20500003!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Head Office Location"
                />
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-2">Branch Office — Kompally, Medchal</h4>
              <div className="rounded-lg overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.5!2d78.4876!3d17.5234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a22ffffffff%3A0xfedcba0987654321!2sKompally%2C%20Hyderabad%2C%20Telangana%20500100!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Branch Office Location"
                />
              </div>
            </div>
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
