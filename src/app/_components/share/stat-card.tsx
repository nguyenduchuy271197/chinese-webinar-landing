"use client";
import CountUp from "react-countup";

export default function StatCard({
  value,
  postfix,
  title,
}: {
  value?: number;
  postfix: string;
  title: string;
}) {
  return (
    <li className="flex items-center gap-2">
      <h3 className="text-4xl text-primary font-bold">
        {value !== undefined && <CountUp end={value} />}
        {postfix}
      </h3>
      <p className="text-gray-600 font-medium uppercase">{title}</p>
    </li>
  );
}
