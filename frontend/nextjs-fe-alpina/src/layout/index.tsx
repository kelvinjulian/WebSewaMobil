"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";
import { BookingIcon, BrowseIcon, PromoIcon, HelpIcon } from "@/components/svg";
// import { JSX } from "react";

type Props = {
  children: React.ReactNode;
  navigationBottom?: boolean;
};

type NavItem = {
  href: string;
  label: string;
  Icon: (props: { isActive: boolean }) => JSX.Element;
};

const navItems: NavItem[] = [
  { href: "/", label: "Browse", Icon: BrowseIcon },
  { href: "/check-booking", label: "Booking", Icon: BookingIcon },
  { href: "/promo", label: "Promo", Icon: PromoIcon },
  { href: "/help", label: "Help", Icon: HelpIcon },
];

export const MainLayout = ({ children, navigationBottom = true }: Props) => {
  const pathname = usePathname();

  return (
    <div className="relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto bg-white">
      {children}
      {navigationBottom && (
        <nav id="Bottom-Nav" className="relative flex h-[93px] mt-10 z-20">
          <div className="fixed bottom-0 w-full flex items-center justify-evenly max-w-[640px] py-5 bg-alpina-black">
            {navItems.map(({ href, label, Icon }) => {
              const isActive = pathname === href;
              return (
                <Link key={href} href={href} aria-label={label}>
                  <div className="group flex flex-col gap-2 items-center justify-center">
                    <Icon isActive={isActive} />
                    <span
                      className={classNames(
                        "font-semibold text-sm leading-[21px] group-hover:text-alpina-orange transition-all duration-300",
                        {
                          "text-alpina-orange": isActive,
                          "text-white": !isActive,
                        }
                      )}
                    >
                      {label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
};
