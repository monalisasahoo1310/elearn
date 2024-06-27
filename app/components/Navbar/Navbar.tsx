import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "#/", current: true },
  { name: "Courses", href: "#courses", current: false },
  { name: "Mentor", href: "#mentor", current: false },
  { name: "Testimonial", href: "#testimonial", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CustomLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} passHref>
      <span onClick={onClick} className="px-3 py-4 text-lg font-normal">
        {children}
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState("/");

  const handleLinkClick = (href: string) => {
    setCurrentLink(href);
  };

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="relative flex h-12 md:h-20 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              {/* LOGO */}
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-12 w-40 lg:hidden"
                  src={"/assets/logo/logo.svg"}
                  alt="dsign-logo"
                />
                <img
                  className="hidden h-full w-full lg:block"
                  src={"/assets/logo/logo.svg"}
                  alt="dsign-logo"
                />
              </div>
              {/* LINKS */}
              <div className="hidden lg:block m-auto">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <CustomLink
                      key={item.name}
                      href={item.href}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      <span
                        className={classNames(
                          item.href === currentLink
                            ? "underline-links"
                            : "text-slategray",
                          "px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100"
                        )}
                        aria-current={item.href ? "page" : undefined}
                      >
                        {item.name}
                      </span>
                    </CustomLink>
                  ))}
                </div>
              </div>
            </div>

            {/* AUTH BUTTONS */}
            <SignedOut>
              <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:pr-0">
                <div className="hidden lg:block">
                  <SignInButton>
                    <button
                      type="button"
                      className="text-lg text-Blueviolet font-medium"
                    >
                      Log In
                    </button>
                  </SignInButton>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
                <div className="hidden lg:block">
                  <SignInButton>
                    <button className="text-Blueviolet text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet">
                      Sign Up
                    </button>
                  </SignInButton>
                </div>
              </div>
            </SignedOut>

            <SignedIn>
              <Link
                href="/dashboard"
                className="hidden lg:inline-flex text-Blueviolet text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet"
              >
                <span className="relative inline-flex h-10 items-center justify-center">
                  Dashboard
                </span>
              </Link>
              <div className="hidden lg:inline-flex ml-4">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: {
                        width: "2.5rem",
                        height: "2.5rem",
                      },
                      userButtonBox: {
                        padding: "1rem",
                        borderRadius: "9999px",
                        backgroundColor: "#6b46c1",
                        color: "#ffffff",
                        transition: "background-color 0.3s ease-in-out",
                        cursor: "pointer",
                        fontSize: "1rem",
                        fontWeight: "500",
                      },
                      userButtonBoxHover: {
                        backgroundColor: "#553c9a",
                      },
                    },
                  }}
                />
              </div>
            </SignedIn>

            {/* DRAWER FOR MOBILE VIEW */}
            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
