import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { productCategories, brands } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import companyLogo from "@/assets/company-logo.png";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50 industrial-shadow">
      <div className="container-wide mx-auto flex items-center justify-between h-14 md:h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={companyLogo} alt="Dupon Industrial Enterprises logo" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover" />
          <div className="hidden sm:block">
            <span className="font-heading font-bold text-foreground text-lg leading-tight block">Dupon Industrial</span>
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Enterprises</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5 sm:gap-1 overflow-visible relative">
          <NavItem to="/" label="Home" active={isActive("/")} />
          <DropdownNav
            label="Products"
            active={location.pathname.startsWith("/products")}
            isOpen={activeDropdown === "products"}
            onOpen={() => setActiveDropdown("products")}
            onClose={() => setActiveDropdown(null)}
          >
            <div className="grid grid-cols-1 gap-1 p-2 min-w-[260px]">
              {productCategories.map((cat) => (
                <Link key={cat.id} to={`/products/${cat.slug}`} className="p-3 rounded-md hover:bg-accent transition-colors text-sm font-medium text-foreground" onClick={() => setActiveDropdown(null)}>
                  {cat.name}
                </Link>
              ))}
              <Link to="/products" className="text-center p-2 text-sm font-medium text-highlight hover:underline" onClick={() => setActiveDropdown(null)}>
                View All Products →
              </Link>
            </div>
          </DropdownNav>
          <NavItem to="/brands" label="Brands" active={location.pathname.startsWith("/brands")} />
          <NavItem to="/industries" label="Industries" active={isActive("/industries")} />
          <NavItem to="/about" label="About Us" active={isActive("/about")} />
          <Link to="/contact" className="ml-2 px-5 py-2 rounded-md gradient-navy text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
            Request Quote
          </Link>
        </div>


        {/* Mobile hamburger */}
        <button className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              <MobileNavItem to="/" label="Home" active={isActive("/")} onClick={() => setMobileOpen(false)} />
              <MobileDropdown label="Products" active={location.pathname.startsWith("/products")}>
                {productCategories.map((cat) => (
                  <Link key={cat.id} to={`/products/${cat.slug}`} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
                    {cat.name}
                  </Link>
                ))}
              </MobileDropdown>
              <MobileNavItem to="/brands" label="Brands" active={location.pathname.startsWith("/brands")} onClick={() => setMobileOpen(false)} />
              <MobileNavItem to="/industries" label="Industries" active={isActive("/industries")} onClick={() => setMobileOpen(false)} />
              <MobileNavItem to="/about" label="About Us" active={isActive("/about")} onClick={() => setMobileOpen(false)} />
              <Link to="/contact" className="block mt-3 px-4 py-3 rounded-md gradient-navy text-primary-foreground font-medium text-sm text-center" onClick={() => setMobileOpen(false)}>
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
  <Link to={to} className={`px-3 lg:px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${active ? "text-highlight" : "text-foreground hover:text-highlight hover:bg-accent"}`}>
    {label}
  </Link>
);

const MobileNavItem = ({ to, label, active, onClick }: { to: string; label: string; active: boolean; onClick: () => void }) => (
  <Link to={to} onClick={onClick} className={`block px-3 py-2.5 rounded-md text-sm font-medium ${active ? "text-highlight bg-highlight/5" : "text-foreground hover:bg-accent"}`}>
    {label}
  </Link>
);

const MobileDropdown = ({ label, active, children }: { label: string; active: boolean; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium ${active ? "text-highlight bg-highlight/5" : "text-foreground hover:bg-accent"}`}>
        {label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-2">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DropdownNav = ({ label, active, isOpen, onOpen, onClose, children }: { label: string; active: boolean; isOpen: boolean; onOpen: () => void; onClose: () => void; children: React.ReactNode }) => (
  <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
    <Link to={label === "Products" ? "/products" : "/brands"} className={`flex items-center gap-1 px-3 lg:px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${active ? "text-highlight" : "text-foreground hover:text-highlight hover:bg-accent"}`}>
      {label}
      <ChevronDown size={12} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
    </Link>
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }} className="absolute top-full left-0 pt-1">
          <div className="bg-card rounded-lg border border-border industrial-shadow z-50">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default Navbar;
