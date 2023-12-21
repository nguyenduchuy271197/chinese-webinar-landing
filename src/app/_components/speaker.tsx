import HighlightWord from "@/components/highlight-word";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Speaker() {
  return (
    <section className="bg-[#C61F05]">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 py-20">
          <div className="rounded-full">
            <Image src="/Cô Chang.png" alt="Speaker" width={50} height={50} />
          </div>

          <div className="space-y-8">
            <h3 className="font-bold text-[#fff] text-4xl">
              Tiếng Trung<HighlightWord>Cô Chang</HighlightWord>
            </h3>

            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-[#fff] text-xl">
                <div className="w-6 h-6 rounded-full bg-[#F4B205] shrink-0 flex justify-center items-center mt-1">
                  <Check className="text-[#Fff] w-4 h-4" />
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Odit, blanditiis!
                </p>
              </li>
              <li className="flex items-center gap-4 text-[#fff] text-xl">
                <div className="w-6 h-6 rounded-full bg-[#F4B205] shrink-0 flex justify-center items-center mt-1">
                  <Check className="text-[#Fff] w-4 h-4" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quasi, tempore!
                </p>
              </li>
              <li className="flex items-center gap-4 text-[#fff] text-xl">
                <div className="w-6 h-6 rounded-full bg-[#F4B205] shrink-0 flex justify-center items-center mt-1">
                  <Check className="text-[#Fff] w-4 h-4" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Error, sit.
                </p>
              </li>
              <li className="flex items-center gap-4 text-[#fff] text-xl">
                <div className="w-6 h-6 rounded-full bg-[#F4B205] shrink-0 flex justify-center items-center mt-1">
                  <Check className="text-[#Fff] w-4 h-4" />
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
                  itaque.
                </p>
              </li>
              <li className="flex items-center gap-4 text-[#fff] text-xl">
                <div className="w-6 h-6 rounded-full bg-[#F4B205] shrink-0 flex justify-center items-center mt-1">
                  <Check className="text-[#Fff] w-4 h-4" />
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, repellendus.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
