import { Award, Shield, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Award,
    title: "Chất lượng hàng đầu",
    description: "Sản phẩm chính hãng từ các thương hiệu uy tín quốc tế",
  },
  {
    icon: Shield,
    title: "Cam kết uy tín",
    description: "30 năm xây dựng niềm tin với hàng nghìn khách hàng",
  },
  {
    icon: TrendingUp,
    title: "Giá cả phải chăng",
    description: "Mức giá cạnh tranh nhất thị trường, không qua trung gian",
  },
  {
    icon: Users,
    title: "Phục vụ tận tâm",
    description: "Đội ngũ tư vấn chuyên nghiệp, hỗ trợ nhiệt tình",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative">
      {/* Section Decorator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Về Ngân Kim
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Với hơn 30 năm kinh nghiệm, Ngân Kim tự hào là đối tác tin cậy trong 
            lĩnh vực cung cấp thiết bị điện và công cụ xây dựng
          </p>
          <Button 
            onClick={() => {
              const element = document.getElementById("about");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Tìm hiểu thêm
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border bg-gradient-card hover:border-primary/30 transition-all duration-300 hover:shadow-hover"
            >
              <div className="w-12 h-12 bg-gradient-icon rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section Decorator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  );
};

export default About;
