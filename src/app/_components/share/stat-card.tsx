"use client";
import CountUp from "react-countup";

export default function StatCard({
  value,
  postfix,
  title,
}: {
  value?: number;
  postfix?: string;
  title: string;
}) {
  return (
    <li className="text-center md:flex items-center gap-2">
      <h1 className="h3 font-bold md:h1 text-primary">
        {value !== undefined && <CountUp end={value} />}
        {postfix}
      </h1>
      <p className="text-gray-600 body2-regular md:body1-regular uppercase">
        {title}
      </p>
    </li>
  );
}
