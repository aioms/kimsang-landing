import { Button } from "@/components/ui/button";
import { Zap, Award, TrendingUp } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-hero overflow-hidden">
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          filter: 'blur(2px)'
        }}></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-primary-foreground/20">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground text-sm font-medium">30 năm kinh nghiệm</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6 leading-tight whitespace-nowrap">
            Chất lượng - Uy tín - Phải chăng
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Với 30 năm lịch sử - Cam kết mang lại sản phẩm chất lượng uy tín với giá cả phải chăng!
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToProducts}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent-orange hover:text-primary-foreground transition-all shadow-lg hover:shadow-xl hover:scale-110 text-lg px-8 py-6"
          >
            <Zap className="w-5 h-5 mr-2" />
            Đặt hàng ngay
          </Button>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-3xl font-heading font-bold text-accent mb-2">30+</div>
              <div className="text-primary-foreground/80">Năm kinh nghiệm</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-3xl font-heading font-bold text-accent mb-2">1000+</div>
              <div className="text-primary-foreground/80">Khách hàng tin tưởng</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-3xl font-heading font-bold text-accent mb-2">10000+</div>
              <div className="text-primary-foreground/80">Phân loại sản phẩm</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decorator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
