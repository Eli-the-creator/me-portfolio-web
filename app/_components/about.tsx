import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function About() {
  return (
    <div className="flex col-span-2 md:col-span-1 flex-col items-start h-full text-stone-100 ">
      <div className="flex flex-row sm:flex-col justify-between items-center w-full">
        <div className="w-full h-full flex justify-between items-center">
          <div className="text-left mb-4">
            <h2 className="text-4xl font-extrabold italic mb-4">
              Eliasz Zakrzewki
            </h2>
            <h4 className="text-xl font-light text-stine-100">
              Iliya Zakrevskyi
            </h4>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="md:block hidden"
          >
            <CarouselContent className="">
              <CarouselItem>
                <Image
                  width={280}
                  height={450}
                  src={"/me/3.jpeg"}
                  className="rounded-xl"
                  alt={"Last one"}
                />
              </CarouselItem>
              <CarouselItem className="">
                <Image
                  width={280}
                  height={450}
                  src={"/me/1.jpeg"}
                  className="rounded-xl"
                  alt={"Me doint this portfolio-web about me self"}
                />
              </CarouselItem>
              <CarouselItem className="">
                <Image
                  width={280}
                  height={450}
                  src={"/me/2.jpeg"}
                  className="rounded-xl"
                  alt={"Also me"}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-4 text-stone-400" />
            <CarouselNext className="-right-4 text-stone-400" />
          </Carousel>
          {/* <Image
            className="rounded-xl"
            src="/me.jpg"
            alt="me"
            height={220}
            width={220}
        /> */}
        </div>
      </div>
      <div className="">
        <div className="flex flex-col mb-6 justify-between text-xl px-6">
          <span>
            <h3 className="font-bold pb-2">Doświadczenie:</h3>
            <p className="">
              Hej, nazywam się Eliasz od 1.5 roku uczę się zawodu Front-End
              Developera głownie w ecosystemie React. <br /> Mam doświadczenie w
              budowaniu REAL-WORLD project, w teamie z moim „Mentorem” budujemy
              aktualnie :
              <br />
              <span className="underline decoration-orange-600">
                LMS(Learning Management System ), Event-Platform.
              </span>
              <br />
              <br />
              <p className="">
                Event-Platform dla:{" "}
                <a
                  target="_blank"
                  className="text-sky-500"
                  href="https://www.instagram.com/krokblizej/?igsh=MXNwMzh0MzY5YnhyMw%3D%3D"
                >
                  @krokbliżej
                </a>
              </p>
              <p className="pb-6  ">
                LMS dla:{" "}
                <span className="cursor-pointer text-slate-500">
                  Ustalamy szczegółu i omawiamy terminy z klientką
                </span>
              </p>
            </p>
          </span>
          <span>
            <h3 className="font-bold pb-2">
              Doświadczenie przedsiębiorcze:{" "}
              <p className="italic text-[16px] font-light">
                Działalność zamrozona od 2022 roku
              </p>
            </h3>
            <p>
              W wieku 19 lat założyłem swój pierwszy startup „Neon-Crew”, Z
              powodzeniem opracowaliśmy e-sklep, przeprowadziliśmy udane
              kampanie marketingowe i
              <br />
              <span className="underline decoration-orange-600">
                przeszlismy pierwszą rundę inwestycji do podpisannia umowy z
                <br />
                Home & You.
              </span>
              <br />
              <br />
              <span>
                <h3 className="">NEON CREW :</h3>
                <p className="">
                  Instagram:{" "}
                  <a
                    target="_blank"
                    className="text-sky-500"
                    href="https://www.instagram.com/neoncrewneons/"
                  >
                    @neoncrewneons
                  </a>
                </p>
                <p className="">
                  Web-site:{" "}
                  <a
                    target="_blank"
                    className="text-sky-500"
                    href="https://web.archive.org/web/20210501172503/https:/neoncrewneons.com/"
                  >
                    Neon Crew
                  </a>
                </p>
                <p className="">
                  YouTube:{" "}
                  <a
                    target="_blank"
                    className="text-sky-500"
                    href="https://www.youtube.com/watch?v=fVB1YOggfRE&ab_channel=%D0%98%D0%BB%D1%8C%D1%8F%D0%97%D0%B0%D0%BA%D1%80%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9"
                  >
                    ADS content
                  </a>
                </p>
              </span>
            </p>
          </span>

          <span className="pt-6 pb-6">
            <h3 className="font-bold">Co było potem:</h3>
            <p className="italic text-[16px] font-light pb-2">2022 - dziś</p>
            <p>Wyjechałem do Irelandii, tu się uczę i poznaję nową kulturę.</p>
            <span className="text-[14px] italic">
              Zamierzam wracać do Polski.
            </span>
          </span>

          <span className="pt-6 pb-6">
            <h3 className="font-bold pb-2">
              Cel:
              <p className="text-medium">
                Mam cel zostać programistą i cięgle się rozwijam, byłbym bardzo
                szcęśliwy dołączyć do teamu{" "}
                <span className="underline decoration-orange-500">BEJAMAS</span>{" "}
                i razem tworzyć produkty Softwarowe
              </p>
            </h3>
          </span>

          <Button className="bg-orange-600 hover:bg-orange-700">
            Lets talk : )
          </Button>
        </div>
      </div>
    </div>
  );
}
