import HighlightWord from "@/components/highlight-word";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function StoryMethods() {
  return (
    <section>
      <div className="container">
        <div className="grid sm:grid-cols-2 gap-20 sm:gap-8">
          <div className="flex flex-col gap-10">
            <h3 className="text-4xl font-bold">
              Phương pháp học tiếng Trung<HighlightWord>hiệu quả</HighlightWord>
            </h3>

            <div>
              <Image
                src="/story-methods.png"
                alt="table"
                width={540}
                height={212}
              />
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, adipisci repellendus cumque officiis aperiam quis
              consectetur. Enim ducimus voluptas, natus nulla tenetur at facere
              nostrum ea magni voluptatum quia hic.
            </p>

            <div className="space-y-10">
              <h3 className="text-2xl font-bold">
                Lorem ipsum dolor sit amet.
              </h3>

              <div className="relative">
                <div className="grid grid-cols-2 text-center rounded-md overflow-hidden">
                  <div>
                    <p className="uppercase bg-yellow-100 text-yellow-400 py-5 font-bold">
                      Chọn
                    </p>
                  </div>
                  <div>
                    <p className="uppercase bg-red-100 text-red-500 py-5 font-bold">
                      Không chọn
                    </p>
                  </div>
                </div>
                <div className="bg-black uppercase text-white rounded-full absolute left-1/2 top-1/2 font-bold -translate-x-1/2 -translate-y-1/2 h-28 w-28 sm:flex items-center justify-center hidden">
                  <p>Hay</p>
                </div>
              </div>

              <Button variant="secondary" size="lg">
                Đăng ký ngay
              </Button>
            </div>
          </div>

          <div>
            <svg
              viewBox="0 0 445 513"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="222.498" cy="274.759" r="213.289" stroke="black" />
              <circle cx="222.5" cy="274.759" r="79.1815" fill="#C61F05" />
              <circle cx="222.5" cy="79.1815" r="79.1815" fill="#D9D9D9" />
              <circle cx="79.1815" cy="433.121" r="79.1815" fill="#D9D9D9" />
              <circle cx="365.818" cy="433.121" r="79.1815" fill="#D9D9D9" />
              <path
                d="M223.207 163.198C222.817 162.807 222.183 162.807 221.793 163.198L215.429 169.562C215.038 169.952 215.038 170.586 215.429 170.976C215.819 171.367 216.453 171.367 216.843 170.976L222.5 165.319L228.157 170.976C228.547 171.367 229.181 171.367 229.571 170.976C229.962 170.586 229.962 169.952 229.571 169.562L223.207 163.198ZM221.793 189.95C222.183 190.341 222.817 190.341 223.207 189.95L229.571 183.586C229.962 183.196 229.962 182.563 229.571 182.172C229.181 181.782 228.547 181.782 228.157 182.172L222.5 187.829L216.843 182.172C216.453 181.782 215.819 181.782 215.429 182.172C215.038 182.563 215.038 183.196 215.429 183.586L221.793 189.95ZM221.5 163.905L221.5 189.243L223.5 189.243L223.5 163.905L221.5 163.905Z"
                fill="black"
              />
              <path
                d="M159.861 338.104C159.861 337.551 159.414 337.104 158.861 337.104L149.861 337.104C149.309 337.104 148.861 337.551 148.861 338.104C148.861 338.656 149.309 339.104 149.861 339.104L157.861 339.104L157.861 347.104C157.861 347.656 158.309 348.104 158.861 348.104C159.414 348.104 159.861 347.656 159.861 347.104L159.861 338.104ZM139.945 356.02C139.945 356.573 140.392 357.02 140.945 357.02L149.945 357.02C150.497 357.02 150.945 356.573 150.945 356.02C150.945 355.468 150.497 355.02 149.945 355.02L141.945 355.02L141.945 347.02C141.945 346.468 141.497 346.02 140.945 346.02C140.392 346.02 139.945 346.468 139.945 347.02L139.945 356.02ZM158.154 337.396L140.237 355.313L141.652 356.727L159.568 338.811L158.154 337.396Z"
                fill="black"
              />
              <path
                d="M286.637 337.104C286.084 337.104 285.637 337.551 285.637 338.104L285.637 347.104C285.637 347.656 286.084 348.104 286.637 348.104C287.189 348.104 287.637 347.656 287.637 347.104L287.637 339.104L295.637 339.104C296.189 339.104 296.637 338.656 296.637 338.104C296.637 337.551 296.189 337.104 295.637 337.104L286.637 337.104ZM304.553 357.02C305.106 357.02 305.553 356.573 305.553 356.02L305.553 347.02C305.553 346.468 305.106 346.02 304.553 346.02C304.001 346.02 303.553 346.468 303.553 347.02L303.553 355.02L295.553 355.02C295.001 355.02 294.553 355.468 294.553 356.02C294.553 356.573 295.001 357.02 295.553 357.02L304.553 357.02ZM285.93 338.811L303.846 356.727L305.261 355.313L287.344 337.396L285.93 338.811Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
