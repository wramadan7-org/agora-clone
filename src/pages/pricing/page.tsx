import { FormControlLabel, styled, Switch, SwitchProps } from "@mui/material";
import { useState } from "react";
import PricingBill from "../../components/cards/PricingBill";
import OrangeButton from "../../components/buttons/OrangeButton";
import { HiArrowNarrowRight } from "react-icons/hi";
import LaptopSvg from "../../assets/laptop.svg";
import TwitterCommentSlider from "../../components/slides/TwitterCommentSlider";
import AccordionComponent from "../../components/accordions/frequently-question/AccordionComponent";
import WhiteButton from "../../components/buttons/WhiteButton";
import {
  accordionPricing,
  comparePlans,
  pricings,
  supportedNetworks,
} from "../../constants/constant";
import { PlanPricingType } from "../../types/cardTypes";
import PricingPlanSlider from "../../components/slides/PricingPlanSlider";
import { Helmet } from "react-helmet-async";

const Switcher = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 45,
  height: 28,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#ff6726",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#ff6726",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#ff6726",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 25,
    height: 25,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

export default function Page() {
  const [isAnnualBillState, setIsAnnualBillState] = useState<boolean>(true);
  const [isShowMoreQuestionState, setIsShowMoreQuestionState] =
    useState<boolean>(false);

  const handleShowMoreQuestion = () => {
    setIsShowMoreQuestionState(!isShowMoreQuestionState);
  };

  return (
    <>
      <Helmet>
        <title>
          Social Media Management Pricing for Growing Teams | Agorapulse
        </title>
        <meta
          name="description"
          content="Social Media Management Pricing for Growing Teams"
        />
        <meta
          name="og:title"
          content="Social Media Management Pricing for Growing Teams | Agorapulse"
        />
        <meta
          property="og:description"
          content="Social Management Pricing for Growing Teams. Drive Real Impact on Social Media."
        />
      </Helmet>

      <main className="flex flex-col gap-10 pb-10 pt-24 max-w-[1400px] mx-auto overflox-x-hidden">
        <section id="hero-pricing" className="w-full px-5">
          <h1 className="text-neutral-900 font-extrabold text-4xl sm:text-5xl sm:text-center">
            Pricing and plans
          </h1>

          <p className="text-base text-neutral-900 mt-4 text-shadow-2xs sm:text-lg sm:text-center sm:max-w-[668px] sm:mx-auto">
            Close the gaps in your social media marketing workflow with the most
            complete tool for every stage of growth. Free for 30 days, no card
            required.
          </p>

          <div className="flex flex-col items-center justify-center mt-10 gap-5">
            <span className="text-base md:text-lg text-neutral-900 font-semibold">
              Supported networks
            </span>

            <div className="flex flex-row flex-wrap items-center justify-center gap-5">
              {supportedNetworks.map(
                (item: { name: string; image: string }, index: number) => (
                  <img
                    key={index}
                    src={item?.image}
                    alt={item?.name}
                    className="w-5 h-5 sm:w-7 sm:h-7 object-center object-contain"
                    decoding="async"
                  />
                )
              )}
            </div>
          </div>
        </section>

        <section
          id="billing"
          className="px-5 w-full items-center justify-center"
        >
          <div className="flex items-center justify-center">
            <FormControlLabel
              control={
                <Switcher
                  sx={{ m: 1 }}
                  value={isAnnualBillState}
                  defaultChecked
                  onChange={(e) => setIsAnnualBillState(e.target.checked)}
                />
              }
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#858fa1",
                },
              }}
              label={isAnnualBillState ? "Billing annually" : "Billing monthly"}
            />
          </div>

          <div className="flex flex-col gap-5 mt-5">
            <PricingPlanSlider
              subscriptionType={isAnnualBillState ? "annual" : "monthly"}
            />

            <div className="flex flex-col items-center justify-center">
              <PricingBill
                item={
                  (pricings?.find(
                    (item) => item?.plan?.toLowerCase() === "free"
                  ) as PlanPricingType) || null
                }
              />

              {pricings?.find(
                (item) => item?.plan?.toLowerCase() === "free"
              ) && (
                <p className="text-center text-sm text-neutral-400 font-semibold">
                  *
                  {
                    pricings?.find(
                      (item) => item?.plan?.toLowerCase() === "free"
                    )?.note
                  }
                </p>
              )}
            </div>
          </div>
        </section>

        <section
          id="commpare-plans"
          className="flex items-center justify-center"
        >
          <div className="w-full max-w-48 sm:max-w-56 rounded-full overflow-hidden">
            <OrangeButton
              text="Compare our plans"
              icon={
                <HiArrowNarrowRight
                  size={16}
                  className="mt-1 text-white group-hover:text-orange-600 group-hover:scale-125 duration-300 ease-in-out"
                />
              }
              link="/compare-plans"
            />
          </div>
        </section>

        <section
          id="are-you-agency"
          className="w-full px-5 py-12 flex flex-col gap-5 items-center justify-center bg-purple-100 rounded-sm"
        >
          <div className="flex flex-col gap-3">
            <h1 className="font-extrabold text-neutral-900 text-4xl sm:text-5xl text-center">
              Are you an agency?
            </h1>

            <span className="text-base text-neutral-900 text-center font-semibold max-w-[750px]">
              Are you looking for advanced social media management and analytics
              features and reliable support? Let's talk about your needs.
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
            <img
              src={LaptopSvg}
              alt="laptop-image"
              loading="lazy"
              className="w-32 object-center object-contain"
            />

            <a
              type="button"
              role="button"
              aria-label="contact-us-button"
              href="https://www.agorapulse.com/contact/"
              className="text-purple-600 bg-white py-2 px-2.5 md:px-5 md:py-3 border-none cursor-pointer flex flex-row flex-nowrap items-center justify-center gap-2 rounded-full group duration-200 ease-out shadow group hover:bg-purple-400 hover:text-white"
            >
              <span className="font-bold text-base">Contact Us</span>

              <HiArrowNarrowRight
                size={16}
                className="mt-1 text-purple-600 group-hover:text-white group-hover:scale-125 duration-300 ease-in-out"
              />
            </a>
          </div>
        </section>

        <section id="compare-plans" className="w-full px-5 pt-5 pb-0">
          <h1 className="font-extrabold text-neutral-900 text-4xl sm:text-5xl text-center">
            Compare plans
          </h1>

          <div className="relative h-[510px] w-full bg-gray-300/5 mt-10 overflow-x-scroll text-neutral-800">
            <table width={"100%"}>
              {comparePlans?.map((itemParent, indexParent) => {
                if (itemParent?.type === "thead-core") {
                  return (
                    <thead key={`thead-${indexParent}`}>
                      <tr key={`tr-${indexParent}`} className="h-20">
                        {itemParent?.data?.map((itemChild, indexChild) => {
                          if (indexChild === 0) {
                            return (
                              <th
                                key={`th-${indexParent}-${indexChild}`}
                                className="bg-[#f6f8ff] sticky top-0 z-10 min-w-60 text-nowrap px-6 text-start w-fit"
                              >
                                <div className="flex flex-row items-center justify-start gap-1">
                                  {itemParent?.image && (
                                    <img
                                      src={itemParent?.image}
                                      alt={`icon-${itemChild}`}
                                      className="w-[65px] h-[55px]"
                                    />
                                  )}
                                  {itemChild}
                                </div>
                              </th>
                            );
                          } else {
                            return (
                              <th
                                key={`th-${indexParent}-${indexChild}`}
                                className="bg-[#f6f8ff] sticky top-0 z-20 min-w-24 text-nowrap px-6 text-center"
                              >
                                {itemChild}
                              </th>
                            );
                          }
                        })}
                      </tr>
                    </thead>
                  );
                } else if (itemParent?.type === "thead") {
                  return (
                    <thead key={`thead-${indexParent}`}>
                      <tr key={`tr-${indexParent}`} className="h-20">
                        {itemParent?.data?.map((itemChild, indexChild) => (
                          <th
                            key={`th-${indexParent}-${indexChild}`}
                            className={`bg-[#f6f8ff] sticky top-0 z-10 ${
                              indexChild === 0 ? "min-w-60" : "min-w-24"
                            } text-nowrap px-6 text-start`}
                          >
                            {indexChild === 0 ? (
                              <div className="flex flex-row items-center justify-start gap-1 text-start">
                                {itemParent?.image && (
                                  <img
                                    src={itemParent?.image}
                                    alt={`icon-${itemChild}`}
                                    className="w-[65px] h-[55px]"
                                  />
                                )}
                                {itemChild}
                              </div>
                            ) : (
                              itemChild
                            )}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  );
                } else {
                  return (
                    <tbody key={`tbody-${indexParent}`}>
                      <tr key={`tr-${indexParent}`}>
                        {itemParent?.data?.map((itemChild, indexChild) => (
                          <td
                            key={`td-${indexParent}-${indexChild}`}
                            className={
                              indexChild === 0
                                ? "px-6 text-start py-2.5"
                                : "px-6 text-center w-fit max-w-[169px] py-2.5"
                            }
                          >
                            {typeof itemChild === "boolean" ? (
                              itemChild ? (
                                <img
                                  src="https://www.agorapulse.com/assets/pricing/icon_available.svg"
                                  alt="available"
                                  className="w-[37px] h-[36px] mx-auto"
                                />
                              ) : (
                                <img
                                  src="https://www.agorapulse.com/assets/pricing/icon_unvailable.svg"
                                  alt="unavailable"
                                  className="w-[37px] h-[36px] mx-auto"
                                />
                              )
                            ) : (
                              itemChild
                            )}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  );
                }
              })}
            </table>
          </div>
        </section>

        <section
          id="reason-chose-agorapulse"
          className="flex-flex-col gap-10 p-5"
        >
          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="font-extrabold text-neutral-900 text-4xl sm:text-5xl text-center">
              See Why Customer Are Choosing Agorapulse
            </h1>

            <div className="flex flex-row flex-wrap gap-5 items-center justify-center sm:justify-evenly sm:gap-0 w-full mt-8">
              {[
                "https://www.agorapulse.com/assets/badges/winter/2025/g2-SocialMediaAnalytics_Leader_Mid-Market_Leader.webp",
                "https://www.agorapulse.com/assets/badges/winter/2025/g2-SocialMediaAnalytics_Leader_Mid-Market_Leader.webp",
                "https://www.agorapulse.com/assets/badges/winter/2025/g2-SocialMediaListeningTools_BestEstimatedROI_Enterprise_Roi.webp",
                "https://www.agorapulse.com/assets/badges/winter/2025/g2-SocialMediaManagement_EasiestToUse_Enterprise_EaseOfUse.webp",
              ].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="image"
                  className="w-20 sm:w-24 md:w-28 object-center object-contain"
                  loading="lazy"
                />
              ))}
            </div>

            <div className="bg-red-50 p-5 rounded-md flex flex-col gap-3 w-full items-center justify-center mt-8">
              <p className="font-bold text-neutral-900 text-center text-base md:text-3xl max-w-[726px]">
                "Agorapulse saves myself and my team so much time. We have
                multiple pages and accounts for our company and to see them all
                in one place is a dream. It's also great to see when another
                team member is online so we don't overlap and are more
                efficient."
              </p>

              <i className="font-semibold text-neutral-900 text-center text-sm md:text-lg max-w-[726px]">
                — Amanda Coxworth, Social Media Manager, Inspiring Vacations
              </i>
            </div>
          </div>
        </section>

        <section id="twitter-comments" className="w-full px-5 mt-10">
          <TwitterCommentSlider />
        </section>

        <section id="frequently-question" className="flex flex-col gap-10 p-5">
          <h1 className="font-bold text-4xl sm:text-5xl text-neutral-900">
            Frequently Asked Questions
          </h1>

          <div>
            <AccordionComponent
              data={accordionPricing}
              isShowAll={isShowMoreQuestionState}
            />
          </div>

          {!isShowMoreQuestionState && (
            <div className="w-full sm:max-w-44 cursor-pointer">
              <WhiteButton
                text="More Question"
                icon={
                  <HiArrowNarrowRight
                    size={16}
                    className="mt-1 text-orange-600 group-hover:text-white group-hover:scale-125 duration-300 ease-in-out"
                  />
                }
                isButton
                onClick={handleShowMoreQuestion}
              />
            </div>
          )}
        </section>
      </main>
    </>
  );
}
