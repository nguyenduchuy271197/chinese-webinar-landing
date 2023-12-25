import HighlightWord from "@/components/highlight-word";
import { Heading, HeadingDescription, HeadingTitle } from "./share/heading";

export default function Benefits() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.25 10L13.75 17.5"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 17.5L12.5 10L15 6.25"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 6.25H17.5"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.75 2.5H10"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.5 27.5L21.25 15L15 27.5"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 22.5H25"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Học cách diễn đạt phổ biến mà người bản xứ ưa dùng",
      desc: "Học đúng những thứ cần học, áp dụng thực tế, hiệu quả ngay lập tức, không lan man.",
    },
    {
      icon: (
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.25 10L13.75 17.5"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 17.5L12.5 10L15 6.25"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 6.25H17.5"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.75 2.5H10"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.5 27.5L21.25 15L15 27.5"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 22.5H25"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Học với chuyên gia, người thật, việc thật",
      desc: "Nói tiếng Trung thành thạo, phản xạ nhanh nhạy, từ vựng đúng ngữ cảnh.",
    },
    {
      icon: (
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.25 10L13.75 17.5"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 17.5L12.5 10L15 6.25"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 6.25H17.5"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.75 2.5H10"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.5 27.5L21.25 15L15 27.5"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 22.5H25"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Phương pháp phù hợp với người ít thời gian rảnh",
      desc: "Người bận rộn đến mấy cũng có thể học được, không bị bỏ cuộc giữa chừng.",
    },
    {
      icon: (
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.25 10L13.75 17.5"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 17.5L12.5 10L15 6.25"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 6.25H17.5"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.75 2.5H10"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.5 27.5L21.25 15L15 27.5"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 22.5H25"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Bỏ cách học rập khuôn, cứng nhắc, không hiệu quả",
      desc: "Người bận rộn đến mấy cũng có thể học được, không bị bỏ cuộc giữa chừng.",
    },
  ];

  return (
    <section className="bg-neutral-100">
      <div className="container">
        <div className="space-y-12 py-20">
          <Heading align="left">
            <HeadingTitle>
              Nếu chỉ với
              <HighlightWord>3 giờ</HighlightWord>
              học tiếng Trung, có bị xem là học vẹt?
            </HeadingTitle>
          </Heading>

          <div className="relative mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-white space-y-3 p-4 border rounded-md"
                >
                  <div className="text-primary p-3 rounded-md w-16 h-16 bg-red-100">
                    {item.icon}
                  </div>
                  <h4 className="text-lg text-gray-800 font-semibold uppercase">
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
