import { Button } from "@/components/ui/button";
import Image from "next/image";

const salary = [
  {
    url: "/Salary 5.png",
    name: "Chị Ngọc - Nhân viên Sale",
    old: 10,
    new: 40,
  },
  {
    url: "/Salary 3.png",
    name: "Ms. Kaylin - Trợ lý giám đốc",
    old: 25,
    new: 33,
  },
  {
    url: "/Salary 4.png",
    name: "Chị Nga - Kế toán",
    old: 12,
    new: 27,
  },
  {
    url: "/Salary 2.png",
    name: "Anh Giang - Xuất nhập khẩu",
    old: 15,
    new: 35,
  },
];

export default function StoryDream() {
  return (
    <section>
      <div className="container">
        <div className="space-y-8">
          <div className="space-y-2 max-w-3xl">
            <h3 className="h3">Công thức ẵm trọn mức lương bạn luôn mơ ước</h3>
            <p className="body3 md:body2-regular">
              Sau khi biết tiếng Trung, phần lớn học viên tìm được công việc tốt
              và thu nhập tăng lên đáng kể, thoải mái tận hưởng cuộc sống mà
              không âu lo tài chính như trước.
            </p>
          </div>

          <div>
            <div className="grid md:grid-cols-[2fr_1fr] gap-8">
              <div className="grid grid-cols-2 gap-10">
                {salary.map((s, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center space-y-2"
                  >
                    <Image
                      src={s.url}
                      alt="Salary"
                      width={255}
                      height={200}
                      className="rounded-md mb-4"
                    />

                    <h3 className="body2-semi md:body1-semi text-neutral-700">
                      {s.name}
                    </h3>
                    <div className="body3 text-neutral-600">
                      <p>
                        Lương{" "}
                        <span className="line-through">
                          {s.old} triệu/ tháng
                        </span>
                      </p>
                    </div>
                    <div className="bg-[#FFE4DF] rounded-md">
                      <p className="subtitle2 md:subtitle1 text-primary px-16 py-1">
                        {s.new} triệu
                        <span className="font-semibold body2-semi md:body1-semi">
                          / tháng
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex items-end justify-around">
                    <h3 className="line-through text-neutral-600 subtitle2 md:subtitle1">
                      7 triệu/ tháng
                    </h3>
                    <p className="bg-secondary rounded-full size-[120px] text-center flex flex-col items-center justify-center text-white text-base/[18px] md:text-lg/[20px]">
                      Ấn chọn
                      <span className="uppercase font-bold text-2xl/[24px] md:text-[28px]/[28px]">
                        mức lương
                      </span>
                      của bạn
                    </p>
                  </div>

                  <div>
                    <div className="rounded-md bg-[#FFEFC4] px-4 py-2 text-center">
                      <p className="text-secondary md:text-4xl text-2xl font-bold">
                        ??.000.000
                        <span className="body2-semi md:body1-semi">
                          {" "}
                          VNĐ/tháng
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-8">
                  <div>
                    <Image
                      src="/Salary 1.png"
                      alt="Salary"
                      width={350}
                      height={350}
                      className="rounded-full"
                    />
                  </div>

                  <h2 className="h3 font-bold md:h2 text-secondary">
                    Chúc mừng bạn!
                  </h2>

                  <Button
                    variant="secondary"
                    className="body3 font-bold md:subtitle2"
                  >
                    Cách nhận mức lương ?? triệu
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
