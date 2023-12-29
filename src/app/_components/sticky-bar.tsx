"use client";
import { Button } from "@/components/ui/button";
import CountDown, { CountdownRenderProps, zeroPad } from "react-countdown";

export default function StickyBar() {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      // Render a completed state
      return <div>Countdown completed!</div>;
    } else {
      // Render a countdown
      return (
        <span>
          {zeroPad(days)} ngày {zeroPad(hours)}:{zeroPad(minutes)}:
          {zeroPad(seconds)}
        </span>
      );
    }
  };

  const targetDate = new Date(Date.UTC(2024, 0, 1, -7, 0, 0));
  const timestamp = targetDate.getTime();
  return (
    <section className="fixed bottom-2 left-1/2 -translate-x-1/2 w-full hidden lg:block">
      <div className="container">
        <div className="flex justify-between items-center px-8 py-2 border bg-white">
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-full">
              <p className="text-white mx-3 my-2 font-bold">
                Đăng ký sớm giảm 30%
              </p>
            </div>

            <div className="text-center">
              <p className="font-semibold">Thời hạn đăng ký còn</p>
              <p className="text-primary font-semibold">
                <CountDown date={timestamp} renderer={renderer} />
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div>
              <p className="line-through font-light">150.000 VNĐ</p>
              <h3 className="text-secondary text-4xl font-bold">100.000 VNĐ</h3>
            </div>

            <div className="flex items-end">
              <Button>Đăng ký ngay</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
