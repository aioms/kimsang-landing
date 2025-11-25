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
      { id: "elec-mix-1", name: "Bình siêu tốc", price: "100.000₫", image: "/TBD.png" },
      { id: "elec-mix-2", name: "Dây điện/Dây cáp", price: "80.000₫", image: "/VTD.png" },
      { id: "elec-mix-3", name: "Bóng đèn", price: "180.000₫", image: "/DEN.png" },
      { id: "elec-mix-4", name: "Đèn Kentom", price: "240.000₫", image: "/DEN1.png" },
      { id: "elec-mix-5", name: "Quạt điện Senko", price: "400.000₫", image: "/TBD5.png" },
      { id: "elec-mix-6", name: "Phụ kiện điện thoại", price: "450.000₫", image: "/TBD6.png" },
    ],
  },
  {
    title: "Đồ nghề xây dựng",
    slug: "do-nghe-xay-dung",
    products: [
      { id: "cons-mix-1", name: "Dụng cụ đo & đánh dấu", price: "210.000₫", image: "/DCDO.png" },
      { id: "cons-mix-2", name: "Dụng cụ cắt gọt", price: "280.000₫", image: "/CATGOT.png" },
      { id: "cons-mix-3", name: "Dụng cụ tháo lắp", price: "350.000₫", image: "/THAOLAP.png" },
      { id: "cons-mix-4", name: "Dụng cụ gia công bề mặt", price: "420.000₫", image: "/GCBM.png" },
      { id: "cons-mix-5", name: "Dụng cụ kẹp giữ & dụng cụ cầm tay", price: "490.000₫", image: "/KEP.png" },
      { id: "cons-mix-6", name: "Bộ Đồ Nghề tổng hợp", price: "560.000₫", image: "/BODN.png" },
    ],
  },
  {
    title: "Băng keo & keo đa năng",
    slug: "bang-keo-keo-da-nang",
    products: [
      { id: "mix-1", name: "Keo Loctite", price: "195.000₫", image: "/Loc1.png" },
      { id: "mix-2", name: "Keo đa năng", price: "110.000₫", image: "/KHAC3.png" },
      { id: "mix-3", name: "Keo AB nhỏ", price: "165.000₫", image: "/AB2.png" },
      { id: "mix-4", name: "Băng keo 3M", price: "70.000₫", image: "/BK1.png" },
      { id: "mix-5", name: "Silicone Apollo A300", price: "75.000₫", image: "/A300.png" },
      { id: "mix-6", name: "WD-40", price: "70.000₫", image: "/WD-40.png" },
    ],
  },
  {
    title: "Cân đo, máy tính, thiết bị khác",
    slug: "can-do-may-tinh-thiet-bi-khac",
    products: [
      { id: "measure-scale", name: "Cân Nhơn Hoà", price: "240.000₫", image: "/CAN.png" },
      { id: "measure-calc", name: "Máy tính Casio", price: "240.000₫", image: "/MAYTINH.png" },
      { id: "measure-clock", name: "Đồng hồ điện tử", price: "240.000₫", image: "/DH.png" },
      { id: "measure-other", name: "Các loại bàn chải", price: "240.000₫", image: "/OT.png" },
      { id: "measure-scale2", name: "Cân sức khoẻ", price: "360.000₫", image: "/CAN2.png" },
      { id: "measure-calc2", name: "Cọ sơn Thanh Bình", price: "300.000₫", image: "/OT2.png" },
    ],
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
