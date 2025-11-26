import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const photos = [
  "/KS1.jpg",
  "/KS2.jpg",
  "/KS3.jpg",
  "/KS4.jpg",
  "/KS5.jpg",
  "/KS6.jpg",
  "/KS7.jpg",
  "/KH1.jpg",
  "/KH2.jpg",
];

const VeNganKim = () => {
  const apiRef = useRef<any>(null);

  useEffect(() => {
    const id = setInterval(() => {
      apiRef.current?.scrollNext();
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Về Công ty TNHH TM Ngân Kim</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Công ty TNHH TM Ngân Kim, thành lập năm 2008, là sự tiếp nối và phát triển dựa trên nền tảng hoạt động uy tín lâu năm từ Cửa hàng Kim Sang và Cửa hàng Kim Hậu. Với bề dày hơn 30 năm kinh nghiệm, chúng tôi đã trở thành hai địa chỉ quen thuộc tại trung tâm Chợ Dân Sinh, Quận 1.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <Card className="p-6 bg-gradient-card border border-border/80 hover:border-blue-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-800/20 hover:scale-105 cursor-pointer group">
              <h2 className="font-heading text-2xl font-bold mb-4 group-hover:text-blue-900 group-hover:font-bold transition-colors">Lĩnh Vực Kinh Doanh</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                <li className="group-hover:text-blue-800 group-hover:font-semibold transition-colors">Thiết bị điện (Dân dụng – Gia dụng)</li>
                <li className="group-hover:text-blue-800 group-hover:font-semibold transition-colors">Dụng cụ – Đồ nghề (Xây dựng, sửa chữa)</li>
                <li className="group-hover:text-blue-800 group-hover:font-semibold transition-colors">Các loại keo chuyên dụng (Silicone, Loctite, Băng keo)</li>
                <li className="group-hover:text-blue-800 group-hover:font-semibold transition-colors">Hóa chất công nghiệp và đa năng</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-card border border-border/80 hover:border-blue-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-800/20 hover:scale-105 cursor-pointer group">
              <h2 className="font-heading text-2xl font-bold mb-4 group-hover:text-blue-900 group-hover:font-bold transition-colors">Giá Trị Cốt Lõi</h2>
              <ul className="space-y-4 text-sm md:text-base">
                <li>
                  <span className="font-semibold group-hover:text-blue-900 group-hover:font-bold transition-colors">Chất lượng uy tín:</span> <span className="group-hover:text-blue-800 group-hover:font-semibold transition-colors">Cung cấp sản phẩm chất lượng, bền bỉ.</span>
                </li>
                <li>
                  <span className="font-semibold group-hover:text-blue-900 group-hover:font-bold transition-colors">Giá Cạnh Tranh:</span> <span className="group-hover:text-blue-800 group-hover:font-semibold transition-colors">Tối ưu chi phí cho đối tác.</span>
                </li>
                <li>
                  <span className="font-semibold group-hover:text-blue-900 group-hover:font-bold transition-colors">Dịch Vụ Tận Tâm:</span> <span className="group-hover:text-blue-800 group-hover:font-semibold transition-colors">Tư vấn đúng nhu cầu, hỗ trợ mọi quy mô nhu cầu.</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="font-heading text-2xl font-bold mb-6 text-center">Trung tâm bách hoá đồ điện, hoá chất & đồ nghề tổng hợp</h2>
            <div className="relative">
              <Carousel setApi={(api) => (apiRef.current = api)} opts={{ loop: true }} className="max-w-5xl mx-auto">
                <CarouselContent>
                  {photos.map((src, idx) => (
                    <CarouselItem key={idx} className="md:basis-3/4 lg:basis-1/2">
                      <div className="aspect-[16/9] overflow-hidden rounded-xl border border-border bg-muted">
                        <img src={src} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          <div className="mb-8 text-center">
            <h2 className="font-heading text-2xl font-bold">Hệ thống cửa hàng</h2>
            <p className="text-muted-foreground">Thông tin địa chỉ và số liên hệ</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden border border-border hover:shadow-hover transition-all">
              <div className="aspect-video bg-muted">
                <img
                  src="/CHKS.jpg"
                  alt="Cửa hàng Kim Sang"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.src = "/placeholder.svg";
                  }}
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-heading text-xl font-bold">Cửa hàng Kim Sang - Dân Sinh</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>0903781613 | 0385866721</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>DS-02 Đối diện 65 Yersin, P. Bến Thành, Q1.</span>
                </div>
                <div className="pt-2">
                  <a
                    className="inline-flex"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://maps.app.goo.gl/SWQeYM2EYsnPqZfx6"
                  >
                    <Button variant="outline">Xem bản đồ</Button>
                  </a>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border border-border hover:shadow-hover transition-all">
              <div className="aspect-video bg-muted">
                <img
                  src="/CHKH.jpg"
                  alt="Cửa hàng Kim Hậu"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.src = "/placeholder.svg";
                  }}
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-heading text-xl font-bold">Cửa hàng Kim Hậu</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>0919440342 | 0983666020</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>65 Yersin, P. Bến Thành, Q1.</span>
                </div>
                <div className="pt-2">
                  <a
                    className="inline-flex"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://maps.app.goo.gl/rKhZcsgok5N2bC9i7"
                  >
                    <Button variant="outline">Xem bản đồ</Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VeNganKim;
