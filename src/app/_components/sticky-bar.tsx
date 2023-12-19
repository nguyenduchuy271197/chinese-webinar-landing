import { Button } from "@/components/ui/button";

export default function StickyBar() {
  return (
    <section className="fixed bottom-2 left-1/2 -translate-x-1/2 w-full hidden lg:block bg-white">
      <div className="container">
        <div className="flex justify-between items-center px-8 py-2 border">
          <div className="flex items-center gap-2">
            <div className="bg-[#C61F05] rounded-full">
              <p className="text-[#FFF] text-base mx-3 my-2 font-bold">
                Đăng ký sớm giảm 30%
              </p>
            </div>

            <div className="text-center">
              <p className="font-semibold">Thời hạn đăng ký còn</p>
              <p className="text-[#CE2105] font-semibold">1 ngày 12:19:45</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div>
              <p className="line-through font-light">150.000 VNĐ</p>
              <h3 className="text-[#F4B205] text-4xl font-bold">100.000 VNĐ</h3>
            </div>

            <div className="flex items-end">
              <Button className="w-[218px]">Đăng ký ngay</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
