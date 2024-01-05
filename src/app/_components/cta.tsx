import HighlightWord from "@/components/highlight-word";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section>
      <div className="container">
        <div className="bg-primary space-y-8 text-white rounded-md mx-auto py-10 px-20">
          <div className="space-y-4">
            <h2 className="h2">
              Bắt đầu
              <HighlightWord className="text-secondary">
                hành trình
              </HighlightWord>
              ngừng học vẹt!
            </h2>

            <p className="body2-regular">
              Sau 3h, cuộc sống của bạn sẽ hoàn toàn thay đổi.
            </p>
          </div>
          <Button variant="secondary" size="lg" className="subtitle2">
            Đăng ký ngay
          </Button>
        </div>
      </div>
    </section>
  );
}
