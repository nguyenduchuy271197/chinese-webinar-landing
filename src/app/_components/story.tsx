import HighlightWord from "@/components/highlight-word";
import { Check, X } from "lucide-react";
import { Heading, HeadingDescription, HeadingTitle } from "./share/heading";

export default function Story() {
  const story = {
    before: [
      "Cày sấp mặt từ sáng tới tối, cuối tuần OT, lương tháng 10 triệu, trả nợ xong thì ăn mì tôm",
      "Thuê trọ với nhiều người, mỗi tháng tiền phòng điện nước, xăng xe, ăn uống, mỹ phẩm, gửi về cho gia đình, abc bay hết tháng lương",
      "Thất nghiệp mấy tháng muốn đờ người, kiếm đủ thứ để làm, part-time, phiên dịch thời vụ, start-up, đi du học",
    ],
    after: [
      "Ngồi máy lạnh chill chill, việc tới làm vèo vèo, sáng ăn đồ healthy, chiều order trà sữa, tối cafe networking, cuối tháng ting ting 15 triệu là ít",
      "Thuê hẳn 1 căn chung cư riêng, có đầy đủ tiện ích, đi đi về về không cần nhìn mặt ai",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    ],
  };

  return (
    <section>
      <div className="max-w-screen-lg px-8 mx-auto">
        <div className="space-y-12">
          <h3 className="text-center text-4xl font-bold"></h3>
          <Heading>
            <HeadingTitle>
              Chuyện gì cũng sẽ có...<HighlightWord>cách</HighlightWord>
            </HeadingTitle>

            <HeadingDescription>Lorem ipsum dolor sit amet.</HeadingDescription>
          </Heading>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="border px-8 bg-red-100 rounded-md">
              <div className="text-center py-4">
                <h4 className="uppercase font-bold text-xl">Trước đây 🥹</h4>
              </div>

              <hr className="border-primary" />

              <div className="space-y-6 py-6">
                {story.before.map((item) => (
                  <div className="flex gap-4" key={item}>
                    <div className="w-6 h-6 rounded-full bg-white shrink-0 flex justify-center items-center mt-1">
                      <X className="text-primary w-4 h-4" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border px-8 bg-yellow-100 rounded-md">
              <div className="text-center py-4">
                <h4 className="uppercase font-bold text-xl">sau này 😌</h4>
              </div>

              <hr className="border-secondary" />

              <div className="space-y-6 py-6">
                {story.after.map((item) => (
                  <div className="flex gap-4" key={item}>
                    <div className="w-6 h-6 rounded-full bg-white shrink-0 flex justify-center items-center mt-1">
                      <Check className="text-secondary w-4 h-4" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
