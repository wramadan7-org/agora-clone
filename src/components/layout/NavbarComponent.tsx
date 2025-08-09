import { useEffect, useState } from "react";
import OrangeButton from "../buttons/OrangeButton";
import { HiArrowNarrowRight } from "react-icons/hi";
import WhiteButton from "../buttons/WhiteButton";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowDownSLine, RiCloseLargeLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import DynamicIcon from "../icons/DynamicIcon";
import {
  advancedFeatureNavbarOptions,
  resourceLearnConnectNavbarOptions,
  resourceStrengthYourSkillNavbarOptions,
  solutionsIndustrieNavbarOptions,
  solutionsNetworkIntegrationNavbarOptions,
  topFeatureNavbarOptions,
} from "../../constants/constant";

export default function NavbarComponent() {
  const [isScrolledState, setIsScrolledState] = useState<boolean>(false);
  const [isOpenMenuState, setIsOpenMenuState] = useState<boolean>(false);
  const [subMenuActiveState, setSubMenuActiveState] = useState<
    "top-feature" | "solutions" | "resources" | null
  >(null);

  const handleToggleMenu = () => {
    setIsOpenMenuState(!isOpenMenuState);
  };

  const handleToggleSubMenu = (
    activeSubMenu?: "top-feature" | "solutions" | "resources" | null
  ) => {
    setSubMenuActiveState(
      activeSubMenu === subMenuActiveState ? null : activeSubMenu || null
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledState(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full top-0 left-0 py-3 z-50 ${
        isScrolledState ? "bg-white" : "bg-transparent"
      }`}
    >
      <nav
        id="navbar"
        className="flex flex-row justify-between lg:justify-start items-center px-5 max-w-[1400px] mx-auto relative"
      >
        <a
          href="/"
          id="brand-nav"
          className="flex flex-row flex-nowrap gap-0 cursor-pointer"
        >
          <span className="text-lg text-orange-600 font-bold">agora</span>
          <span className="text-lg text-neutral-900 font-bold">pulse</span>
        </a>

        <button
          type="button"
          onClick={handleToggleMenu}
          className="outline-none border-none w-fit cursor-pointer lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpenMenuState ? (
            <RiCloseLargeLine className="duration-150 ease-in-out" />
          ) : (
            <RxHamburgerMenu size={20} className="duration-150 ease-in-out" />
          )}
        </button>
        {isOpenMenuState && (
          <div
            className={`absolute top-[110%] border-t border-gray-200 shadow-2xl left-0 flex flex-col w-full bg-white px-5 pt-7 ${
              subMenuActiveState ? "pb-20" : "pb-10"
            } gap-3 rounded-b-md lg:hidden overflow-y-scroll max-h-dvh`}
          >
            <ul className="flex flex-col gap-3 px-3 w-full">
              <li className="space-y-3">
                <button
                  type="button"
                  onClick={() => handleToggleSubMenu("top-feature")}
                  className="font-semibold text-gray-700 flex flex-row items-center justify-between w-full cursor-pointer"
                >
                  <span>Top Features</span>

                  <RiArrowDownSLine
                    size={24}
                    className={`transition-transform duration-100 ${
                      subMenuActiveState === "top-feature" && "rotate-180"
                    }`}
                  />
                </button>
                {subMenuActiveState === "top-feature" && (
                  <div className="flex flex-col gap-3">
                    <div>
                      <span className="font-bold text-gray-700">
                        Core features
                      </span>
                      <div className="grid grid-cols-12 px-3">
                        {topFeatureNavbarOptions.map((feature, index) => (
                          <a
                            key={index}
                            href="/"
                            className="col-span-12 sm:col-span-6 grid grid-cols-12 group gap-2 cursor-pointer hover:bg-orange-100 px-1 py-2"
                          >
                            <div className="col-span-1 flex items-center justify-center">
                              <DynamicIcon
                                iconName={feature.icon as string}
                                size={20}
                                className={`${feature.hoverColor}`}
                              />
                            </div>
                            <div className="col-span-11 flex flex-col">
                              <span className="font-bold text-gray-700">
                                {feature.title}
                              </span>
                              <span className={"text-sm"}>
                                {feature.description}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 -mx-5 gap-3">
                      <div className="bg-orange-100 px-8 py-4 rounded-md">
                        <span className="font-bold text-gray-700 -mx-3">
                          Advanced features
                        </span>
                        {advancedFeatureNavbarOptions.map((advanced, index) => (
                          <a
                            key={index}
                            href="/"
                            className="col-span-12 sm:col-span-6 grid grid-cols-12 group gap-2 cursor-pointer hover:bg-gray-50 py-2 px-1"
                          >
                            <div className="col-span-1 flex items-center justify-center">
                              <DynamicIcon
                                iconName={advanced.icon as string}
                                size={20}
                                className={`${advanced.hoverColor}`}
                              />
                            </div>
                            <div className="col-span-11 flex flex-col">
                              <div className="flex flex-row items-center justify-start flex-nowrap gap-2">
                                <span className="font-bold text-gray-700">
                                  {advanced.title}
                                </span>
                                {advanced.tag && (
                                  <span className="bg-orange-500 font-semibold py-0.5 px-1 text-sm rounded-md text-[#ffefe9]">
                                    {advanced.tag}
                                  </span>
                                )}
                              </div>
                              <span className={"text-sm"}>
                                {advanced.description}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-1 px-8 bg-gray-50 rounded-md py-4">
                        <div className="flex items-center justify-center">
                          <img
                            src="https://www.agorapulse.com/assets/nav/product-promo-advocacy.png"
                            alt="New Boost"
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <div className="flex flex-col">
                            <span className="font-bold">
                              New: Boost engagement with Advocacy
                            </span>
                            <span className="text-sm">
                              Get more of your brand advocates to share your
                              message easily
                            </span>
                          </div>
                          <a
                            href="/"
                            className="text-indigo-500 underline flex flex-row group"
                          >
                            <span className="group-hover:text-indigo-600 font-bold">
                              Check It Out
                            </span>
                            <HiArrowNarrowRight
                              size={20}
                              className="mt-1 group-hover:text-indigo-600 group-hover:scale-105 duration-300 ease-in-out"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li className="space-y-3">
                <button
                  onClick={() => handleToggleSubMenu("solutions")}
                  className="font-semibold text-gray-700 flex flex-row items-center justify-between w-full cursor-pointer"
                >
                  <span>Solutions</span>

                  <RiArrowDownSLine
                    size={24}
                    className={`transition-transform duration-100 ${
                      subMenuActiveState === "solutions" && "rotate-180"
                    }`}
                  />
                </button>
                {subMenuActiveState === "solutions" && (
                  <div className="flex flex-col gap-3">
                    <div>
                      <span className="font-bold text-gray-700">
                        Network & integrations
                      </span>
                      <div className="grid grid-cols-12 px-3">
                        {solutionsNetworkIntegrationNavbarOptions.map(
                          (solution, index) => (
                            <a
                              key={index}
                              href="/"
                              className={`${
                                index > 4 && "hidden sm:inline-grid"
                              } col-span-12 sm:col-span-6 grid grid-cols-12 group gap-2 cursor-pointer hover:bg-orange-100 px-1 py-2`}
                            >
                              <div className="col-span-1 flex items-center justify-center">
                                <DynamicIcon
                                  iconName={solution.icon as string}
                                  size={20}
                                  className={`${solution.hoverColor}`}
                                />
                              </div>
                              <div className="col-span-11 flex flex-col">
                                <span className="font-bold text-gray-700">
                                  {solution.title}
                                </span>
                                <span className={"text-sm"}>
                                  {solution.description}
                                </span>
                              </div>
                            </a>
                          )
                        )}
                      </div>
                    </div>
                    <a className="-mx-5 gap-3 bg-indigo-100 cursor-pointer py-3 px-5 flex flex-row flex-nowrap items-center justify-start rounded-md">
                      <DynamicIcon
                        iconName={"BsFillPuzzleFill"}
                        size={20}
                        className={`text-indigo-400 rotate-45`}
                      />
                      <div className="flex flex-row flex-nowrap gap-2 group">
                        <span className="text-indigo-400 underline font-bold">
                          See all integrations
                        </span>
                        <HiArrowNarrowRight
                          size={20}
                          className="mt-1 text-indigo-400 group-hover:text-indigo-500 group-hover:scale-105 duration-300 ease-in-out"
                        />
                      </div>
                    </a>
                    <div className="bg-orange-100 px-8 -mx-5 py-4 rounded-md">
                      <span className="font-bold text-gray-700 -mx-3">
                        Industries
                      </span>
                      {solutionsIndustrieNavbarOptions.map(
                        (solution, index) => (
                          <a
                            key={index}
                            href="/"
                            className="col-span-12 sm:col-span-6 grid grid-cols-12 group gap-2 cursor-pointer hover:bg-gray-50 py-2 px-1"
                          >
                            <div className="col-span-1 flex items-center justify-center">
                              <DynamicIcon
                                iconName={solution.icon as string}
                                size={20}
                                className={`${solution.hoverColor}`}
                              />
                            </div>
                            <div className="col-span-11 flex flex-col">
                              <div className="flex flex-row items-center justify-start flex-nowrap gap-2">
                                <span className="font-bold text-gray-700">
                                  {solution.title}
                                </span>
                              </div>
                              <span className={"text-sm"}>
                                {solution.description}
                              </span>
                            </div>
                          </a>
                        )
                      )}
                    </div>
                  </div>
                )}
              </li>
              <li>
                <a href="/pricing" className="font-semibold text-gray-700">
                  Pricing
                </a>
              </li>
              <li className="space-y-3">
                <button
                  onClick={() => handleToggleSubMenu("resources")}
                  className="font-semibold text-gray-700 flex flex-row items-center justify-between w-full cursor-pointer"
                >
                  <span>Resources</span>

                  <RiArrowDownSLine
                    size={24}
                    className={`transition-transform duration-100 ${
                      subMenuActiveState === "resources" && "rotate-180"
                    }`}
                  />
                </button>
                {subMenuActiveState === "resources" && (
                  <div className="flex flex-col gap-3">
                    <div>
                      <span className="font-bold text-gray-700">
                        Strengthen Your Skills
                      </span>
                      <div className="grid grid-cols-12 px-3">
                        {resourceStrengthYourSkillNavbarOptions.map(
                          (resource, index) => (
                            <a
                              key={index}
                              href="/"
                              className={`${
                                index > 4 && "hidden sm:inline-grid"
                              } col-span-12 sm:col-span-6 grid grid-cols-12 group gap-2 cursor-pointer hover:bg-orange-100 px-1 py-2`}
                            >
                              <div className="col-span-12 flex flex-col">
                                <span className="font-bold text-gray-700">
                                  {resource.title}
                                </span>
                                <span className={"text-sm"}>
                                  {resource.description}
                                </span>
                              </div>
                            </a>
                          )
                        )}
                      </div>
                    </div>
                    <div className="bg-orange-100 px-8 -mx-5 py-4 rounded-md">
                      <span className="font-bold text-gray-700 -mx-3">
                        Learn & Connect
                      </span>
                      {resourceLearnConnectNavbarOptions.map(
                        (resource, index) => (
                          <a
                            key={index}
                            href="/"
                            className="col-span-12 sm:col-span-6 grid grid-cols-12 group gap-2 cursor-pointer hover:bg-gray-50 py-2 px-1"
                          >
                            <div className="col-span-12 flex flex-col">
                              <div className="flex flex-row items-center justify-start flex-nowrap gap-2">
                                <span className="font-bold text-gray-700">
                                  {resource.title}
                                </span>
                              </div>
                              <span className={"text-sm"}>
                                {resource.description}
                              </span>
                            </div>
                          </a>
                        )
                      )}
                    </div>
                  </div>
                )}
              </li>
            </ul>
            <ul className="flex flex-col gap-3 w-full">
              <li className="px-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <a
                    href="https://app.agorapulse.com/auth/login"
                    className="font-semibold text-gray-700 text-nowrap"
                  >
                    Log In
                  </a>

                  <div className="flex flex-col sm:flex-row gap-3 w-full items-end justify-end">
                    <div className="w-full sm:max-w-52">
                      <WhiteButton
                        text="Try for free"
                        icon={
                          <HiArrowNarrowRight
                            size={16}
                            className="mt-1 text-orange-600 group-hover:text-white group-hover:scale-125 duration-300 ease-in-out"
                          />
                        }
                        link="https://app.agorapulse.com/auth/signup?language=en&_gl=1*fdqixt*_gcl_au*MTE3Mjg2MDM5MC4xNzQ1Mzg0NDQ3*_ga*ODEzMDE2MDM2LjE3NDUzODQ0NDg.*_ga_SJNESWBV5Q*czE3NDg3ODMxNDkkbzM2JGcwJHQxNzQ4NzgzMTQ5JGo2MCRsMCRoMA.."
                      />
                    </div>
                    <div className="w-full sm:max-w-52">
                      <OrangeButton
                        text="Schedule demo"
                        icon={
                          <HiArrowNarrowRight
                            size={16}
                            className="mt-1 text-white group-hover:text-orange-600 group-hover:scale-125 duration-300 ease-in-out"
                          />
                        }
                        link="https://www.agorapulse.com/request-demo/"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}
        <div className="hidden lg:flex flex-row justify-between pl-5 items-center w-full">
          <div>
            <ul className="flex flex-row gap-5 text-base font-bold text-neutral-800">
              <li>
                <button
                  type="button"
                  onClick={() => handleToggleSubMenu("top-feature")}
                  className="flex flex-row items-center gap-1 cursor-pointer"
                >
                  <span>Top Feature</span>
                  <IoIosArrowDown size={20} className="mt-1" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleToggleSubMenu("solutions")}
                  className="flex flex-row items-center gap-1 cursor-pointer"
                >
                  <span>Solutions</span>
                  <IoIosArrowDown size={20} className="mt-1" />
                </button>
              </li>
              <li className="flex flex-row items-center gap-1 cursor-pointer">
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleToggleSubMenu("resources")}
                  className="flex flex-row items-center gap-1 cursor-pointer"
                >
                  <span>Resource</span>

                  <IoIosArrowDown size={20} className="mt-1" />
                </button>
              </li>
            </ul>
          </div>

          <div className="flex flex-row gap-5 items-center">
            <a
              role="button"
              type="button"
              href="https://app.agorapulse.com/auth/login"
              className="cursor-pointer"
            >
              Log In
            </a>

            <div className="flex flex-row gap-3">
              <div className="w-full min-w-36 text-nowrap cursor-pointer">
                <WhiteButton
                  text="Try for free"
                  icon={
                    <HiArrowNarrowRight
                      size={16}
                      className="mt-1 text-orange-600 group-hover:text-white group-hover:scale-125 duration-300 ease-in-out"
                    />
                  }
                  link="https://app.agorapulse.com/auth/signup?language=en&_gl=1*fdqixt*_gcl_au*MTE3Mjg2MDM5MC4xNzQ1Mzg0NDQ3*_ga*ODEzMDE2MDM2LjE3NDUzODQ0NDg.*_ga_SJNESWBV5Q*czE3NDg3ODMxNDkkbzM2JGcwJHQxNzQ4NzgzMTQ5JGo2MCRsMCRoMA.."
                />
              </div>

              <div className="w-full min-w-52 text-nowrap cursor-pointer">
                <OrangeButton
                  text="Schedule a demo"
                  icon={
                    <HiArrowNarrowRight
                      size={16}
                      className="mt-1 text-white group-hover:text-orange-600 group-hover:scale-125 duration-300 ease-in-out"
                    />
                  }
                  link="https://www.agorapulse.com/request-demo/"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Dropdown Menu */}
        {subMenuActiveState && (
          <div className="hidden lg:block w-full bg-white shadow absolute top-[125%] px-5">
            {subMenuActiveState === "top-feature" && (
              <div className="flex flex-row h-full">
                <div className="mt-10">
                  <span className="font-bold text-gray-700 text-lg">
                    Core features
                  </span>
                  <div className="grid grid-cols-12 px-3 pb-10">
                    {topFeatureNavbarOptions.map((feature, index) => (
                      <a
                        key={index}
                        href="/"
                        className="col-span-12 sm:col-span-6 grid grid-cols-12 group gap-2 cursor-pointer hover:bg-orange-100 px-1 py-2  items-center"
                      >
                        <div className="col-span-1 flex items-center justify-center">
                          <DynamicIcon
                            iconName={feature.icon as string}
                            size={20}
                            className={`${feature.hoverColor}`}
                          />
                        </div>
                        <div className="col-span-11 flex flex-col">
                          <span className="font-bold text-gray-700">
                            {feature.title}
                          </span>
                          <span className={"text-sm"}>
                            {feature.description}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-3">
                  <div className="bg-orange-100 px-5 py-4 rounded-md pt-10">
                    <span className="font-bold text-gray-700 text-lg">
                      Advanced features
                    </span>
                    <div className="px-3">
                      {advancedFeatureNavbarOptions.map((advanced, index) => (
                        <a
                          key={index}
                          href="/"
                          className="col-span-12 sm:col-span-6 grid grid-cols-12 group gap-2 cursor-pointer hover:bg-gray-50 py-2 px-1  items-center"
                        >
                          <div className="col-span-1 flex items-center justify-center">
                            <DynamicIcon
                              iconName={advanced.icon as string}
                              size={20}
                              className={`${advanced.hoverColor}`}
                            />
                          </div>
                          <div className="col-span-11 flex flex-col">
                            <div className="flex flex-row items-center justify-start flex-nowrap gap-2">
                              <span className="font-bold text-gray-700">
                                {advanced.title}
                              </span>
                              {advanced.tag && (
                                <span className="bg-orange-500 font-semibold py-0.5 px-1 text-sm rounded-md text-[#ffefe9]">
                                  {advanced.tag}
                                </span>
                              )}
                            </div>
                            <span className={"text-sm"}>
                              {advanced.description}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-1 px-8 bg-gray-50 rounded-md py-4">
                    <div className="flex items-center justify-center">
                      <img
                        src="https://www.agorapulse.com/assets/nav/product-promo-advocacy.png"
                        alt="New Boost"
                      />
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <div className="flex flex-col">
                        <span className="font-bold">
                          New: Boost engagement with Advocacy
                        </span>
                        <span className="text-sm">
                          Get more of your brand advocates to share your message
                          easily
                        </span>
                      </div>
                      <a
                        href="/"
                        className="text-indigo-500 underline flex flex-row group"
                      >
                        <span className="group-hover:text-indigo-600 font-bold">
                          Check It Out
                        </span>
                        <HiArrowNarrowRight
                          size={20}
                          className="mt-1 group-hover:text-indigo-600 group-hover:scale-105 duration-300 ease-in-out"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {subMenuActiveState === "solutions" && (
              <div className="grid grid-cols-3">
                <div className="col-span-2 mt-10">
                  <span className="font-bold text-gray-700 text-lg">
                    Network & integrations
                  </span>
                  <div className="grid grid-cols-12 px-3 pb-5">
                    {solutionsNetworkIntegrationNavbarOptions.map(
                      (solution, index) => (
                        <a
                          key={index}
                          href="/"
                          className={`${
                            index > 4 && "hidden sm:inline-grid"
                          } col-span-12 sm:col-span-4 grid grid-cols-12 group gap-2 cursor-pointer hover:bg-orange-100 px-1 py-2  items-center`}
                        >
                          <div className="col-span-1 flex items-center justify-center">
                            <DynamicIcon
                              iconName={solution.icon as string}
                              size={20}
                              className={`${solution.hoverColor}`}
                            />
                          </div>
                          <div className="col-span-11 flex flex-col">
                            <span className="font-bold text-gray-700">
                              {solution.title}
                            </span>
                            <span className={"text-sm"}>
                              {solution.description}
                            </span>
                          </div>
                        </a>
                      )
                    )}
                  </div>
                  <a className="col-span-3 -mx-5 gap-3 bg-indigo-100 cursor-pointer py-3 px-5 flex flex-row flex-nowrap items-center justify-start rounded-md">
                    <DynamicIcon
                      iconName={"BsFillPuzzleFill"}
                      size={20}
                      className={`text-indigo-400 rotate-45`}
                    />
                    <div className="flex flex-row flex-nowrap gap-2 group">
                      <span className="text-indigo-400 underline font-bold">
                        See all integrations
                      </span>
                      <HiArrowNarrowRight
                        size={20}
                        className="mt-1 text-indigo-400 group-hover:text-indigo-500 group-hover:scale-105 duration-300 ease-in-out"
                      />
                    </div>
                  </a>
                </div>
                <div className="col-span-1 bg-orange-100 px-5 py-4 rounded-md pt-10">
                  <span className="font-bold text-gray-700 text-lg">
                    Industries
                  </span>
                  <div className="px-3">
                    {solutionsIndustrieNavbarOptions.map((solution, index) => (
                      <a
                        key={index}
                        href="/"
                        className="col-span-12 sm:col-span-6 grid grid-cols-12 group gap-2 cursor-pointer hover:bg-gray-50 py-2 px-1 "
                      >
                        <div className="col-span-1 flex items-center justify-center">
                          <DynamicIcon
                            iconName={solution.icon as string}
                            size={20}
                            className={`${solution.hoverColor}`}
                          />
                        </div>
                        <div className="col-span-11 flex flex-col">
                          <div className="flex flex-row items-center justify-start flex-nowrap gap-2">
                            <span className="font-bold text-gray-700">
                              {solution.title}
                            </span>
                          </div>
                          <span className={"text-sm"}>
                            {solution.description}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {subMenuActiveState === "resources" && (
              <div className="flex flex-row flex-nowrap">
                <div className="mt-10">
                  <span className="font-bold text-gray-700 text-lg">
                    Strengthen Your Skills
                  </span>
                  <div className="grid grid-cols-12 px-3 pb-10">
                    {resourceStrengthYourSkillNavbarOptions.map(
                      (resource, index) => (
                        <a
                          key={index}
                          href="/"
                          className={`${
                            index > 4 && "hidden sm:inline-grid"
                          } col-span-12 sm:col-span-6 grid grid-cols-12 group gap-2 cursor-pointer hover:bg-orange-100 px-1 py-2`}
                        >
                          <div className="col-span-12 flex flex-col">
                            <span className="font-bold text-gray-700">
                              {resource.title}
                            </span>
                            <span className={"text-sm"}>
                              {resource.description}
                            </span>
                          </div>
                        </a>
                      )
                    )}
                  </div>
                </div>
                <div className="bg-orange-100 px-5 py-4 rounded-md pt-10">
                  <span className="font-bold text-gray-700 text-lg">
                    Learn & Connect
                  </span>
                  <div className="px-3">
                    {resourceLearnConnectNavbarOptions.map(
                      (resource, index) => (
                        <a
                          key={index}
                          href="/"
                          className="col-span-12 sm:col-span-6 grid grid-cols-12 group gap-2 cursor-pointer hover:bg-gray-50 py-2 px-1"
                        >
                          <div className="col-span-12 flex flex-col">
                            <div className="flex flex-row items-center justify-start flex-nowrap gap-2">
                              <span className="font-bold text-gray-700">
                                {resource.title}
                              </span>
                            </div>
                            <span className={"text-sm"}>
                              {resource.description}
                            </span>
                          </div>
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
}
