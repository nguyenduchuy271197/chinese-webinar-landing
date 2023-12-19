import { Button } from "@/components/ui/button";
import { ArrowDown, Share, Star } from "lucide-react";
import Stats from "./stats";
import HighlightWord from "@/components/highlight-word";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-[400px_1fr] gap-8 mb-12">
          <div className="space-y-6">
            <div className="space-y-4">
              {/* Title */}
              <h3 className="lg:text-6xl/[1.2] md:text-5xl font-bold text-3xl">
                Lorem
                <HighlightWord>ipsum</HighlightWord>
                dolor sit amet
              </h3>
              {/* Description */}
              <p className="text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam in amet ipsa odit, sequi assumenda?
              </p>
            </div>

            <div>
              <div className="flex gap-3 items-center mb-2">
                {/* Giá giảm */}
                <p className="line-through text-md text-sm md:text-base">
                  150.000 VNĐ
                </p>
                {/* Tag giảm */}
                <p className="bg-[#C61F05] text-[#fff] rounded-full px-2 py-1 md:px-3 md:py-2 text-xs">
                  Đăng ký sớm giảm 30%
                </p>
              </div>

              <div className="flex justify-between">
                {/* Giá mới */}
                <h3 className="md:text-5xl lg:text-4xl text-2xl text-[#F4B205] font-bold">
                  100.000 VNĐ
                </h3>
                {/* % giảm */}
                <div className=" text-[#C61F05] font-bold flex items-end">
                  <ArrowDown className="mb-1 w-4 h-4 md:w-6 md:h-6" />
                  <span className="md:text-4xl text-2xl">30</span>
                  <span className="text-base md:text-xl">%</span>
                </div>
              </div>
            </div>

            <div>
              <Button className="w-full">Đăng ký ngay</Button>
            </div>

            <div className="flex justify-between gap-5">
              <div>
                <div className="flex w-[75px] h-[15px] mb-1 text-[#C61F05]">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p className="text-xs">
                  4.7 - dựa trên 1,000+ đánh giá từ học viên
                </p>
              </div>

              <Button size="sm">
                Chia sẻ <Share className="ml-2" />
              </Button>
            </div>
          </div>

          <div>
            <div className="aspect-[16/9] bg-slate-100"></div>
          </div>
        </div>

        <Stats />
      </div>
    </section>
  );
}
