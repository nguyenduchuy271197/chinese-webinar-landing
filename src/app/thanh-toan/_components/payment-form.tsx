"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const paymentFormSchema = z.object({
  name: z.string().min(2, {
    message: "Tên bạn phải có ít nhất 2 ký tự trở lên",
  }),

  phone: z
    .string()
    .min(10, "Số điện thoại phải có ít nhất 10 số trở lên")
    .regex(phoneRegex, "Số điện thoại chỉ có chữ số"),

  email: z
    .string()
    .min(2, {
      message: "Phải là địa chỉ email",
    })
    .email("Phải là địa chỉ email có thật"),

  code: z
    .string()
    .min(2, {
      message: "Check",
    })
    .optional(),
});

export default function PaymentForm() {
  const form = useForm<z.infer<typeof paymentFormSchema>>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      code: "",
    },
  });

  const { mutate: mutateSubmit, isPending: isSubmitting } = useMutation({
    mutationFn: (paymentInfo: z.infer<typeof paymentFormSchema>) =>
      axios.post("/api/payment", paymentInfo),
    onMutate: () => {
      toast.success("Bạn đã đăng ký thành công!");
      form.reset();
    },
  });

  async function onSubmit(data: z.infer<typeof paymentFormSchema>) {
    mutateSubmit(data);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-[#F8F9FA] px-6 py-10 rounded-md"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Họ và tên</FormLabel>
              <FormControl>
                <Input placeholder="Họ và tên" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SĐT</FormLabel>
              <FormControl>
                <Input placeholder="0xx xxx xx xx" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mã giới thiệu</FormLabel>
              <FormControl>
                <Input placeholder="Mã giới thiệu" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mx-auto">
          Hoàn tất thanh toán
        </Button>
      </form>
    </Form>
  );
}
