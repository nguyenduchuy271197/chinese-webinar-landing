import HighlightWord from "@/components/highlight-word";
import { CalendarClock, Cast } from "lucide-react";
import AgendaCards from "./share/agenda-cards";

const curriculum = [
  {
    time: "18:00 PM",
    title: "Câu chuyện truyền cảm hứng",
    description:
      "Điều gì làm nên sự thành công của thầy Nguyễn Hoàng Bảo và bí kíp chưa bao giờ được bật mí",
  },
  {
    time: "18:45 PM",
    title: "Mini game",
    description:
      "Trò chơi nhỏ giữa giờ để khuấy động bầu không khí học tập sôi nổi và năng lượng",
  },
  {
    time: "19:30 PM",
    title: "MST & cách thành thạo mọi ngôn ngữ",
    description:
      "Cách sử dụng MST tối ưu để đạt hiệu quả cao hơn 90% người học",
  },
  {
    time: "20:00 PM",
    title: "Tương tác thực",
    description: "Luyện tập tương tác với các tình huống cụ thể",
  },
  {
    time: "20:30 PM",
    title: "Q&A",
    description: "Giải đáp các thắc mắc và chia sẻ cảm nhận sau buổi học",
  },
];

export default function Agenda() {
  return (
    <section>
      <div className="container">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <div className="space-y-8 max-w-lg sticky top-20">
              <h2 className="h3 font-bold md:h2">
                Lộ trình<HighlightWord>3h</HighlightWord>
                <p className="text-primary">Ngừng học vẹt</p>
              </h2>

              <div className="space-y-4">
                <span className="flex gap-2 body2-regular md:body1-regular">
                  <CalendarClock />
                  02:00 PM - 06:00 PM, 22/01/2024
                </span>

                <span className="flex gap-2 body2-regular md:body1-regular">
                  <Cast />
                  Online qua Google Meet
                </span>
              </div>
            </div>
          </div>

          <AgendaCards curriculum={curriculum} />
        </div>
      </div>
    </section>
  );
}
