import HighlightWord from "@/components/highlight-word";
import { Heading, HeadingDescription, HeadingTitle } from "./share/heading";
import Image from "next/image";

export default function EarlyBird() {
  const features = [
    {
      src: "/Early Bird 1.png",
      title: "30 phút tư vấn 1:1 với chuyên gia",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
    {
      src: "/Early Bird 2.png",
      title: "Bộ template Notion quản lý việc học siêu dễ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
    {
      src: "/Early Bird 3.png",
      title: "Tài liệu tiếng Trung tự ôn luyện tại HSK tại nhà",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="space-y-16">
          <Heading>
            <HeadingTitle>
              <HighlightWord>Early Bird</HighlightWord>
            </HeadingTitle>
            <HeadingDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              congue, nisl eget molestie varius, enim ex faucibus purus.
            </HeadingDescription>
          </Heading>
          <div className="relative">
            <ul className="grid gap-8 md:grid-cols-3">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-primary text-primary-foreground space-y-3 p-8 rounded-md"
                >
                  <div className="text-primary bg-primary-foreground inline-flex w-20 h-20 justify-center items-center">
                    <Image src={item.src} alt="" width={120} height={120} />
                  </div>
                  <h4 className="text-2xl font-semibold">{item.title}</h4>
                  <p className="text-lg">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
