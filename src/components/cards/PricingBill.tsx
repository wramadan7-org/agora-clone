import { Tooltip } from "@mui/material";
import { HiArrowNarrowRight } from "react-icons/hi";
import { RiInformation2Fill } from "react-icons/ri";
import { PlanPricingType } from "../../types/cardTypes";

export default function PricingBill({
  item,
  subscriptionType,
}: {
  item: PlanPricingType | null;
  subscriptionType?: "annual" | "monthly";
}) {
  return (
    <div
      className={`flex gap-5 border border-gray-300 rounded-2xl px-3 py-5 w-full ${
        item?.plan?.toLowerCase() === "advanced" ? "bg-orange-50" : "bg-white"
      } ${
        item?.plan?.toLowerCase() === "free"
          ? "max-w-80 md:max-w-full flex-col md:flex-row md:items-center md:justify-around"
          : "max-w-80 flex-col"
      }`}
    >
      <h3
        className={`text-4xl text-center font-extrabold ${
          item?.plan?.toLowerCase() === "advanced"
            ? "text-orange-600"
            : "text-gray-500"
        }`}
      >
        {item?.plan || "-"}
      </h3>

      {item?.plan?.toLowerCase() === "custom" && (
        <>
          <p className="text-center text-sm">
            Custom solutions tailored to your business needs.
          </p>

          <img
            src="https://www.agorapulse.com/assets/pricing/Cogs_reporting.webp"
            className="w-14 h-14 object-contain object-center mx-auto"
            alt="custom"
          />
        </>
      )}

      <div className="flex flex-col items-center justify-center gap-1">
        {item?.plan?.toLowerCase() === "free" && (
          <h5 className="text-2xl text-neutral-900 font-extrabold text-center">
            $0/Mo
          </h5>
        )}

        {item?.plan?.toLowerCase() !== "free" &&
          item?.plan?.toLowerCase() !== "custom" && (
            <div className="flex flex-row items-center justify-center gap-1">
              <h5 className="text-5xl text-neutral-900 font-extrabold text-center">
                <span className="text-lg font-extrabold text-neutral-900">
                  US $
                </span>
                {item?.pricing?.[subscriptionType || "monthly"]?.amount}
              </h5>
              <div className="flex flex-col text-gray-400 text-sm">
                <span>
                  per {item?.pricing?.[subscriptionType || "monthly"]?.per}
                </span>
                <span>
                  (Billed{" "}
                  {
                    item?.pricing?.[subscriptionType || "monthly"]
                      ?.billing_cycle
                  }
                  )
                </span>
              </div>
            </div>
          )}

        {item?.plan?.toLowerCase() !== "free" &&
          item?.plan?.toLowerCase() !== "custom" && (
            <div>
              <p className="text-center text-sm">
                {`${
                  item?.included_social_profiles?.[
                    subscriptionType || "monthly"
                  ]
                } social profiles`}
              </p>

              <p className="text-center text-sm">
                {`$${
                  item?.additional_profile_cost?.[subscriptionType || "monthly"]
                    ?.amount
                }/${
                  item?.additional_profile_cost?.[subscriptionType || "monthly"]
                    ?.per
                } ${
                  item?.additional_profile_cost?.[subscriptionType || "monthly"]
                    ?.note
                }`}
              </p>
            </div>
          )}

        {item?.plan?.toLowerCase() === "free" && (
          <p className="text-center">
            <span className="font-bold">
              {item?.included_social_profiles?.[subscriptionType || "monthly"]}
            </span>{" "}
            social profiles,{" "}
            <span className="font-bold">{item?.include_users}</span> user
          </p>
        )}
      </div>

      {item?.plan?.toLowerCase() !== "free" && (
        <button
          type="button"
          className={`inset-ring inset-ring-gray-100 font-bold py-3 px-4 rounded-full hover:shadow-xs transform ease-in-out duration-300 cursor-pointer flex flex-row items-center justify-center gap-5 ${
            item?.plan?.toLowerCase() === "advanced"
              ? "bg-orange-500 hover:bg-white text-white hover:text-orange-600"
              : "bg-white hover:bg-blue-400 text-blue-500 hover:text-white shadow-xs/30 "
          }`}
        >
          {item?.cta?.label}{" "}
          <HiArrowNarrowRight
            size={16}
            className={`mt-1 group-hover:scale-125 duration-300 ease-in-out ${
              item?.plan?.toLowerCase() === "advanced"
                ? "text-white group-hover:text-orange-600"
                : "text-blue-500 group-hover:text-white"
            }`}
          />
        </button>
      )}

      {item?.plan?.toLowerCase() === "custom" && (
        <a
          href="#"
          className="text-neutral-900 font-semibold underline hover:text-blue-600 hover:no-underline cursor-pointer mx-auto"
        >
          Book a demo
        </a>
      )}

      <div className="flex flex-col gap-2">
        <p className="font-semibold">
          All features available on the Standard plan, plus:
        </p>

        <ul className="list-disc list-inside text-sm">
          {item?.features?.map((item, index: number) => {
            return item?.info ? (
              <li key={`benefit-${index}`}>
                {item?.label}{" "}
                <Tooltip title={item?.info} arrow placement="top">
                  <button
                    type="button"
                    // onClick={() => console.log("information")}
                    aria-label="information"
                    className="cursor-pointer"
                  >
                    <RiInformation2Fill size={12} className="text-gray-400" />
                  </button>
                </Tooltip>
              </li>
            ) : (
              <li key={`benefit-${index}`}>{item?.label}</li>
            );
          })}
        </ul>
      </div>

      {item?.plan?.toLowerCase() === "free" && (
        <button
          type="button"
          className="bg-white hover:bg-blue-400 text-blue-500 shadow-xs/30 inset-ring inset-ring-gray-100 hover:text-white font-bold py-3 px-4 rounded-full hover:shadow-xs transform ease-in-out duration-300 cursor-pointer flex flex-row flex-nowrap text-nowrap items-center justify-center gap-5"
        >
          {item?.cta?.label}{" "}
          <HiArrowNarrowRight
            size={16}
            className="mt-1 text-blue-500 group-hover:text-white group-hover:scale-125 duration-300 ease-in-out"
          />
        </button>
      )}
    </div>
  );
}
