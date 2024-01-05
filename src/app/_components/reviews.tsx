import HighlightWord from "@/components/highlight-word";
import { cn } from "@/lib/utils";
import YoutubeVideo from "./share/youtube-video";

const reviews = [
  {
    videoId: "paC2nT0NX9k",
    title: "",
  },
  {
    videoId: "paC2nT0NX9k",
    title: "",
  },
  {
    videoId: "paC2nT0NX9k",
    title: "",
  },
  {
    videoId: "",
    title: "",
  },
  {
    videoId: "",
    title: "",
  },
  {
    videoId: "",
    title: "",
  },
  {
    videoId: "",
    title: "",
  },
  {
    videoId: "",
    title: "",
  },
  {
    videoId: "",
    title: "",
  },
];

export default function Reviews() {
  return (
    <section>
      <div className="container">
        <div className="space-y-16">
          <div>
            <h2 className="h3 font-bold md:h2">
              Sau<HighlightWord>khoá học</HighlightWord>các học viên nói 流畅度?
            </h2>
            <p className="body3 md:body2-regular">
              Review và kết quả của các bạn học viên sau một thời gian học
            </p>
          </div>

          <div className="grid grid-cols-4 auto-rows-[150px] gap-8 [&>div]:bg-gray-200">
            {reviews.map((review, i) => (
              <div
                className={cn(
                  "rounded-md",
                  [1, 6, 7].includes(i)
                    ? "row-span-2"
                    : [3, 4].includes(i)
                    ? "row-span-3"
                    : ""
                )}
                key={i}
              >
                <YoutubeVideo videoId={review.videoId} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
