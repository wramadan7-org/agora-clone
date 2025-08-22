import DynamicIcon from "../icons/DynamicIcon";

type CompareChannelCardPropType = {
  icon?: string;
  header: string;
  lists: {
    title: string;
    value: string;
  }[];
};

export default function CompareChannelCard({
  header,
  icon,
  lists,
}: CompareChannelCardPropType) {
  return (
    <div className="rounded-md border border-gray-300">
      <div className="flex flex-row gap-4 p-4 bg-orange-50">
        {icon && (
          <DynamicIcon iconName={icon} className="text-orange-500" size={25} />
        )}
        <span className="font-bold text-neutral-900 text-lg">{header}</span>
      </div>
      {lists?.map((item, idx) => (
        <div
          key={`list-${idx}`}
          className={`flex flex-row items-center justify-between p-4 ${
            idx === lists.length - 1 && "bg-orange-50"
          }`}
        >
          <span className="text-orange-300 font-semibold">{item?.title}</span>
          <span className="text-gray-700">{item?.value}</span>
        </div>
      ))}
    </div>
  );
}
