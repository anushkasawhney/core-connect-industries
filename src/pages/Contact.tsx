import { Phone, Mail, MapPin, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import AnimatedHero from "@/components/AnimatedHero";
import SEO from "@/components/SEO";

const HEAD_OFFICE_MAP = "https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJVVVVFRyayzsRAkW7uoH7LCY";
const BRANCH_OFFICE_MAP = "https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJGSjRWEOFyzsRYGdI9qAyCSg";

const Contact = () => (
  <main>
    <SEO
      title="Contact Us"
      description="Contact Dupon Industrial Enterprises for industrial hoses, gaskets, and rubber product enquiries. Offices in Secunderabad and Kompally, Hyderabad."
      canonical="/contact"
    />
    <AnimatedHero
      image={heroBg}
      badge="Get In Touch"
      title="Contact Us"
      subtitle="Get in touch for product enquiries, quotes, and technical support."
    />

    <section className="section-padding bg-background overflow-x-hidden">
      <div className="container-wide mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 overflow-hidden">
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Reach Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <a
              href={HEAD_OFFICE_MAP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <span className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center shrink-0 group-hover:bg-highlight/20 transition-colors">
                <MapPin size={18} className="text-highlight" />
              </span>
              <div>
                <h4 className="font-heading font-semibold text-foreground text-sm">Head Office</h4>
                <p className="text-sm text-muted-foreground">4-3-82, First Floor, Hill Street</p>
                <p className="text-sm text-muted-foreground">Ranigunj, Secunderabad - 500003</p>
                <p className="text-sm text-muted-foreground">Telangana, India</p>
              </div>
            </a>
            <a
              href={BRANCH_OFFICE_MAP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <span className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center shrink-0 group-hover:bg-highlight/20 transition-colors">
                <MapPin size={18} className="text-highlight" />
              </span>
              <div>
                <h4 className="font-heading font-semibold text-foreground text-sm">Branch Office</h4>
                <p className="text-sm text-muted-foreground">H.No.7-109/1, Kompally</p>
                <p className="text-sm text-muted-foreground">Near Dhola-ri-Dhani / RCI Logistics</p>
                <p className="text-sm text-muted-foreground">Kompally Dundigal, Gandimaisamma (Mandal)</p>
                <p className="text-sm text-muted-foreground">Medchal District - 500100</p>
              </div>
            </a>
            {[
              { icon: Phone, title: "Phone", lines: ["+91 98480 18090", "+91 81798 25090"], isPhone: true, fullWidth: true },
              { icon: Mail, title: "Email", lines: ["info@duponindustrial.com", "sales@duponindustrial.com"], fullWidth: true },
              { icon: Clock, title: "Business Hours", lines: ["Monday – Saturday: 9:00 AM – 6:00 PM", "Sunday: Closed"] },
            ].map((item) => (
              <div key={item.title} className={`flex items-start gap-2 sm:gap-4 ${'fullWidth' in item && item.fullWidth ? 'col-span-2 md:col-span-1 lg:col-span-2' : ''}`}>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-highlight/10 flex items-center justify-center shrink-0">
                  <item.icon size={16} className="text-highlight sm:w-[18px] sm:h-[18px]" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-heading font-semibold text-foreground text-sm">{item.title}</h4>
                  {item.lines.map((line) => (
                    'isPhone' in item && item.isPhone ? (
                      <a key={line} href={`tel:${line.replace(/\s/g, '')}`} className="block text-sm text-muted-foreground hover:text-highlight transition-colors whitespace-nowrap">
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-sm text-muted-foreground">{line}</p>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-heading font-semibold text-foreground text-xs mb-2">Head Office — Ranigunj</h4>
              <div className="rounded-lg overflow-hidden border border-border h-40 sm:h-48 lg:h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.54234649629!2d78.48972757554903!3d17.433737201467483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a1c15555555%3A0x262cfb81babb4502!2sDUPON%20AGENCIES!5e0!3m2!1sen!2sin!4v1776241860992!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Head Office Location"
                />
              </div>
              <a
                href={HEAD_OFFICE_MAP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 text-xs text-highlight hover:text-highlight/80 font-medium transition-colors"
              >
                <MapPin size={12} /> Open in Maps
              </a>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground text-xs mb-2">Branch Office — Kompally</h4>
              <div className="rounded-lg overflow-hidden border border-border h-40 sm:h-48 lg:h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.97359719848!2d78.49086067555099!3d17.55644369791224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb854358d12819%3A0x280932a0f6486760!2sDUPON%20AGENCIES%20(KOMPALLY)%2F%20DUPON%20INDUSTRIAL%20ENTERPRISES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1776241896110!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Branch Office Location"
                />
              </div>
              <a
                href={BRANCH_OFFICE_MAP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 text-xs text-highlight hover:text-highlight/80 font-medium transition-colors"
              >
                <MapPin size={12} /> Open in Maps
              </a>
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

