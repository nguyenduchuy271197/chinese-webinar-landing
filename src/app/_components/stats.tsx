import StatCard from "./share/stat-card";

export default function Stats() {
  const stats = [
    {
      postfix: "3",
      title: "Giờ ứng dụng phương pháp 3H",
    },
    {
      postfix: "HSK",
      title: "Chuẩn giáo trình tiếng Trung",
    },
    {
      value: 1,
      postfix: "TR+",
      title: "Followers",
    },
    {
      value: 1268,
      // postfix: "TR",
      title: "Người đã đăng ký",
    },
  ];
  return (
    <div className="flex justify-center sm:block">
      <ul className="grid grid-cols-4">
        {stats.map((item, idx) => (
          <StatCard key={idx} {...item} />
        ))}
      </ul>
    </div>
  );
}
