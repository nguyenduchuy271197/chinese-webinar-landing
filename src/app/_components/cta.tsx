import HighlightWord from "@/components/highlight-word";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section>
      <div className="container">
        <div className="bg-primary space-y-8 text-white rounded-md mx-auto py-10 px-20">
          <div className="space-y-4">
            <h3 className="text-4xl sm:text-5xl font-bold">
              Lorem<HighlightWord>ipsum</HighlightWord>dolor sit amet.
            </h3>

            <p className="text-base sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              cumque.
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
