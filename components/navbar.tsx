"use client";
import React, { useState } from "react";

import { cn } from "../lib/cn";
import Link from "next/link";

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex w-[60%] fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.3] bg-slate-50/90 rounded-full z-[5000] pr-2 pl-8 py-2  items-center justify-between  space-x-4",
        className
      )}
    >
      <span className="text-xl font-extrabold text-stone-800/80">\\ EZ</span>

      <Link
        href={"/Iliya_Zakrevskyi_cv.pdf"}
        target="_blank"
        locale={false}
        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#2d3846,55%,#000103)] bg-[length:200%_100%] px-5 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        CV
      </Link>
    </div>
  );
};

{
  /* <span className="flex gap-6">
{navItems.map((navItem: any, idx: number) => (
  <Link
    key={`link=${idx}`}
    href={navItem.link}
    className={cn(
      "relative dark:text-neutral-50 items-center flex space-x-1 text-slate-200 dark:hover:text-neutral-300 hover:text-neutral-500"
    )}
  >
    <span className="hidden font-semibold sm:block text-xl">
      {navItem.name}
    </span>
  </Link>
))}
</span> */
}
