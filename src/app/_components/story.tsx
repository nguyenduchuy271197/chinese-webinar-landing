import { Check, X } from "lucide-react";

export default function Story() {
  const story = {
    before: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi quia repellat omnis nisi? Sapiente.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi quia repellat omnis nisi? Sapiente.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi quia repellat omnis nisi? Sapiente.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi quia repellat omnis nisi? Sapiente.",
    ],
    after: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi quia repellat omnis nisi? Sapiente.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi quia repellat omnis nisi? Sapiente.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi quia repellat omnis nisi? Sapiente.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi quia repellat omnis nisi? Sapiente.",
    ],
  };

  return (
    <section>
      <div className="max-w-screen-lg px-8 mx-auto">
        <div className="space-y-12">
          <h3 className="text-center text-4xl font-bold">
            All of it can change today.
          </h3>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="border px-8 bg-[#FFE4DF]">
              <div className="text-center py-4">
                <h4 className="uppercase font-bold text-xl">Before</h4>
              </div>

              <hr className="border-[#C61F05]" />

              <div className="space-y-6 py-6">
                {story.before.map((item) => (
                  <div className="flex gap-4" key={item}>
                    <div className="w-6 h-6 rounded-full bg-white shrink-0 flex justify-center items-center mt-1">
                      <X className="text-[#C61F05] w-4 h-4" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border px-8 bg-[#FFEFC4]">
              <div className="text-center py-4">
                <h4 className="uppercase font-bold text-xl">After</h4>
              </div>

              <hr className="border-[#F4B205]" />

              <div className="space-y-6 py-6">
                {story.after.map((item) => (
                  <div className="flex gap-4" key={item}>
                    <div className="w-6 h-6 rounded-full bg-white shrink-0 flex justify-center items-center mt-1">
                      <Check className="text-[#F4B205] w-4 h-4" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
