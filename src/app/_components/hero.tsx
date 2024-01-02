import { Button } from "@/components/ui/button";
import { ArrowDown, Star } from "lucide-react";
import Stats from "./stats";
import HighlightWord from "@/components/highlight-word";
import ShareButton from "./share/share-button";
import Link from "next/link";
import { Heading, HeadingTitle } from "./share/heading";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8 mb-12">
          <div>
            <div className="aspect-[16/9] bg-slate-100 rounded-md"></div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              {/* Title */}
              <h3 className="text-4xl/[1.4] font-bold">
                <HighlightWord>Ngừng học vẹt</HighlightWord>tiếng Trung sau 3
                giờ
              </h3>
              {/* Description */}
              <p className="text-sm lg:text-base">
                <b>CHỈ 3 GIỜ</b> thành thạo những cách diễn đạt phổ thông của
                người Trung Quốc để Mở cửa 95% cơ hội kiếm $5.000/tháng.
              </p>
            </div>

            <div>
              <div className="flex gap-3 items-center mb-2">
                {/* Giá giảm */}
                <p className="line-through text-md text-sm md:text-base">
                  150.000 VNĐ
                </p>
                {/* Tag giảm */}
                <p className="bg-primary text-primary-foreground rounded-full px-2 py-1 md:px-3 md:py-1 text-xs">
                  Đăng ký sớm giảm 33%
                </p>
              </div>

              <div className="flex justify-between">
                {/* Giá mới */}
                <h3 className="md:text-5xl lg:text-4xl text-2xl text-secondary font-bold">
                  100.000 VNĐ
                </h3>
                {/* % giảm */}
                <div className=" text-primary font-bold flex items-end">
                  <ArrowDown className="mb-1 w-4 h-4 md:w-6 md:h-6" />
                  <span className="md:text-4xl text-2xl">33</span>
                  <span className="text-base md:text-xl">%</span>
                </div>
              </div>

              <Button
                variant="secondary"
                size="lg"
                className="w-full flex justify-center uppercase"
              >
                <Link href="/thanh-toan">Giữ vé ngay</Link>
              </Button>
            </div>

            <div className="flex justify-between gap-5">
              <div className="space-y-1">
                <div className="flex items-center text-primary">
                  <Star className="fill-primary w-4 h-4" />
                  <Star className="fill-primary w-4 h-4" />
                  <Star className="fill-primary w-4 h-4" />
                  <Star className="fill-primary w-4 h-4" />
                  <Star className="fill-primary w-4 h-4" />
                </div>
                <p className="text-xs">
                  <strong>4.7</strong> - dựa trên 1,000+ đánh giá từ học viên
                </p>
              </div>

              <ShareButton />
            </div>
          </div>
        </div>

        <Stats />
      </div>
    </section>
  );
}
