export default function Stats() {
  const stats = [
    {
      data: "90K",
      title: "Active users",
    },
    {
      data: "120K",
      title: "Total Sales",
    },
    {
      data: "25+",
      title: "Countries",
    },
    {
      data: "2.5M+",
      title: "Total revenue",
    },
  ];
  return (
    <div className="flex justify-center sm:block">
      <ul className="inline-grid grid-cols-2 items-center justify-center gap-x-12 gap-y-10 sm:flex sm:flex-wrap md:gap-x-24">
        {stats.map((item, idx) => (
          <li key={idx} className="text-center">
            <h3 className="text-4xl text-primary font-bold">{item.data}</h3>
            <p className="mt-3 text-gray-600 font-medium">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
