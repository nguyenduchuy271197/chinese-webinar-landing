import HighlightWord from "@/components/highlight-word";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section>
      <div className="container">
        <div className="bg-primary space-y-8 text-white rounded-md mx-auto py-10 px-20">
          <div className="space-y-4">
            <h3 className="text-4xl sm:text-5xl font-bold">
              Bắt đầu<HighlightWord>hành trình</HighlightWord>ngừng học vẹt!
            </h3>

            <p className="text-base sm:text-xl">
              Sau 3h, cuộc sống của bạn sẽ hoàn toàn thay đổi.
            </p>
          </div>
          <Button variant="secondary" size="lg">
            Đăng ký ngay
          </Button>
        </div>
      </div>
    </section>
  );
}
