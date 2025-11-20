import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

type Product = { id: string; name: string; price: string; image: string };
type SubCategory = { title: string; products: Product[] };

const data: Record<string, { title: string; subcategories?: SubCategory[]; products?: Product[] }> = {
  "do-dien-dan-dung": {
    title: "Đồ điện dân dụng",
    subcategories: [
      {
        title: "Thiết bị điện",
        products: [
          { id: "elec-small-1", name: "Thiết bị điện 1", price: "100.000₫", image: "/TBD.png" },
          { id: "elec-small-2", name: "Thiết bị điện 2", price: "150.000₫", image: "/TBD1.png" },
          { id: "elec-small-3", name: "Thiết bị điện 3", price: "200.000₫", image: "/TBD1..png" },
          { id: "elec-small-4", name: "Thiết bị điện 4", price: "250.000₫", image: "/TBD2.png" },
          { id: "elec-small-5", name: "Thiết bị điện 5", price: "300.000₫", image: "/TBD3.png" },
          { id: "elec-small-6", name: "Thiết bị điện 6", price: "350.000₫", image: "/TBD4.png" },
          { id: "elec-small-7", name: "Thiết bị điện 7", price: "400.000₫", image: "/TBD5.png" },
          { id: "elec-small-8", name: "Thiết bị điện 8", price: "450.000₫", image: "/TBD6.png" },
          { id: "elec-small-9", name: "Thiết bị điện 9", price: "500.000₫", image: "/TBD7.png" },
          { id: "elec-small-10", name: "Thiết bị điện 10", price: "550.000₫", image: "/TBD8.png" },
        ],
      },
      {
        title: "Vật tư điện",
        products: [
          { id: "elec-supply-1", name: "Vật tư điện 1", price: "80.000₫", image: "/VTD.png" },
          { id: "elec-supply-2", name: "Vật tư điện 2", price: "120.000₫", image: "/VTD1.png" },
          { id: "elec-supply-3", name: "Vật tư điện 3", price: "160.000₫", image: "/VTD2.png" },
          { id: "elec-supply-4", name: "Vật tư điện 4", price: "200.000₫", image: "/VTD3.png" },
        ],
      },
      {
        title: "Các loại đèn",
        products: [
          { id: "elec-light-1", name: "Đèn 1", price: "180.000₫", image: "/DEN.png" },
          { id: "elec-light-2", name: "Đèn 2", price: "240.000₫", image: "/DEN1.png" },
          { id: "elec-light-3", name: "Đèn 3", price: "300.000₫", image: "/DEN2.png" },
          { id: "elec-light-4", name: "Đèn 4", price: "360.000₫", image: "/DEN3.png" },
          { id: "elec-light-5", name: "Đèn 5", price: "420.000₫", image: "/DEN4.png" },
          { id: "elec-light-6", name: "Đèn 6", price: "480.000₫", image: "/DEN5.png" },
          { id: "elec-light-7", name: "Đèn 7", price: "540.000₫", image: "/DEN6.png" },
        ],
      },
      {
        title: "Khác",
        products: [
          { id: "elec-etc-1", name: "Sản phẩm khác 1", price: "100.000₫", image: "/KH.png" },
          { id: "elec-etc-3", name: "Sản phẩm khác 3", price: "200.000₫", image: "/KHau2.png" },
          { id: "elec-etc-4", name: "Sản phẩm khác 4", price: "250.000₫", image: "/KH.png" },
        ],
      },
    ],
  },
  "do-nghe-xay-dung": {
    title: "Đồ nghề xây dựng",
    subcategories: [
      {
        title: "Dụng cụ đo & đánh dấu",
        products: [
          { id: "cons-measure-1", name: "Dụng cụ đo 1", price: "", image: "/DCDO.png" },
          { id: "cons-measure-2", name: "Dụng cụ đo 2", price: "", image: "/DCDO1.png" },
          { id: "cons-measure-3", name: "Dụng cụ đo 3", price: "", image: "/DCDO2.png" },
          { id: "cons-measure-4", name: "Dụng cụ đo 4", price: "", image: "/DCDO3.png" },
          { id: "cons-measure-5", name: "Dụng cụ đo 5", price: "", image: "/DCDO4.png" },
          { id: "cons-measure-6", name: "Dụng cụ đo 6", price: "", image: "/DCDO5.png" },
          { id: "cons-measure-7", name: "Dụng cụ đo 7", price: "", image: "/DCDO6.png" },
          { id: "cons-measure-8", name: "Dụng cụ đo 8", price: "", image: "/DCDO7.png" },
        ],
      },
      {
        title: "Dụng cụ cắt gọt",
        products: [
          { id: "cons-cut-1", name: "Dụng cụ cắt gọt 1", price: "", image: "/CATGOT.png" },
          { id: "cons-cut-2", name: "Dụng cụ cắt gọt 2", price: "", image: "/CATGOT1.png" },
          { id: "cons-cut-3", name: "Dụng cụ cắt gọt 3", price: "", image: "/CATGOT2.png" },
          { id: "cons-cut-4", name: "Dụng cụ cắt gọt 4", price: "", image: "/CATGOT3.png" },
        ],
      },
      {
        title: "Dụng cụ tháo lắp",
        products: Array.from({ length: 6 }, (_, i) => ({
          id: `cons-assemble-${i + 1}`,
          name: `Dụng cụ tháo lắp ${i + 1}`,
          price: `${(i + 5) * 60}.000₫`,
          image: "/product-construction.jpg",
        })),
      },
      {
        title: "Dụng cụ gia công bề mặt",
        products: [
          { id: "cons-surface-1", name: "Gia công bề mặt 1", price: "", image: "/GCBM.png" },
          { id: "cons-surface-2", name: "Gia công bề mặt 2", price: "", image: "/GCBM1.png" },
        ],
      },
      {
        title: "Dụng cụ kẹp giữ",
        products: Array.from({ length: 6 }, (_, i) => ({
          id: `cons-clamp-${i + 1}`,
          name: `Dụng cụ kẹp giữ ${i + 1}`,
          price: `${(i + 3) * 45}.000₫`,
          image: "/product-construction.jpg",
        })),
      },
      {
        title: "Bộ Đồ Nghề tổng hợp",
        products: Array.from({ length: 6 }, (_, i) => ({
          id: `cons-kit-${i + 1}`,
          name: `Bộ đồ nghề tổng hợp ${i + 1}`,
          price: `${(i + 2) * 75}.000₫`,
          image: "/product-construction.jpg",
        })),
      },
      {
        title: "Khác",
        products: Array.from({ length: 6 }, (_, i) => ({
          id: `cons-etc-${i + 1}`,
          name: `Sản phẩm khác ${i + 1}`,
          price: `${(i + 1) * 40}.000₫`,
          image: "/product-construction.jpg",
        })),
      },
    ],
  },
  "bang-keo-keo-da-nang": {
    title: "Băng keo & keo đa năng",
    subcategories: [
      {
        title: "Keo Silicone đa năng & Súng bắn keo",
        products: [
          { id: "adh-1", name: "Silicone Apollo A300", price: "75.000₫", image: "/A300.png" },
          { id: "adh-2", name: "Silicone Apollo A500", price: "85.000₫", image: "/A500.png" },
          { id: "adh-3", name: "Silicone Apollo A600", price: "95.000₫", image: "/A600.png" },
          { id: "adh-4", name: "Silicone 3M MG97", price: "120.000₫", image: "/MG97.png" },
          { id: "adh-5", name: "Silicone Titebond", price: "110.000₫", image: "/Tite.png" },
          { id: "adh-6", name: "Silicone Blockade", price: "90.000₫", image: "/Blockade.png" },
          { id: "adh-7", name: "Silicone Foam Apollo", price: "65.000₫", image: "/Foam Apollo.png" },
          { id: "adh-8", name: "Silicone Soudal", price: "80.000₫", image: "/Soudal.png" },
          { id: "adh-9", name: "Silicone xBOND", price: "70.000₫", image: "/xBOND.png" },
          { id: "adh-10", name: "Silicone chịu nhiệt X'traseal", price: "100.000₫", image: "/Xtra.png" },
          { id: "adh-11", name: "Súng bắn keo SBK", price: "90.000₫", image: "/SBK.png" },
          { id: "adh-12", name: "Súng bắn keo SBK (2)", price: "100.000₫", image: "/SBK (2).png" },
        ],
      },
      {
        title: "Dầu & Xịt đa năng",
        products: [
          { id: "oil-1", name: "RP7", price: "70.000₫", image: "/RP7.png" },
          { id: "oil-2", name: "RP7 (loại 2)", price: "85.000₫", image: "/RP72.png" },
          { id: "oil-3", name: "Permatex", price: "95.000₫", image: "/Permatex.png" },
          { id: "oil-4", name: "Otech", price: "80.000₫", image: "/Otech.png" },
          { id: "oil-5", name: "Castrol", price: "120.000₫", image: "/Castrol.png" },
          { id: "oil-6", name: "Otech (phiên bản 2)", price: "90.000₫", image: "/Otech2.png" },
          { id: "oil-7", name: "Abro", price: "75.000₫", image: "/Abro.png" },
          { id: "oil-8", name: "Megacools", price: "85.000₫", image: "/Megacools.png" },
          { id: "oil-9", name: "Selsil", price: "95.000₫", image: "/Selsil.png" },
          { id: "oil-10", name: "CRC", price: "105.000₫", image: "/CRC.png" },
          { id: "oil-11", name: "Würth", price: "115.000₫", image: "/wurth.png" },
        ],
      },
      {
        title: "WD-40",
        products: [
          { id: "wd40-1", name: "WD-40", price: "70.000₫", image: "/WD-40.png" },
          { id: "wd40-2", name: "WD-40 (lon)", price: "85.000₫", image: "/WD-40CAN.png" },
          { id: "wd40-3", name: "WD-40 TĐ", price: "95.000₫", image: "/TĐ.png" },
          { id: "wd40-4", name: "WD-40 VSML", price: "105.000₫", image: "/VSML.png" },
          { id: "wd40-5", name: "WD-40 Multi-Use", price: "120.000₫", image: "/MBWD-40.png" },
          { id: "wd40-6", name: "Dầu bảo dưỡng Curoa", price: "100.000₫", image: "/Curoa.png" },
        ],
      },
      {
        title: "Băng keo",
        products: [
          { id: "tape-1", name: "Băng keo 1", price: "70.000₫", image: "/BK1.png" },
          { id: "tape-2", name: "Băng keo 2", price: "105.000₫", image: "/BK2.png" },
          { id: "tape-3", name: "Băng keo 3", price: "140.000₫", image: "/BK3.png" },
          { id: "tape-4", name: "Băng keo 4", price: "175.000₫", image: "/BK4.png" },
          { id: "tape-5", name: "Băng keo 5", price: "210.000₫", image: "/BK5.png" },
          { id: "tape-6", name: "Băng keo 6", price: "245.000₫", image: "/BK6.png" },
          { id: "tape-7", name: "Băng keo 7", price: "280.000₫", image: "/BK7.png" },
          { id: "tape-8", name: "Băng keo 8", price: "315.000₫", image: "/BK8.png" },
        ],
      },
      {
        title: "Keo Loctite",
        products: [
          { id: "loctite-1", name: "Silicone Loctite 1", price: "195.000₫", image: "/Loc1.png" },
          { id: "loctite-2", name: "Silicone Loctite 2", price: "260.000₫", image: "/Loc2.png" },
          { id: "loctite-3", name: "Silicone Loctite 3", price: "325.000₫", image: "/Loc3.png" },
          { id: "loctite-4", name: "Silicone Loctite 4", price: "390.000₫", image: "/Loc4.png" },
          { id: "loctite-5", name: "Silicone Loctite 5", price: "455.000₫", image: "/Loc5.png" },
          { id: "loctite-6", name: "Silicone Loctite 6", price: "520.000₫", image: "/Loc6.png" },
        ],
      },
      {
        title: "Keo AB",
        products: [
          { id: "ab-1", name: "Keo AB 1", price: "110.000₫", image: "/AB1.png" },
          { id: "ab-2", name: "Keo AB 2", price: "165.000₫", image: "/AB2.png" },
          { id: "ab-3", name: "Keo AB chịu lực", price: "220.000₫", image: "/ABCR.png" },
          { id: "ab-4", name: "Keo AB 4", price: "275.000₫", image: "/AB4.png" },
          { id: "ab-5", name: "Keo AB khác", price: "330.000₫", image: "/ABKHAC.png" },
        ],
      },
      {
        title: "Khác",
        products: [
          { id: "etc-1", name: "Sản phẩm khác 1", price: "100.000₫", image: "/KHAC.png" },
          { id: "etc-3", name: "Sản phẩm khác 3", price: "200.000₫", image: "/KHAC2.png" },
          { id: "etc-4", name: "Sản phẩm khác 4", price: "250.000₫", image: "/KHau1.png" },
          { id: "etc-6", name: "Sản phẩm khác HCKH (2)", price: "320.000₫", image: "/HCKHAC.png" },
        ],
      },
    ],
  },
  "can-do-may-tinh-thiet-bi-khac": {
    title: "Cân đo, máy tính, thiết bị khác",
    products: Array.from({ length: 12 }, (_, i) => ({
      id: `measure-${i + 1}`,
      name: `Thiết bị đo lường ${i + 1}`,
      price: `${(i + 4) * 60}.000₫`,
      image: "/product-measuring.jpg",
    })),
  },
};

