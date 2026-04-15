import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, FileDown } from "lucide-react";
import companyLogo from "@/assets/company-logo.png";

const HEAD_OFFICE_MAP = "https://www.google.com/maps/place/first+floor,+DUPON+AGENCIES,+4-3-82,+Hill+St,+near+Anjaiah+Complex,+Old+Bhoiguda,+Ranigunj,+Secunderabad,+Telangana+500003/data=!4m2!3m1!1s0x3bcb9a1c15555555:0x262cfb81babb4502!17m2!4m1!1e3!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBjI2LjQuMRgAINeCAyqnASw5NDI4NjU5NCw5NDI2NzcyNyw5NDI5MjE5NSw5NDI5OTUzMiwxMDA3OTY0OTgsMTAwNzk2NTM1LDk0Mjg0NDcyLDk0MjgwNTc2LDk0MjA3Mzk0LDk0MjA3NTA2LDk0MjA4NTA2LDk0MjE4NjUzLDk0MjI5ODM5LDk0Mjc1MTY4LDk0Mjc5NjE5LDEwMDc5MjU2OCwxMDA3OTE0ODMsMTAwNzk2MTg2QgJJTg%3D%3D&skid=5bb8548f-da7c-4db9-bc84-d15f112d502e&g_st=aw";
const BRANCH_OFFICE_MAP = "https://maps.app.goo.gl/6GbuMJFYeoztHrA29";

const Footer = () => (
  <footer className="gradient-navy text-primary-foreground">
    <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Mobile left column: logo + quick links + products stacked */}
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={companyLogo} alt="Dupon Industrial Enterprises" className="w-12 h-12 rounded-full object-cover" />
              <span className="font-heading font-bold text-sm">Dupon Industrial<br className="sm:hidden" /> Enterprises</span>
            </div>
            <p className="text-primary-foreground/70 text-xs leading-relaxed">
              Trusted supplier of industrial hoses, rubber products, gaskets, and sealing solutions for over 40 years.
            </p>
            <a
              href="https://drive.google.com/file/d/1jSQh08Xamd3MLj8yKuQBWEufb6trbHnM/view"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 px-3 py-2 rounded-md gradient-navy text-primary-foreground font-semibold text-xs hover:opacity-90 transition-opacity border border-primary-foreground/20"
            >
              <FileDown size={16} />
              Company Profile
            </a>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-1.5 text-xs text-primary-foreground/70">
              {[{ to: "/", label: "Home" }, { to: "/products", label: "Products" }, { to: "/brands", label: "Brands" }, { to: "/about", label: "About Us" }, { to: "/contact", label: "Contact Us" }].map((link) => (
                <li key={link.to}><Link to={link.to} className="hover:text-primary-foreground transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3">Products</h4>
            <ul className="space-y-1.5 text-xs text-primary-foreground/70">
              {["Industrial Hoses and Pipes", "Industrial Gaskets", "Rubber Products"].map((p) => (
                <li key={p}><Link to="/products" className="hover:text-primary-foreground transition-colors">{p}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        {/* Mobile right column / Desktop 4th column: Contact */}
        <div className="col-span-1 min-w-0">
          <h4 className="font-heading font-semibold text-sm mb-3">Contact</h4>
          <ul className="space-y-2 text-xs text-primary-foreground/70">
            <li>
              <a
                href={HEAD_OFFICE_MAP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-1.5 hover:text-highlight transition-colors"
              >
                <MapPin size={12} className="mt-0.5 shrink-0" />
                <span className="break-words min-w-0">4-3-82, First Floor, Hill Street, Ranigunj, Secunderabad - 500003</span>
              </a>
            </li>
            <li>
              <a
                href={BRANCH_OFFICE_MAP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-1.5 hover:text-highlight transition-colors"
              >
                <MapPin size={12} className="mt-0.5 shrink-0" />
                <span className="break-words min-w-0">H.No.7-109/1, Kompally, Near Dhola-ri-Dhani, Medchal District - 500100</span>
              </a>
            </li>
            <li className="flex items-start gap-1.5">
              <Phone size={12} className="mt-0.5 shrink-0" />
              <span className="min-w-0">
                <a href="tel:+919848018090" className="hover:text-highlight transition-colors block">+91 98480 18090</a>
                <a href="tel:+918179825090" className="hover:text-highlight transition-colors block">+91 81798 25090</a>
              </span>
            </li>
            <li className="flex items-start gap-1.5">
              <Mail size={12} className="mt-0.5 shrink-0" />
              <span className="break-all min-w-0">info@duponindustrial.com</span>
            </li>
            <li className="flex items-start gap-1.5">
              <Mail size={12} className="mt-0.5 shrink-0" />
              <span className="break-all min-w-0">sales@duponindustrial.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Dupon Industrial Enterprises. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/contact" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
