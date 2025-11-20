import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { NavLink as ActiveLink } from "./NavLink";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3">
            <img
              src="/LOGO_NK-remove.png"
              alt="Ngân Kim Logo"
              className="w-16 h-16 object-contain"
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                el.src = "/src/assets/logo-nk.png";
              }}
            />
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold text-foreground">Công ty TNHH TM</span>
              <span className="font-heading text-xl font-bold text-primary">Ngân Kim</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ActiveLink
              to="/"
              className="text-foreground transition-all font-medium hover:text-[#1976D2] hover:drop-shadow-[0_0_6px_#1976D2]"
              activeClassName="text-[#1976D2]"
            >
              Trang chủ
            </ActiveLink>
            <ActiveLink
              to="/ve-ngan-kim"
              className="text-foreground transition-all font-medium hover:text-[#1976D2] hover:drop-shadow-[0_0_6px_#1976D2]"
              activeClassName="text-[#1976D2]"
            >
              Về Ngân Kim
            </ActiveLink>
            <ActiveLink
              to="/san-pham"
              className="text-foreground transition-all font-medium hover:text-[#1976D2] hover:drop-shadow-[0_0_6px_#1976D2]"
              activeClassName="text-[#1976D2]"
            >
              Sản phẩm
            </ActiveLink>
            <a href="https://zalo.me/2939496977526093066" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity">
                Liên hệ ngay
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground transition-all font-medium hover:text-[#1976D2] hover:drop-shadow-[0_0_6px_#1976D2]"
              >
                Trang chủ
              </Link>
              <Link
                to="/ve-ngan-kim"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground transition-all font-medium hover:text-[#1976D2] hover:drop-shadow-[0_0_6px_#1976D2]"
              >
                Về Ngân Kim
              </Link>
              <Link
                to="/san-pham"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground transition-all font-medium hover:text-[#1976D2] hover:drop-shadow-[0_0_6px_#1976D2]"
              >
                Sản phẩm
              </Link>
              <a
                href="https://zalo.me/2939496977526093066"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity w-full">
                  Liên hệ ngay
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
