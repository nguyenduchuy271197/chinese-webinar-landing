import HighlightWord from "@/components/highlight-word";
import { Heading, HeadingDescription, HeadingTitle } from "./share/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section>
      <div className="container">
        <div className="space-y-16 sm:pt-28">
          <Heading>
            <HeadingDescription>FAQ</HeadingDescription>
            <HeadingTitle>
              Bạn<HighlightWord>thắc mắc</HighlightWord>nhưng chưa có lời giải?
            </HeadingTitle>
          </Heading>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Làm thế nào để cải thiện phản xạ ngôn ngữ khi nói Tiếng Trung?
                </AccordionTrigger>
                <AccordionContent>
                  Để cải thiện phản xạ ngôn ngữ khi nói Tiếng Trung, thực hành
                  hàng ngày là quan trọng. Sử dụng các ứng dụng học tập trên
                  điện thoại di động hoặc tham gia các cộng đồng trò chuyện, kết
                  bạn để thực hành giao tiếp. Đồng thời, lắng nghe và mô phỏng
                  cách người bản xứ phát âm cũng giúp nâng cao kỹ năng nói của
                  bạn.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Làm thế nào để duy trì và nâng cao trình độ Tiếng Trung sau
                  khi đã học?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Lợi ích khi sử dụng Tiếng Trung trong môi trường kinh doanh?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It`&apos;`s animated by default, but you can disable it
                  if you prefer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Mất bao lâu để nói thành thạo Tiếng Trung?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It`&apos;`s animated by default, but you can disable it
                  if you prefer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Các nền tảng phổ biến để nói chuyện bằng Tiếng Trung với người
                  bản xứ?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It`&apos;`s animated by default, but you can disable it
                  if you prefer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Làm thế nào để học Tiếng Trung hiệu quả?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It`&apos;`s animated by default, but you can disable it
                  if you prefer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Tôi có thể tìm các nguồn tài nguyên miễn phí để học Tiếng
                  Trung ở đâu?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It`&apos;`s animated by default, but you can disable it
                  if you prefer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>
                  Làm sao để giữ động lực khi học Tiếng Trung?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It`&apos;`s animated by default, but you can disable it
                  if you prefer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger>
                  Làm thế nào để vượt qua thách thức trong việc học chữ Hán?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It`&apos;`s animated by default, but you can disable it
                  if you prefer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger>
                  Các nguồn tài nguyên online có thể hỗ trợ việc phát âm Tiếng
                  Trung không?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It`&apos;`s animated by default, but you can disable it
                  if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="pt-10">
              <p className="font-bold">Bạn vẫn thắc mắc...</p>
              <span>
                Hãy liên hệ với chúng tôi qua
                <HighlightWord>Messenger</HighlightWord>.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
