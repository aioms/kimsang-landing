import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Sản phẩm của Ngân Kim có chính hãng không?",
    answer: "100% sản phẩm tại Ngân Kim là hàng chính hãng, được nhập khẩu từ các nhà sản xuất uy tín. Chúng tôi cam kết chất lượng và có đầy đủ giấy tờ chứng nhận.",
  },
  {
    question: "Giá cả có cạnh tranh không?",
    answer: "Với 30 năm kinh nghiệm và mối quan hệ trực tiếp với nhà sản xuất, chúng tôi cam kết mang đến mức giá tốt nhất thị trường mà không giảm chất lượng sản phẩm.",
  },
  {
    question: "Ngân Kim có giao hàng toàn quốc không?",
    answer: "Có, chúng tôi hỗ trợ giao hàng toàn quốc với đối tác vận chuyển uy tín. Thời gian giao hàng linh hoạt theo từng khu vực, đảm bảo hàng hóa an toàn.",
  },
  {
    question: "Có chính sách bảo hành như thế nào?",
    answer: "Tất cả sản phẩm đều được bảo hành theo chính sách của nhà sản xuất. Ngân Kim hỗ trợ khách hàng trong quá trình bảo hành và đổi trả sản phẩm nếu có lỗi từ nhà sản xuất.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30 relative">
      {/* Section Decorator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Giải đáp những thắc mắc phổ biến từ khách hàng
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-card hover:shadow-hover transition-shadow"
              >
                <AccordionTrigger className="text-left font-heading font-bold text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Bottom Section Decorator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  );
};

export default FAQ;
