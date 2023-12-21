import HighlightWord from "@/components/highlight-word";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Speaker() {
  return (
    <section className="bg-[#C61F05]">
      <div className="container">
        <div className="flex flex-col gap-20 py-20">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_2fr] gap-16">
            <div className="rounded-full bg-auto relative aspect-[1/1] overflow-hidden">
              <Image
                src="/Cô Chang.png"
                alt="Speaker"
                fill
                className="w-full h-full"
              />
            </div>

            <div className="space-y-8">
              <div className="text-[#fff] font-bold">
                <p className="uppercase text-xl">Diễn giả</p>
                <h3 className="text-4xl">
                  Tiếng Trung<HighlightWord>Cô Chang</HighlightWord>
                </h3>
              </div>

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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ea, itaque.
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

          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-xl">
            <li className="bg-[#fff] text-center font-bold py-6 rounded-3xl">
              <h3 className="text-[#000]">Dạy giao tiếp</h3>
              <p className="text-[#C61F05]">1-1</p>
            </li>
            <li className="bg-[#fff] text-center font-bold py-6 rounded-3xl">
              <h3 className="text-[#000]">Luyện Thi</h3>
              <p className="text-[#C61F05]">HSK-HSKK</p>
            </li>
            <li className="bg-[#fff] text-center font-bold py-6 rounded-3xl">
              <h3 className="text-[#000]">Dạy Tiếng Trung Trẻ Em</h3>
            </li>
            <li className="bg-[#fff] text-center font-bold py-6 rounded-3xl">
              <h3 className="text-[#000]">Luyện thi đại học</h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
