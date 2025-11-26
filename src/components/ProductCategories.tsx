import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Đồ điện dân dụng & gia dụng",
    description: "Thiết bị điện chất lượng cao cho mọi gia đình",
    image: "/product-electrical.jpg",
    slug: "do-dien-dan-dung",
  },
  {
    id: 2,
    name: "Đồ nghề xây dựng",
    description: "Công cụ chuyên nghiệp cho ngành xây dựng",
    image: "/MAUDN2.png",
    slug: "do-nghe-xay-dung",
  },
  {
    id: 3,
    name: "Băng keo & keo đa năng",
    description: "Giải pháp dính kết đa dạng và hiệu quả",
    image: "/adhesive-brands.jpg",
    slug: "bang-keo-keo-da-nang",
  },
  {
    id: 4,
    name: "Cân, máy tính & dụng cụ gia dụng",
    description: "Thiết bị đo lường chính xác và tin cậy",
    image: "/product-measuring.jpg",
    slug: "can-do-may-tinh-thiet-bi-khac",
  },
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 bg-background relative">
      {/* Section Decorator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 text-indigo-900 dark:text-indigo-300">
            Danh mục sản phẩm
          </h2>
          <div className="h-1.5 w-52 md:w-64 mx-auto rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-500 mb-5"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Chúng tôi cung cấp đa dạng các sản phẩm chất lượng cao phục vụ mọi nhu cầu của bạn
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={`/san-pham/${category.slug}`} className="block">
            <Card
              className="group overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-hover cursor-pointer bg-gradient-card"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={category.image}
                  alt={category.name}
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    if (el.src.endsWith("adhesive-brands.jpg")) el.src = "/product-adhesive.jpg";
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm transition-all transform group-hover:gap-3 group-hover:text-orange-500 group-hover:scale-105">
                  Xem chi tiết
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Section Decorator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  );
};

export default ProductCategories;
