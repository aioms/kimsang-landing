import { Phone, Facebook, MessageCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return <footer id="footer" className="bg-gradient-hero text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/LOGONKW.png"
                  alt="Ngân Kim Logo"
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.src = "/src/assets/logo-nk.png";
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold">Công ty TNHH TM</span>
                <span className="font-heading font-bold text-accent text-2xl">Ngân Kim</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              30 năm kinh nghiệm cung cấp đồ điện và công cụ chất lượng. 
              Cam kết uy tín, chất lượng và giá cả phải chăng.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/ve-ngan-kim" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Về Ngân Kim
                </Link>
              </li>
              <li>
                <Link to="/san-pham" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <a href="/#faq" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Câu hỏi thường gặp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Liên hệ</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <div>
                  <a href="tel:0903781613" className="text-primary-foreground/80 hover:text-accent transition-colors block">
                    0903 781 613
                  </a>
                  <a href="tel:0385866721" className="text-primary-foreground/80 hover:text-accent transition-colors block">
                    0385 866 721
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <p className="text-primary-foreground/80">65 Yersin, P. Bến Thành, Q1, TP.HCM</p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://zalo.me/2939496977526093066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-10 px-4 py-2 rounded-md bg-primary-foreground/10 text-primary-foreground hover:bg-[#1976D2] hover:text-white transition-all group"
                  aria-label="Zalo"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Zalo</span>
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all group" aria-label="Facebook">
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="text-center text-primary-foreground/60 text-sm">
            <p>© {new Date().getFullYear()} Công ty TNHH TM Ngân Kim. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
