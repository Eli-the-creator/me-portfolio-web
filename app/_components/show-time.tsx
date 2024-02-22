"use client";
import { LayoutGrid } from "@/components/layout-grid";
import React, { useState, useRef, useEffect } from "react";
import About from "./about";
import ShowTime from "./projects-tab";
import TechStack from "@/components/tech-stack";

export function LayoutGridDemo() {
  return (
    <div className="h-full w-full">
      <p className="text-center">Click to see more</p>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return <TechStack />;
};

const SkeletonTwo = () => {
  return <About />;
};

const SkeletonFour = () => {
  return <ShowTime />;
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-3 rounded-xl",
    prevueText: "MY TECH STACK",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    prevueText: "ABOUT ME",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    prevueText: "PROJECT's",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
