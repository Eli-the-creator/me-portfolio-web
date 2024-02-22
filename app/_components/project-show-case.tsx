import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// className="w-full sm:w-[250px] h-[240px] rounded-xl "

// @ts-ignore
export default function CaseCart({ showCases }) {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {/* @ts-ignore */}
      {showCases.map((el) => (
        <Card
          key={el.id}
          className="w-full max-h-fit sm:w-[360px]  rounded-xl "
        >
          <CardHeader>
            <CardTitle>{el.title}</CardTitle>
            <CardDescription>{el.subTitle}</CardDescription>
            <div className="w-full pt-2">
              <Image
                width={420}
                height={280}
                src={el.img}
                alt={"Photo " + el.title}
              />
            </div>
          </CardHeader>
          <CardContent>
            <p>{el.description}</p>
          </CardContent>

          <CardFooter>
            <Dialog>
              <DialogTrigger className="w-full">
                <Button className="w-full bg-orange-500 text-zinc-100 py-2 px-6">
                  Zobacz wiecej
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="mb-4">
                    <span className="text-4xl italic text-stone-900">
                      {el.title}
                    </span>
                  </DialogTitle>
                  <DialogDescription>
                    <div className="h-[350px]">
                      <h2 className="mb-4">{el.subTitle}</h2>
                      <Carousel
                        opts={{
                          align: "start",
                          loop: true,
                        }}
                      >
                        <CarouselContent>
                          {/* @ts-ignore */}
                          {el.modalImg.map((img, idx) => (
                            <CarouselItem
                              key={idx}
                              className="h-[320px] w-full"
                            >
                              <Image
                                width={420}
                                height={350}
                                src={img.src}
                                alt={el.title}
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious
                          className="left-4 top-1/2"
                          variant={"outline"}
                        />
                        <CarouselNext className="right-4" variant={"outline"} />
                      </Carousel>
                    </div>
                    <div className="">
                      <h2 className="text-stone-900 font-bold text-xl mb-2">
                        Feature list:
                      </h2>
                      <ul className="overflow-scroll">
                        {/* @ts-ignore */}
                        {el.feature.map((featureEl) => (
                          <>
                            <li className="text-stone-900 text-[16px] mb-1">
                              - {featureEl}
                            </li>
                          </>
                        ))}
                      </ul>
                    </div>
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="gap-2">
                  {el.caseURL === undefined ? null : (
                    <Link
                      target="_black"
                      className="bg-orange-600 text-zinc-100 py-2 px-6 text-center rounded-md "
                      href={el.caseURL}
                    >
                      See online
                    </Link>
                  )}
                  <Link
                    target="_black"
                    className="bg-orange-600 text-zinc-100 py-2 px-6 text-center rounded-md"
                    href={el.gitHubURL}
                  >
                    GitHub
                  </Link>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

import React from "react";

// @ts-ignore
export function CaseCartDevelopNow({ showCases }) {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {/* @ts-ignore */}
      {showCases.map((el) => (
        <Card key={el.id} className="w-full sm:w-[360px] h-[465px] rounded-xl ">
          <CardHeader>
            <CardTitle>{el.title}</CardTitle>
            <CardDescription>{el.subTitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-300 w-auto h-[320px] rounded-md flex justify-center items-center">
              <a
                target="_blank"
                href="https://github.com/Eli-the-creator"
                className="text-sky-600 underline"
              >
                Source code on GitHub
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
