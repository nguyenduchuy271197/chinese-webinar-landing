import { Info, InfoDescription, InfoTitle } from "./share/info";
import Image from "next/image";

const info = [
  {
    title: "Số tài khoản",
    description: "700 016 242465",
    hasClipboard: true,
  },
  {
    title: "Tên tài khoản",
    description: "CONG TY TNHH LIKE LION",
  },
  {
    title: "Chi nhánh",
    description: "Ngân hàng TNHH MTV Shinhan Việt Nam",
  },
  {
    title: "Nội dung",
    description: "SĐT_HọTên_Chinese3H",
    hasClipboard: true,
  },
];
export default function PaymentContent() {
  return (
    <div>
      <div className="pb-10">
        <p>Giá vé</p>
        <div className="flex items-end font-bold">
          <h3 className="text-4xl text-secondary">100.000 VNĐ</h3>
          <p>/ 1 vé</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="font-bold">Thông tin thanh toán</h3>

          <div className="flex flex-col gap-6">
            {info.map((infomation, idx) => (
              <Info key={idx}>
                <InfoTitle>{infomation.title}</InfoTitle>
                <InfoDescription hasClipboard={infomation.hasClipboard}>
                  {infomation.description}
                </InfoDescription>
              </Info>
            ))}
          </div>
        </div>

        <div>
          <Image src="/Thanh toán.png" alt="QR" width={253} height={307} />
        </div>
      </div>

      <p className="pt-10">
        Nếu bạn gặp bất cứ vấn đề nào, hãy nhắn tin trực tiếp cho chúng tôi qua{" "}
        <a href="#" className="underline text-primary">
          Messenger
        </a>
        .
      </p>
    </div>
  );
}
