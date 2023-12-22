import HighlightWord from "@/components/highlight-word";
import { CalendarClock } from "lucide-react";
import AgendaCards from "./share/agenda-cards";

const curriculum = [
  {
    time: "2:00 PM",
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis dolor quos suscipit rerum blanditiis quisquam eum, dolorem odit facilis natus, possimus minus quo nam! Debitis cum quod molestias ad.",
  },
  {
    time: "2:00 PM",
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis dolor quos suscipit rerum blanditiis quisquam eum, dolorem odit facilis natus, possimus minus quo nam! Debitis cum quod molestias ad.",
  },
  {
    time: "2:00 PM",
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis dolor quos suscipit rerum blanditiis quisquam eum, dolorem odit facilis natus, possimus minus quo nam! Debitis cum quod molestias ad.",
  },
  {
    time: "2:00 PM",
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis dolor quos suscipit rerum blanditiis quisquam eum, dolorem odit facilis natus, possimus minus quo nam! Debitis cum quod molestias ad.",
  },
  {
    time: "2:00 PM",
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis dolor quos suscipit rerum blanditiis quisquam eum, dolorem odit facilis natus, possimus minus quo nam! Debitis cum quod molestias ad.",
  },
];

export default function Agenda() {
  return (
    <section>
      <div className="container">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <div className="space-y-8 max-w-lg sticky top-20">
              <h3 className="font-bold text-4xl">
                Lorem<HighlightWord>ipsum</HighlightWord>dolor sit amet.
              </h3>

              <span className="flex gap-2 font-medium">
                <CalendarClock />
                02:00 PM - 06:00 PM, 22/01/2024
              </span>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita delectus iusto inventore voluptatem! Fugit odit
                doloremque sequi maiores, sint quibusdam! Consectetur ducimus
                aperiam vitae maiores fuga, sint reprehenderit! Quibusdam,
                harum!
              </p>
            </div>
          </div>

          <AgendaCards curriculum={curriculum} />
        </div>
      </div>
    </section>
  );
}
