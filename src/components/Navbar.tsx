import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { productCategories, brands } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50 industrial-shadow">
      <div className="container-wide mx-auto flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-md gradient-navy flex items-center justify-center">
            <span className="font-heading font-bold text-primary-foreground text-lg">IE</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-heading font-bold text-foreground text-lg leading-tight block">Industrial</span>
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Engineering</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          <NavItem to="/" label="Home" active={isActive("/")} />
          <DropdownNav
            label="Products"
            active={location.pathname.startsWith("/products")}
            isOpen={activeDropdown === "products"}
            onToggle={() => setActiveDropdown(activeDropdown === "products" ? null : "products")}
            onClose={() => setActiveDropdown(null)}
          >
            <div className="grid grid-cols-2 gap-1 p-2 min-w-[400px]">
              {productCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/products/${cat.slug}`}
                  className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  <img src={cat.image} alt={cat.name} className="w-10 h-10 rounded object-cover" />
                  <span className="text-sm font-medium text-foreground">{cat.name}</span>
                </Link>
              ))}
              <Link
                to="/products"
                className="col-span-2 text-center p-2 text-sm font-medium text-highlight hover:underline"
                onClick={() => setActiveDropdown(null)}
              >
                View All Products →
              </Link>
            </div>
          </DropdownNav>
          <DropdownNav
            label="Brands"
            active={location.pathname.startsWith("/brands")}
            isOpen={activeDropdown === "brands"}
            onToggle={() => setActiveDropdown(activeDropdown === "brands" ? null : "brands")}
            onClose={() => setActiveDropdown(null)}
          >
            <div className="grid grid-cols-1 gap-1 p-2 min-w-[240px]">
              {brands.map((brand) => (
                <Link
                  key={brand.id}
                  to={`/brands/${brand.id}`}
                  className="p-3 rounded-md hover:bg-accent transition-colors text-sm font-medium text-foreground"
                  onClick={() => setActiveDropdown(null)}
                >
                  {brand.name}
                </Link>
              ))}
              <Link
                to="/brands"
                className="text-center p-2 text-sm font-medium text-highlight hover:underline"
                onClick={() => setActiveDropdown(null)}
              >
                View All Brands →
              </Link>
            </div>
          </DropdownNav>
          <NavItem to="/industries" label="Industries" active={isActive("/industries")} />
          <NavItem to="/about" label="About Us" active={isActive("/about")} />
          <NavItem to="/contact" label="Contact Us" active={isActive("/contact")} />
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-md gradient-navy text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Request Quote
          </Link>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              <MobileLink to="/" label="Home" onClick={() => setMobileOpen(false)} />
              <MobileLink to="/products" label="Products" onClick={() => setMobileOpen(false)} />
              <MobileLink to="/brands" label="Brands" onClick={() => setMobileOpen(false)} />
              <MobileLink to="/industries" label="Industries" onClick={() => setMobileOpen(false)} />
              <MobileLink to="/about" label="About Us" onClick={() => setMobileOpen(false)} />
              <MobileLink to="/contact" label="Contact Us" onClick={() => setMobileOpen(false)} />
              <Link
                to="/contact"
                className="block w-full text-center mt-3 px-5 py-3 rounded-md gradient-navy text-primary-foreground font-medium text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavItem = ({ to, label, active }: { to: string; label: string; active: boolean }) => (
  <Link
    to={to}
    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
      active ? "text-highlight" : "text-foreground hover:text-highlight hover:bg-accent"
    }`}
  >
    {label}
  </Link>
);

const DropdownNav = ({
  label, active, isOpen, onToggle, onClose, children,
}: {
  label: string; active: boolean; isOpen: boolean; onToggle: () => void; onClose: () => void; children: React.ReactNode;
}) => (
  <div className="relative" onMouseEnter={onToggle} onMouseLeave={onClose}>
    <button
      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
        active ? "text-highlight" : "text-foreground hover:text-highlight hover:bg-accent"
      }`}
      onClick={onToggle}
    >
      {label}
      <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-0 mt-1 bg-card rounded-lg border border-border industrial-shadow"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const MobileLink = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => (
  <Link
    to={to}
    className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-accent rounded-md"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;
