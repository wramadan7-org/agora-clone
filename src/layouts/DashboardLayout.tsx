import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiArrowNarrowRight } from "react-icons/hi";
import { RiArrowDownSLine, RiCloseLargeLine } from "react-icons/ri";
import WhiteButton from "../components/buttons/WhiteButton";
import OrangeButton from "../components/buttons/OrangeButton";
import { IoIosArrowDown } from "react-icons/io";

export default function RootLayout() {
  const [isScrolledState, setIsScrolledState] = useState<boolean>(false);
  const [isOpenMenuState, setIsOpenMenuState] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsOpenMenuState(!isOpenMenuState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledState(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-dvh">
      <div
        className={`fixed w-full top-0 left-0 py-3 z-50 ${
          isScrolledState ? "bg-white" : "bg-transparent"
        }`}
      >
        <nav
          id="navbar"
          className="flex flex-row justify-between lg:justify-start items-center px-5 max-w-[1400px] mx-auto"
        >
          <div id="brand-nav" className="flex flex-row flex-nowrap gap-0">
            <span className="text-lg text-orange-600 font-bold">agora</span>
            <span className="text-lg text-neutral-900 font-bold">pulse</span>
          </div>

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
            <div className="absolute top-[52px] border-t border-gray-200 shadow-2xl left-0 flex flex-col w-full bg-white px-5 pt-7 pb-10 gap-3 rounded-b-md lg:hidden">
              <ul className="flex flex-col gap-3 px-3 w-full">
                <li>
                  <a
                    href="#"
                    className="font-semibold text-gray-700 flex flex-row items-center justify-between"
                  >
                    <span>Top Features</span>

                    <RiArrowDownSLine size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-semibold text-gray-700 flex flex-row items-center justify-between"
                  >
                    <span>Solutions</span>

                    <RiArrowDownSLine size={24} />
                  </a>
                </li>
                <li>
                  <a href="#" className="font-semibold text-gray-700">
                    <span>Pricing</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-semibold text-gray-700 flex flex-row items-center justify-between"
                  >
                    <span>Resources</span>

                    <RiArrowDownSLine size={24} />
                  </a>
                </li>
              </ul>

              <ul className="flex flex-col gap-3 w-full">
                <li className="px-3">
                  <a href="#" className="font-semibold text-gray-700">
                    Log In
                  </a>
                </li>
                <li>
                  <WhiteButton
                    text="Try for free"
                    icon={
                      <HiArrowNarrowRight
                        size={16}
                        className="mt-1 text-orange-600 group-hover:text-white group-hover:scale-125 duration-300 ease-in-out"
                      />
                    }
                    link="#"
                  />
                </li>
                <li>
                  <OrangeButton
                    text="Schedule demo"
                    icon={
                      <HiArrowNarrowRight
                        size={16}
                        className="mt-1 text-white group-hover:text-orange-600 group-hover:scale-125 duration-300 ease-in-out"
                      />
                    }
                    link="#"
                  />
                </li>
              </ul>
            </div>
          )}

          <div className="hidden lg:flex flex-row justify-between pl-5 items-center w-full">
            <div>
              <ul className="flex flex-row gap-5 text-base font-bold text-neutral-800">
                <li className="flex flex-row items-center gap-1 cursor-pointer">
                  <span>Top Feature</span>

                  <IoIosArrowDown size={20} className="mt-1" />
                </li>
                <li className="flex flex-row items-center gap-1 cursor-pointer">
                  <span>Solutions</span>

                  <IoIosArrowDown size={20} className="mt-1" />
                </li>
                <li className="flex flex-row items-center gap-1 cursor-pointer">
                  <span>Pricing</span>
                </li>
                <li className="flex flex-row items-center gap-1 cursor-pointer">
                  <span>Resource</span>

                  <IoIosArrowDown size={20} className="mt-1" />
                </li>
              </ul>
            </div>

            <div className="flex flex-row gap-5 items-center">
              <button type="button" className="cursor-pointer">
                Log In
              </button>

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
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <Outlet />

      <div className="flex flex-col gap-5 px-5 py-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row gap-5">
          <div id="brand-footer" className="flex flex-row flex-nowrap gap-0">
            <span className="text-lg text-orange-600 font-bold">agora</span>
            <span className="text-lg text-neutral-900 font-bold">pulse</span>
          </div>

          <div className="flex flex-col flex-[1_1_0%] md:flex-row gap-5 items-start justify-start sm:items-center sm:justify-center sm:text-center md:items-start md:text-start">
            <div className="space-y-5 flex flex-col flex-[1_1_0%] w-full">
              <h2 className="font-bold text-neutral-700 text-xl">Compare</h2>

              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Sprout Social vs Agorapulse
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Hootsuite vs Agorapulse
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Meltwater vs Agorapulse
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Brandwatch vs Agorapulse
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Sprinklr vs Agorapulse
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Why Marketers Prefer Agorapulse
                </a>
              </div>
            </div>

            <div className="space-y-5 flex flex-col flex-[1_1_0%] w-full">
              <h2 className="font-bold text-neutral-700 text-xl">Product</h2>

              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Social Media Inbox
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Social Media Publishing
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Social Media Monitoring
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Social Media Reporting
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Social Media ROI
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  For Agencies
                </a>
              </div>
            </div>

            <div className="space-y-5 flex flex-col flex-[1_1_0%] w-full">
              <h2 className="font-bold text-neutral-700 text-xl">Company</h2>

              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Contact Us
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Our Customers
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Careers
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Press
                </a>
              </div>
            </div>

            <div className="space-y-5 flex flex-col flex-[1_1_0%] w-full">
              <h2 className="font-bold text-neutral-700 text-xl">Support</h2>

              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Quick Start Guide
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Customer Support
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Platform Status
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Talk to Sales
                </a>
              </div>
            </div>

            <div className="space-y-5 flex flex-col flex-[1_1_0%] w-full">
              <h2 className="font-bold text-neutral-700 text-xl">Resources</h2>

              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Free Tools
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Agorapulse Blog
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Social Media Lab
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Release Notes
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Video Tutorials
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Social Pulse Community
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Trust Center
                </a>

                <a
                  href="#"
                  className="text-neutral-500 font-semibold text-sm hover:underline hover:text-neutral-400"
                >
                  Resources
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
