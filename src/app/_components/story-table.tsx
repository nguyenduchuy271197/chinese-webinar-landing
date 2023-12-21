import HighlightWord from "@/components/highlight-word";
import { Button } from "@/components/ui/button";

export default function StoryTable() {
  const tableItems = [
    {
      name: "Liam James",
      salary: "$100K",
    },
    {
      name: "Olivia Emma",
      salary: "$90K",
    },
    {
      name: "William Benjamin",
      salary: "$80K",
    },
    {
      name: "Henry Theodore",
      salary: "$120K",
    },
    {
      name: "Amelia Elijah",
      salary: "$75K",
    },
  ];
  return (
    <section>
      <div className="max-w-screen-lg px-8 mx-auto">
        <div className="grid sm:grid-cols-[400px_1fr] gap-10">
          <div>
            <h3 className="text-4xl mb-6">
              Lorem<HighlightWord>ipsum</HighlightWord>dolor sit amet.
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              magni ducimus temporibus unde ea quasi natus odio, repellendus
              veniam aliquam blanditiis quos iste quae, in porro tempore iure
              impedit dolorum?
            </p>
          </div>

          {/* Table */}
          <div className="">
            <table className="w-full border table-auto text-sm text-left mb-6 shadow-sm overflow-x-auto">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">Username</th>
                  <th className="py-3 px-6">Salary</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {tableItems.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.salary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Description */}
            <h3 className="text-2xl font-bold text-center mb-8">
              Mức lương trung bình tại Thượng Hải 2021
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
