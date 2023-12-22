import StatCard from "./share/stat-card";

export default function Stats() {
  const stats = [
    {
      value: 200,
      postfix: "+",
      title: "Lớp học",
    },
    {
      value: 3000,
      postfix: "+",
      title: "Học viên",
    },
    {
      value: 133.1,
      postfix: "K",
      title: "Followers",
    },
    {
      value: 1.8,
      postfix: "TR",
      title: "Likes",
    },
  ];
  return (
    <div className="flex justify-center sm:block">
      <ul className="inline-grid grid-cols-2 items-center justify-center gap-x-12 gap-y-10 sm:flex sm:flex-wrap md:gap-x-24">
        {stats.map((item, idx) => (
          <StatCard key={idx} {...item} />
        ))}
      </ul>
    </div>
  );
}
