import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import companyLogo from "@/assets/company-logo.png";

const HEAD_OFFICE_MAP = "https://www.google.com/maps/search/?api=1&query=4-3-82%2C+First+Floor%2C+Hill+Street%2C+Ranigunj%2C+Secunderabad%2C+Telangana+500003";
const BRANCH_OFFICE_MAP = "https://www.google.com/maps/search/?api=1&query=H.No.7-109%2F1%2C+Kompally%2C+Near+Dhola-ri-Dhani+%2F+RCI+Logistics%2C+Kompally+Dundigal%2C+Gandimaisamma+Mandal%2C+Medchal+District%2C+Telangana+500100";

const Footer = () => (
  <footer className="gradient-navy text-primary-foreground">
    <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={companyLogo} alt="Dupon Industrial Enterprises" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <span className="font-heading font-bold text-sm block">Dupon Industrial</span>
              <span className="text-xs text-primary-foreground/60">Enterprises</span>
            </div>
          </div>
          <p className="text-primary-foreground/70 text-xs leading-relaxed">
            Trusted supplier of industrial hoses, rubber products, gaskets, and sealing solutions for over 40 years.
          </p>
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
            {["Industrial Hose and Pipes", "Industrial Gaskets", "Rubber Products"].map((p) => (
              <li key={p}><Link to="/products" className="hover:text-primary-foreground transition-colors">{p}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-sm mb-3">Contact</h4>
          <ul className="space-y-2 text-xs text-primary-foreground/70">
            <li>
              <a
                href={HEAD_OFFICE_MAP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-highlight transition-colors"
              >
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>4-3-82, First Floor, Hill Street, Ranigunj, Secunderabad - 500003</span>
              </a>
            </li>
            <li>
              <a
                href={BRANCH_OFFICE_MAP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-highlight transition-colors"
              >
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>H.No.7-109/1, Kompally, Near Dhola-ri-Dhani / RCI Logistics, Kompally Dundigal, Gandimaisamma (Mandal), Medchal District - 500100</span>
              </a>
            </li>
            <li className="flex items-center gap-2"><Phone size={14} className="shrink-0" /> +91 22 1234 5678</li>
            <li className="flex items-center gap-2"><Mail size={14} className="shrink-0" /> info@duponindustrial.com</li>
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