const ProductCategoryPage = () => {
  const { slug } = useParams();
  const category = slug ? data[slug] : undefined;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <nav className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-accent">Trang chủ</Link>
              <span className="mx-2">/</span>
              <Link to="/san-pham" className="hover:text-accent">Sản phẩm</Link>
              <span className="mx-2">/</span>
              <span>{category?.title || "Danh mục sản phẩm"}</span>
            </nav>
            <a href="https://zalo.me/2939496977526093066" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-hero text-primary-foreground">Tư vấn báo giá tốt</Button>
            </a>
          </div>
          <div className="mb-10 text-center">
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              {category?.title || "Danh mục sản phẩm"}
            </h1>
            <div className="h-1.5 w-52 md:w-64 mx-auto rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-500"></div>
          </div>

          {category?.subcategories ? (
            <div className="space-y-12">
              {category.subcategories.map((sc) => (
                <section key={sc.title}>
                  <h2 className="font-heading text-xl md:text-2xl font-bold mb-4">{sc.title}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {sc.products.map((p) => (
                      <Card key={p.id} className="overflow-hidden border border-border bg-card transition-all hover:shadow-xl hover:scale-[1.03]">
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
                        <div className="p-4">
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
                </section>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {(category?.products || []).map((p) => (
                <Card key={p.id} className="overflow-hidden border border-border bg-card transition-all hover:shadow-xl hover:scale-[1.03]">
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
                  <div className="p-4">
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
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductCategoryPage;
