import HighlightWord from "@/components/highlight-word";
import Image from "next/image";

const table = [
  {
    title: "Thời gian học",
    traditional: "20 phút",
    fast: "1 giờ",
  },
  {
    title: "Hiệu quả",
    traditional: "Ngay lập tức",
    fast: "Chậm",
  },
  {
    title: "Ghi nhớ",
    traditional: "Kém",
    fast: "Tốt",
  },
  {
    title: "Phản xạ",
    traditional: "Kém",
    fast: "Tốt",
  },
];

export default function StoryMethods() {
  return (
    <section>
      <div className="container">
        <div className="grid sm:grid-cols-2 gap-20 sm:gap-8">
          <div className="flex flex-col gap-10">
            <h3 className="text-4xl font-bold">
              Phương pháp học tiếng Trung<HighlightWord>hiệu quả</HighlightWord>
            </h3>

            <table>
              <thead className="uppercase">
                <tr className="font-bold text-left">
                  <th></th>
                  <th className=" text-neutral-600">
                    Phương pháp truyền thống
                  </th>
                  <th className="bg-[#008900] text-white border-white border rounded-t-sm px-8 py-4">
                    Phương pháp học 3h
                  </th>
                </tr>
              </thead>
              <tbody>
                {table.map((content, idx) => (
                  <tr key={idx} className="border-t-[1px]">
                    <td className="font-bold w-[160px]">{content.title}</td>
                    <td className="">{content.traditional}</td>
                    <td className="bg-[#008900] text-white font-bold px-8 py-4 border">
                      {content.fast}
                    </td>
                  </tr>
                ))}

                <tr className="border-t-[1px]">
                  <td className="font-bold w-[160px]">Lâu dài</td>
                  <td className="">Quên dần</td>
                  <td className="bg-[#008900] text-white font-bold px-8 py-4 border rounded-b-sm">
                    Nhớ lâu
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              93% mọi người học tiếng Trung theo các phương pháp truyền thống để
              tiết kiệm thời gian nhưng dễ quên, phải học đi học lại nhiều lần
              và tốn thời gian hơn.
            </p>

            <p>
              Với phương pháp 3H Học - Hiểu - Hành giúp bạn đầu tư thời gian
              hiệu quả và thông minh, dứt điểm ngay trong 1 lần học.
            </p>

            <div className="space-y-10">
              <h3 className="text-2xl font-bold">
                Nếu việc học vẫn chưa đâu vào đâu, bạn sẽ...
              </h3>

              <div className="relative">
                <div className="grid grid-cols-2 text-center rounded-md overflow-hidden">
                  <div>
                    <p className="uppercase bg-[#D9EDD9] text-[#008900] py-5 font-bold">
                      Chọn
                    </p>
                  </div>
                  <div>
                    <p className="uppercase bg-red-100 text-red-500 py-5 font-bold">
                      Không chọn
                    </p>
                  </div>
                </div>
                <div className="bg-black uppercase text-white rounded-full absolute left-1/2 top-1/2 font-bold -translate-x-1/2 -translate-y-1/2 h-28 w-28 sm:flex items-center justify-center hidden">
                  <p>Hay</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Image src="/Diagram.png" alt="Diagram" width={1280} height={994} />
          </div>
        </div>
      </div>
    </section>
  );
}
