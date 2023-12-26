import HighlightWord from "@/components/highlight-word";
import { CalendarClock, Cast } from "lucide-react";
import AgendaCards from "./share/agenda-cards";

const curriculum = [
  {
    time: "18:00 PM",
    title: "Giới thiệu",
    description: "Giới thiệu về giảng viên và nội dung buổi học",
  },
  {
    time: "18:30 PM",
    title: "Kiến thức",
    description: "Cung cấp các kiến thức nền tảng và phương pháp học",
  },
  {
    time: "19:30 PM",
    title: "Thực hành",
    description: "Thực hành sử dụng các cách diễn đạt phổ biến",
  },
  {
    time: "20:00 PM",
    title: "Tương tác",
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
              <h3 className="font-bold text-4xl">
                Lộ trình<HighlightWord>3h</HighlightWord>
                <p className="text-primary">Ngừng học vẹt</p>
              </h3>

              <div className="space-y-4">
                <span className="flex gap-2 font-medium">
                  <CalendarClock />
                  02:00 PM - 06:00 PM, 22/01/2024
                </span>

                <span className="flex gap-2 font-medium">
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
