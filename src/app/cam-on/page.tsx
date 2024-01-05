"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Check } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function ThankYouPage() {
  const { mutate, isPending } = useMutation({
    mutationFn: () => axios.post("/api/success-confirmation"),
  });
  useEffect(() => {
    mutate();
    console.log("Ok!");
  }, [mutate]);

  return (
    <div className="bg-neutral-100 rounded-md">
      <div className="flex flex-col py-[87px] px-[60px] items-center gap-6">
        <div className="size-[100px] bg-[#008900] rounded-full flex justify-center items-center">
          <Check className="size-[70px] text-white" />
        </div>

        <div className="text-center">
          <h4 className="subtitle1">Bạn đã đặt vé thành công</h4>
          <p className="body2-regular">
            Theo dõi email thường xuyên để nhận được thông báo mới nhất từ chúng
            tôi.
          </p>
        </div>

        <Button className="uppercase bg-neutral-600">
          <Link href="/">Trở về trang chủ</Link>
        </Button>
      </div>
    </div>
  );
}
