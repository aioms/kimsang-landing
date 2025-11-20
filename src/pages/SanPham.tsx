import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Product = { id: string; name: string; price: string; image: string };

const catalog: { title: string; slug: string; products: Product[] }[] = [
  {
    title: "Đồ điện dân dụng",
    slug: "do-dien-dan-dung",
    products: [
      { id: "elec-mix-1", name: "Thiết bị điện 1", price: "100.000₫", image: "/TBD.png" },
      { id: "elec-mix-2", name: "Thiết bị điện 2", price: "150.000₫", image: "/TBD1.png" },
      { id: "elec-mix-3", name: "Vật tư điện 1", price: "80.000₫", image: "/VTD.png" },
      { id: "elec-mix-4", name: "Vật tư điện 2", price: "120.000₫", image: "/VTD1.png" },
      { id: "elec-mix-5", name: "Đèn 1", price: "180.000₫", image: "/DEN.png" },
      { id: "elec-mix-6", name: "Đèn 2", price: "240.000₫", image: "/DEN1.png" },
      { id: "elec-mix-7", name: "Thiết bị điện 4", price: "250.000₫", image: "/TBD4.png" },
      { id: "elec-mix-8", name: "Thiết bị điện 8", price: "550.000₫", image: "/TBD8.png" },
    ],
  },
  {
    title: "Đồ nghề xây dựng",
    slug: "do-nghe-xay-dung",
    products: Array.from({ length: 6 }, (_, i) => ({
      id: `cons-${i + 1}`,
      name: `Dụng cụ xây dựng ${i + 1}`,
      price: `${(i + 3) * 70}.000₫`,
      image: "/product-construction.jpg",
    })),
  },
  {
    title: "Băng keo & keo đa năng",
    slug: "bang-keo-keo-da-nang",
    products: [
      { id: "mix-1", name: "Silicone Apollo A300", price: "75.000₫", image: "/A300.png" },
      { id: "mix-2", name: "WD-40", price: "70.000₫", image: "/WD-40.png" },
      { id: "mix-3", name: "RP7", price: "85.000₫", image: "/RP7.png" },
      { id: "mix-4", name: "Silicone Loctite 1", price: "195.000₫", image: "/Loc1.png" },
      { id: "mix-5", name: "Keo AB 1", price: "110.000₫", image: "/AB1.png" },
      { id: "mix-6", name: "Băng keo 1", price: "70.000₫", image: "/BK1.png" },
      { id: "mix-7", name: "Keo AB 2", price: "165.000₫", image: "/AB2.png" },
      { id: "mix-8", name: "Sản phẩm khác 4", price: "250.000₫", image: "/KHAC3.png" },
    ],
  },
  {
    title: "Cân đo, máy tính, thiết bị khác",
    slug: "can-do-may-tinh-thiet-bi-khac",
    products: Array.from({ length: 6 }, (_, i) => ({
      id: `measure-${i + 1}`,
      name: `Thiết bị đo lường ${i + 1}`,
      price: `${(i + 4) * 60}.000₫`,
      image: "/product-measuring.jpg",
    })),
  },
];

const SanPham = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Sản Phẩm</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Danh mục sản phẩm đa dạng, đáp ứng mọi nhu cầu công việc và gia dụng.
            </p>
          </div>

          <div className="space-y-16">
            {catalog.map((cat) => (
              <section key={cat.slug} aria-labelledby={`heading-${cat.slug}`} className="scroll-mt-24">
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <h2 id={`heading-${cat.slug}`} className="font-heading text-2xl font-bold">
                      {cat.title}
                    </h2>
                    <p className="text-muted-foreground text-sm">Tham khảo một số sản phẩm tiêu biểu</p>
                  </div>
                  <a href="https://zalo.me/2939496977526093066" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-hero text-primary-foreground">Tư vấn báo giá tốt</Button>
                  </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {cat.products.map((p) => (
                    <Card key={p.id} className="overflow-hidden border border-border bg-card hover:shadow-hover transition-all">
                      <div className="aspect-square bg-muted">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const el = e.currentTarget as HTMLImageElement;
                            el.src = "/placeholder.svg";
                          }}
                        />
                      </div>
                      <div className="p-3">
                        <div className="text-sm font-medium line-clamp-2">{p.name}</div>
                        <a
                          href="https://zalo.me/2939496977526093066"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-semibold mt-1 hover:underline"
                        >
                          Nhận báo giá
                        </a>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  <a href={`/san-pham/${cat.slug}`}>
                    <Button className="bg-[#0A2A66] text-white hover:bg-[#0A2A66]/90 transition-transform hover:scale-105">Xem thêm</Button>
                  </a>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SanPham;
