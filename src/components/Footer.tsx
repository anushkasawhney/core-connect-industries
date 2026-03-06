import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import companyLogo from "@/assets/company-logo.png";

const Footer = () => (
  <footer className="gradient-navy text-primary-foreground">
    <div className="container-wide mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={companyLogo} alt="Dupon Agencies logo" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-heading font-bold text-lg">Dupon Agencies</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Trusted supplier of industrial hoses, rubber moulding components, gaskets, and sealing solutions for over 40 years.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {[{ to: "/", label: "Home" }, { to: "/products", label: "Products" }, { to: "/brands", label: "Brands" }, { to: "/about", label: "About Us" }, { to: "/contact", label: "Contact Us" }].map((link) => (
              <li key={link.to}><Link to={link.to} className="hover:text-primary-foreground transition-colors">{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {["Industrial Hose Pipes", "Rubber Moulding", "Industrial Gaskets", "Hydraulic Hoses", "PVC Flexible Pipes"].map((p) => (
              <li key={p}><Link to="/products" className="hover:text-primary-foreground transition-colors">{p}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> 123 Industrial Area, Phase II, Mumbai, Maharashtra 400001, India</li>
            <li className="flex items-center gap-2"><Phone size={16} className="shrink-0" /> +91 22 1234 5678</li>
            <li className="flex items-center gap-2"><Mail size={16} className="shrink-0" /> info@industrialengineering.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Dupon Agencies. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/contact" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
