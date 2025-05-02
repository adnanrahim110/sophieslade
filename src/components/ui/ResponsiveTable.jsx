import React from "react";

const ResponsiveTable = ({ table }) => {
  return (
    <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 px-2 lg:px-8 max-lg:overflow-x-auto">
      <div className="align-middle inline-block min-w-full shadow-[0_0_8px_5px_rgba(0,0,0,0.1)] overflow-hidden bg-white px-8 pt-6 pb-5 rounded-bl-lg rounded-lg">
        <table className="min-w-full">
          <thead>
            <tr className="border-b-2 border-b-neutral-300 text-sm font-black font-serif uppercase text-left text-neutral-600 tracking-wide *:py-3">
              <th>Title</th>
              <th>Date</th>
              <th>Time/Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {table.map((item, idx) => (
              <tr
                key={idx}
                className="not-last:border-b border-b-neutral-200 *:py-2"
              >
                <td className="whitespace-no-wrap max-md:min-w-40">
                  <div className="leading-5 text-black text-sm md:text-base font-medium max-w-11/12">
                    {item.title}
                  </div>
                </td>
                <td className="whitespace-no-wrap py-1 max-md:min-w-32">
                  <div className="bg-imago-50 rounded-lg text-[10px] md:text-xs font-medium text-black max-w-10/12 px-3 text-center">
                    {item.info.map((infoItem, i) => (
                      <div
                        key={i}
                        className={`${
                          item.info.length === 1
                            ? "py-3"
                            : "first:pt-3 first:pb-1 last:pt-1 last:pb-3 not-last:border-b border-b-imago-300"
                        }`}
                      >
                        {infoItem.date}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="whitespace-no-wrap py-1 max-md:min-w-24">
                  <div className="max-w-10/12 bg-green-50 px-2 text-xs text-green-800 rounded-lg text-center font-semibold">
                    {item.info.map((infoItem, i) => (
                      <div
                        key={i}
                        className={`${
                          item.info.length === 1
                            ? "py-3"
                            : "first:pt-3 first:pb-1 last:pt-1 last:pb-3 not-last:border-b border-b-gray-300"
                        }`}
                      >
                        {infoItem.time}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="whitespace-no-wrap text-right">
                  <div className="flex flex-col gap-2">
                    {item.info.map((infoItem, i) => (
                      <a
                        key={i}
                        href={infoItem.url}
                        className={`text-xs inline-block rounded-sm no-underline! text-white! text-center w-full min-w-24 px-2 py-1.5 ${
                          infoItem.url.startsWith("mailto:")
                            ? "bg-blue-500 hover:bg-blue-800"
                            : "bg-green-600 hover:bg-green-800"
                        }`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {infoItem.btnText}
                      </a>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponsiveTable;
