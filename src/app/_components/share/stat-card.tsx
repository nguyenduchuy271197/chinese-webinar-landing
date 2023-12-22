"use client";
import CountUp from "react-countup";

export default function StatCard({
  value,
  postfix,
  title,
}: {
  value: number;
  postfix: string;
  title: string;
}) {
  return (
    <li className="text-center">
      <h3 className="text-4xl text-primary font-bold">
        <CountUp end={value} />
        {postfix}
      </h3>
      <p className="mt-3 text-gray-600 font-medium uppercase">{title}</p>
    </li>
  );
}
