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
      return <div>Thời hạn đã hết!</div>;
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
    <section className="fixed bottom-2 left-1/2 -translate-x-1/2 w-full hidden lg:block z-50">
      <div className="container">
        <div className="flex justify-between items-center px-8 py-2 border bg-white rounded-md">
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-full">
              <p className="text-white mx-3 my-2 subtitle2">
                Đăng ký sớm giảm 33%
              </p>
            </div>

            <div className="text-center">
              <p className="body2-semi">Giá vé sẽ tăng sau</p>
              <p className="text-primary subtitle2">
                <CountDown date={timestamp} renderer={renderer} />
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-end">
            <div className="-space-y-3">
              <p className="line-through body1-regular">150.000 VNĐ</p>
              <h3 className="text-secondary h2">100.000 VNĐ</h3>
            </div>

            <div className="mb-2 uppercase subtitle2">
              <Button variant="secondary">Giữ vé ngay</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
