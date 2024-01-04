"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

export default function ThankYouPage() {
  const { mutate, isPending } = useMutation({
    mutationFn: () => axios.post("/api/success-confirmation"),
  });
  useEffect(() => {
    mutate();
    console.log("Ok!");
  }, [mutate]);

  return <div>Thank you for registration!</div>;
}
