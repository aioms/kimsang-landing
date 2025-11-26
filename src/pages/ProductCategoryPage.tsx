import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

type Product = { id: string; name: string; price: string; image: string };
type SubCategory = { title: string; products: Product[] };

const data: Record<string, { title: string; subcategories?: SubCategory[]; products?: Product[] }> = {
  "do-dien-dan-dung": {
    title: "Trung tâm Đồ điện - Hoá chất & Đồ nghề tổng hợp",
    subcategories: [
      {
        title: "Thiết bị điện",
        products: [
          { id: "elec-small-1", name: "Bình siêu tốc", price: "100.000₫", image: "/TBD.png" },
          { id: "elec-small-2", name: "Bình thuỷ điện", price: "150.000₫", image: "/TBD1.png" },
          { id: "elec-small-3", name: "Dây điện/dây cáp", price: "200.000₫", image: "/TBD1..png" },
          { id: "elec-small-4", name: "Phụ kiện điện thoại", price: "250.000₫", image: "/TBD2.png" },
          { id: "elec-small-5", name: "Bóng đèn", price: "300.000₫", image: "/TBD3.png" },
          { id: "elec-small-6", name: "Đèn Kentom", price: "350.000₫", image: "/TBD4.png" },
          { id: "elec-small-7", name: "Quạt điện Senko", price: "400.000₫", image: "/TBD5.png" },
          { id: "elec-small-8", name: "Thiết bị đo điện", price: "450.000₫", image: "/TBD6.png" },
          { id: "elec-small-9", name: "Ổ cắm điện", price: "500.000₫", image: "/TBD7.png" },
          { id: "elec-small-10", name: "Công tắc điện", price: "550.000₫", image: "/TBD8.png" },
        ],
      },
      {
        title: "Vật tư điện",
        products: [
          { id: "elec-supply-1", name: "Dây điện 1.5mm", price: "80.000₫", image: "/VTD.png" },
          { id: "elec-supply-2", name: "Dây điện 2.5mm", price: "120.000₫", image: "/VTD1.png" },
          { id: "elec-supply-3", name: "Cáp điện 3 lõi", price: "160.000₫", image: "/VTD2.png" },
          { id: "elec-supply-4", name: "Cáp điện 4 lõi", price: "200.000₫", image: "/VTD3.png" },
        ],
      },
      {
        title: "Các loại đèn",
        products: [
          { id: "elec-light-1", name: "Bóng đèn", price: "180.000₫", image: "/DEN.png" },
          { id: "elec-light-2", name: "Đèn Kentom", price: "240.000₫", image: "/DEN1.png" },
          { id: "elec-light-3", name: "Đèn tuýp", price: "300.000₫", image: "/DEN2.png" },
          { id: "elec-light-4", name: "Đèn chùm", price: "360.000₫", image: "/DEN3.png" },
          { id: "elec-light-5", name: "Đèn bàn", price: "420.000₫", image: "/DEN4.png" },
          { id: "elec-light-6", name: "Đèn sân vườn", price: "480.000₫", image: "/DEN5.png" },
          { id: "elec-light-7", name: "Đèn cảm ứng", price: "540.000₫", image: "/DEN6.png" },
        ],
      },
      {
        title: "Khác",
        products: [
          { id: "elec-etc-1", name: "Keo đa năng", price: "100.000₫", image: "/KHAC3.png" },
          { id: "elec-etc-3", name: "Cắt băng keo/giấy", price: "200.000₫", image: "/KHau2.png" },
          { id: "elec-etc-4", name: "Loa & Adaptor", price: "250.000₫", image: "/KH.png" },
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
          { id: "cons-measure-1", name: "Dụng cụ đo Asaki", price: "", image: "/DCDO.png" },
          { id: "cons-measure-2", name: "Các loại thước đo", price: "", image: "/DCDO1.png" },
          { id: "cons-measure-3", name: "Dụng cụ đo Top Century", price: "", image: "/DCDO2.png" },
          { id: "cons-measure-4", name: "Dụng cụ đo & đánh dấu Stanley", price: "", image: "/DCDO3.png" },
          { id: "cons-measure-5", name: "Các loại bút đo", price: "", image: "/DCDO4.png" },
          { id: "cons-measure-6", name: "Các loại nhiệt kế", price: "", image: "/DCDO5.png" },
          { id: "cons-measure-7", name: "Các loại đồng hồ đo", price: "", image: "/DCDO6.png" },
          { id: "cons-measure-8", name: "Đo mét", price: "", image: "/DCDO7.png" },
        ],
      },
      {
        title: "Dụng cụ cắt gọt",
        products: [
          { id: "cons-cut-1", name: "Dụng cụ cắt Asaki", price: "", image: "/CATGOT.png" },
          { id: "cons-cut-2", name: "Dụng cụ cắt Stanley", price: "", image: "/CATGOT1.png" },
          { id: "cons-cut-3", name: "Các loại dao/phay/rọc giấy", price: "", image: "/CATGOT2.png" },
          { id: "cons-cut-4", name: "Béc cắt gas", price: "", image: "/CATGOT3.png" },
          { id: "cons-saw-1", name: "Các loại cưa/lưỡi cưa", price: "", image: "/CATGOT4.png" },
        ],
      },
      {
        title: "Dụng cụ tháo lắp",
        products: [
          { id: "cons-assemble-1", name: "Asaki - Dụng cụ tháo lắp", price: "300.000₫", image: "/THAOLAP.png" },
          { id: "cons-assemble-2", name: "Stanley - Dụng cụ tháo lắp", price: "360.000₫", image: "/THAOLAP1.png" },
          { id: "cons-assemble-3", name: "Tua vít", price: "420.000₫", image: "/THAOLAP2.png" },
          { id: "cons-assemble-4", name: "Cờ lê", price: "480.000₫", image: "/THAOLAP3.png" },
          { id: "cons-assemble-5", name: "Lục giác - Mỏ lết - Điếu lỗ - Ốc vít", price: "540.000₫", image: "/THAOLAP4.png" },
        ],
      },
      {
        title: "Dụng cụ gia công bề mặt",
        products: [
          { id: "cons-surface-1", name: "Gia công bề mặt 1", price: "", image: "/GCBM.png" },
          { id: "cons-surface-2", name: "Gia công bề mặt 2", price: "", image: "/GCBM1.png" },
          { id: "cons-surface-3", name: "Các loại máy mài/phay", price: "", image: "/GCBM2.png" },
        ],
      },
      {
        title: "Dụng cụ kẹp giữ & dụng cụ cầm tay",
        products: [
          { id: "cons-clamp-1", name: "Các loại Ê tô", price: "135.000₫", image: "/KEP.png" },
          { id: "cons-clamp-2", name: "Các loại Cảo", price: "180.000₫", image: "/KEP1.png" },
          { id: "cons-clamp-3", name: "Stanley-Dewalt - Máy khoan/siết ốc/thổi hơi", price: "225.000₫", image: "/DCCT.png" },
          { id: "cons-clamp-4", name: "Máy khoan/siết ốc các loại", price: "270.000₫", image: "/DCCT1.png" },
        ],
      },
      {
        title: "Bộ Đồ Nghề tổng hợp",
        products: [
          { id: "cons-kit-1", name: "Asaki - Bộ đồ nghề", price: "150.000₫", image: "/BODN.png" },
          { id: "cons-kit-2", name: "Stanley - Bộ đồ nghề", price: "225.000₫", image: "/BODN1.png" },
          { id: "cons-kit-3", name: "Bộ đồ nghề tổng hợp", price: "300.000₫", image: "/BODN2.png" },
        ],
      },
      {
        title: "Khác",
        products: [
          { id: "cons-etc-1", name: "Asaki - Búa/rìu", price: "40.000₫", image: "/OTHER.png" },
          { id: "cons-etc-2", name: "Các loại búa/rìu", price: "80.000₫", image: "/OTHER1.png" },
          { id: "cons-etc-3", name: "Hộp/Túi đồ nghề", price: "120.000₫", image: "/OTHER2.png" },
          { id: "cons-etc-4", name: "Đồ bảo hộ lao động", price: "160.000₫", image: "/OTHER3.png" },
        ],
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
          { id: "adh-4", name: "Silicone MG97", price: "120.000₫", image: "/MG97.png" },
          { id: "adh-5", name: "Silicone Titebond", price: "110.000₫", image: "/Tite.png" },
          { id: "adh-6", name: "Silicone Blockade", price: "90.000₫", image: "/Blockade.png" },
          { id: "adh-7", name: "Silicone Foam Apollo", price: "65.000₫", image: "/Foam Apollo.png" },
          { id: "adh-8", name: "Silicone Soudal", price: "80.000₫", image: "/Soudal.png" },
          { id: "adh-9", name: "Silicone xBOND", price: "70.000₫", image: "/xBOND.png" },
          { id: "adh-10", name: "Silicone chịu nhiệt X'traseal", price: "100.000₫", image: "/Xtra.png" },
          { id: "adh-11", name: "Súng bắn keo-1", price: "90.000₫", image: "/SBK.png" },
          { id: "adh-12", name: "Súng bắn keo-2", price: "100.000₫", image: "/SBK (2).png" },
        ],
      },
      {
        title: "Dầu & Xịt đa năng",
        products: [
          { id: "oil-1", name: "RP7", price: "70.000₫", image: "/RP7.png" },
          { id: "oil-2", name: "Tẩy dầu mỡ RP7", price: "85.000₫", image: "/RP72.png" },
          { id: "oil-3", name: "Permatex", price: "95.000₫", image: "/Permatex.png" },
          { id: "oil-4", name: "Otech", price: "80.000₫", image: "/Otech.png" },
          { id: "oil-5", name: "Castrol", price: "120.000₫", image: "/Castrol.png" },
          { id: "oil-6", name: "Otech (phiên bản 2)", price: "90.000₫", image: "/Otech2.png" },
          { id: "oil-7", name: "Abro", price: "75.000₫", image: "/Abro.png" },
          { id: "oil-8", name: "Megacools", price: "85.000₫", image: "/Megacools.png" },
          { id: "oil-9", name: "Selsil", price: "95.000₫", image: "/Selsilcopy.png" },
          { id: "oil-10", name: "CRC", price: "105.000₫", image: "/CRC.png" },
          { id: "oil-11", name: "Würth", price: "115.000₫", image: "/wurth.png" },
        ],
      },
      {
        title: "WD-40",
        products: [
          { id: "wd40-1", name: "Xịt WD-40", price: "70.000₫", image: "/WD-40.png" },
          { id: "wd40-2", name: "WD-40 (can)", price: "85.000₫", image: "/WD-40CAN.png" },
          { id: "wd40-3", name: "Tiếp điểm WD-40", price: "95.000₫", image: "/TĐ.png" },
          { id: "wd40-4", name: "Vệ sinh máy lạnh WD-40", price: "105.000₫", image: "/VSML.png" },
          { id: "wd40-5", name: "Xịt mỡ bò WD-40", price: "120.000₫", image: "/MBWD-40.png" },
          { id: "wd40-6", name: "Bảo dưỡng Curoa WD-40", price: "100.000₫", image: "/Curoa.png" },
        ],
      },
      {
        title: "Băng keo",
        products: [
          { id: "tape-1", name: "Băng keo 3M", price: "70.000₫", image: "/BK1.png" },
          { id: "tape-2", name: "Băng keo điện Nano", price: "105.000₫", image: "/BK2.png" },
          { id: "tape-3", name: "Băng keo 2 mặt", price: "140.000₫", image: "/BK3.png" },
          { id: "tape-4", name: "Băng keo trong", price: "175.000₫", image: "/BK4.png" },
          { id: "tape-5", name: "Băng keo giấy", price: "210.000₫", image: "/BK5.png" },
          { id: "tape-6", name: "Băng keo chống trượt", price: "245.000₫", image: "/BK6.png" },
          { id: "tape-7", name: "Băng keo vải", price: "280.000₫", image: "/BK7.png" },
          { id: "tape-8", name: "Băng keo simili", price: "315.000₫", image: "/BK8.png" },
        ],
      },
      {
        title: "Keo Loctite",
        products: [
          { id: "loctite-1", name: "Keo Loctite", price: "195.000₫", image: "/Loc1.png" },
          { id: "loctite-2", name: "Keo Loctite", price: "260.000₫", image: "/Loc2.png" },
          { id: "loctite-3", name: "Keo Loctite", price: "325.000₫", image: "/Loc3.png" },
          { id: "loctite-4", name: "Keo Loctite", price: "390.000₫", image: "/Loc4.png" },
          { id: "loctite-5", name: "Keo Loctite", price: "455.000₫", image: "/Loc5.png" },
          { id: "loctite-6", name: "Keo Loctite", price: "520.000₫", image: "/Loc6.png" },
        ],
      },
      {
        title: "Keo AB",
        products: [
          { id: "ab-1", name: "Keo đa năng", price: "110.000₫", image: "/KHAC3.png" },
          { id: "ab-2", name: "AB nhỏ", price: "165.000₫", image: "/AB2.png" },
          { id: "ab-3", name: "AB chà ron", price: "220.000₫", image: "/ABCR.png" },
          { id: "ab-4", name: "AB Devcon", price: "275.000₫", image: "/AB4.png" },
          { id: "ab-5", name: "Các loại AB khác", price: "330.000₫", image: "/ABKHAC.png" },
          { id: "ab-6", name: "Chống dột", price: "385.000₫", image: "/KHAC.png" },
        ],
      },
      {
        title: "Khác",
        products: [
          { id: "etc-1", name: "Keo đa năng", price: "100.000₫", image: "/KHAC3.png" },
          { id: "etc-3", name: "Cắt băng keo/giấy", price: "200.000₫", image: "/KHAC2.png" },
          { id: "etc-4", name: "Loa & Adaptor", price: "250.000₫", image: "/KHau1.png" },
          { id: "etc-6", name: "Hoá chất đa năng", price: "320.000₫", image: "/HCKHAC.png" },
        ],
      },
    ],
  },
  "can-do-may-tinh-thiet-bi-khac": {
    title: "Cân, máy tính & dụng cụ gia dụng",
    subcategories: [
      {
        title: "Cân đo",
        products: [
          { id: "scale-1", name: "Cân Nhơn Hoà", price: "240.000₫", image: "/CAN.png" },
          { id: "scale-2", name: "Phụ kiện cân đồng hồ", price: "300.000₫", image: "/CAN1.png" },
          { id: "scale-3", name: "Cân sức khoẻ", price: "360.000₫", image: "/CAN2.png" },
          { id: "scale-4", name: "Cân tiểu ly điện tử", price: "420.000₫", image: "/CAN3.png" },
          { id: "scale-5", name: "Cân bàn lớn", price: "480.000₫", image: "/CAN4.png" },
          { id: "scale-6", name: "Cân bàn điện tử", price: "540.000₫", image: "/CAN5.png" },
          { id: "scale-7", name: "Cân HAW", price: "600.000₫", image: "/CAN6.png" },
          { id: "scale-8", name: "Cân tính tiền", price: "660.000₫", image: "/CAN7.png" },
          { id: "scale-9", name: "Móc cân", price: "720.000₫", image: "/CAN8.png" },
        ],
      },
      {
        title: "Máy tính bỏ túi",
        products: [
          { id: "calc-1", name: "Máy tính Casio", price: "240.000₫", image: "/MAYTINH.png" },
          { id: "calc-2", name: "Máy tính Cintizen-Vinacal", price: "300.000₫", image: "/MAYTINH1.png" },
        ],
      },
      {
        title: "Đồng hồ",
        products: [
          { id: "clock-1", name: "Đồng hồ điện tử", price: "240.000₫", image: "/DH.png" },
          { id: "clock-2", name: "Đồng hồ vạn niên", price: "300.000₫", image: "/DH1.png" },
          { id: "clock-3", name: "Đồng hồ kim treo tường", price: "360.000₫", image: "/DH2.png" },
          { id: "clock-4", name: "Đồng hồ để bàn", price: "420.000₫", image: "/DH3.png" },
          { id: "clock-5", name: "Đồng hồ đếm/lùi thể thao", price: "480.000₫", image: "/DH4.png" },
        ],
      },
      {
        title: "Khác",
        products: [
          { id: "other-1", name: "Các loại bàn chải", price: "240.000₫", image: "/OT.png" },
          { id: "other-2", name: "Cọ lăn", price: "300.000₫", image: "/OT1.png" },
          { id: "other-3", name: "Cọ sơn Thanh Bình", price: "360.000₫", image: "/OT2.png" },
          { id: "other-4", name: "Các loại cọ - sủi - khay sơn", price: "420.000₫", image: "/OT2copy.png" },
          { id: "other-5", name: "VPP-Bút sơn/lông", price: "480.000₫", image: "/OT3.png" },
          { id: "other-6", name: "Chuông & Còi", price: "540.000₫", image: "/OT4.png" },
        ],
      },
    ],
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
