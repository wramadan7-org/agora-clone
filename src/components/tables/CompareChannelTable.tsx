import { compareChannelsOtpPlatform } from "../../constants/optPlatform";
import DynamicIcon from "../icons/DynamicIcon";

type CompareChannelTablePropsType = {
  data: typeof compareChannelsOtpPlatform;
};
export default function CompareChannelTable({
  data,
}: CompareChannelTablePropsType) {
  return (
    <table className="hidden lg:table table-fixed border-separate border-spacing-0 border border-gray-300 overflow-hidden rounded-lg w-full">
      <thead>
        <tr>
          {data?.headers?.map((header, index) => (
            <th
              key={`header-${index}`}
              className={`text-left w-fit border border-gray-300 py-5 px-3 ${
                index !== 0 && "bg-orange-50"
              }`}
            >
              {header.icon && (
                <DynamicIcon
                  iconName={header.icon}
                  className="text-orange-500"
                  size={25}
                />
              )}
              <span className="text-lg font-bold">{header.title}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.rows?.map((row, rIdx) => (
          <tr key={`row-${rIdx}`}>
            {row.map((item, iIdx) => (
              <td
                key={`item-${iIdx}`}
                className={`border border-gray-300 p-3 ${
                  iIdx !== 0
                    ? "text-center text-gray-700"
                    : "text-left text-orange-300 font-semibold"
                } ${iIdx !== 0 && rIdx === row.length + 1 && "bg-orange-50"}`}
              >
                {item}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
