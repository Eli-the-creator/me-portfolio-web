import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CaseCart, { CaseCartDevelopNow } from "./project-show-case";

// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const webProjects = [
  {
    id: 1,
    title: "Form builder D&D",
    subTitle: "Drag & Drop, static-page-builder",
    img: "/form-builder/4.png",
    description:
      "Stwórz web-page ankietę w przyjaznym UI, przeciągając bloki. I zbieraj statystyki z ankiety. ",
    feature: [
      "Drag & Drop builder",
      "Tworzenie statycznych sub-stron dla każdej dodanej formy",
      "Auth (Clerk)",
      "API logic, Algorythm liczenie statystyk ",
      "Dark/Light mode ",
    ],
    modalImg: [
      { src: "/form-builder/4.png" },
      { src: "/form-builder/5.png" },
      { src: "/form-builder/7.png" },
      { src: "/form-builder/8.png" },
      { src: "/form-builder/9.png" },
      { src: "/form-builder/6.png" },
    ],
    modalDescription:
      "Zduduj forme w przyjaznym UI, przeciagajac bloki. Nastepnie zapisz zmiany i opublikuj. Dostaniesz URL-swojej strony ktorę moesz wysyłać i zbierać danne dotyczące twojej ankiety ",

    gitHubURL: "https://github.com/Eli-the-creator/form-builder",
    caseURL:
      "https://form-builder-blush.vercel.app/sign-in?redirect_url=https%3A%2F%2Fform-builder-blush.vercel.app%2F",
  },
  {
    id: 2,
    title: "LMS Platform",
    subTitle:
      "Stwórz kurs i sprzedawaj swoją wiedzę. JEST NIE AKTYWNY PONIEWAŻ SKOŃCZYŁO SIĘ MIEJSCE NA DATABASE",
    img: "/lms/1.png",
    description: "Full-stack platforma e-learningowa",
    feature: [
      "MUX Video",
      "Prisam",
      "API Route protection",
      "MySQL (PlanetScale)",
      "Statystyki sprzedaży",
      "Wygodny upload coursu",
      "Stripe WebHook",
      "Performance optimization",
    ],
    modalImg: [
      { src: "/lms/1.png" },
      { src: "/lms/2.png" },
      { src: "/lms/3.png" },
      { src: "/lms/5.png" },
      { src: "/lms/4.jpeg" },
    ],
    modalDescription:
      "Zduduj forme w przyjaznym UI, przeciagajac bloki. Nastepnie zapisz zmiany i opublikuj. Dostaniesz URL-swojej strony ktorę moesz wysyłać i zbierać danne dotyczące twojej ankiety ",

    gitHubURL: "https://github.com/Eli-the-creator/lms-fullstack",
    caseURL: "https://lms-no-hustle.vercel.app/search",
  },
  {
    id: 3,
    title: "Sanity/Stripe E-commerce",
    subTitle: "Właczone płatności testowe",
    img: "/sanity/1.png",
    description:
      "Prosty e-commerce store gdzie praktykowałem integracje z Stripe-płatnościami",
    feature: ["Stripe", "Sanity", "useShoppingCart", "GROQ"],
    modalImg: [
      { src: "/sanity/1.png" },
      { src: "/sanity/2.png" },
      { src: "/sanity/3.png" },
      { src: "/sanity/4.png" },
      { src: "/sanity/5.png" },
    ],
    modalDescription: "",
    gitHubURL: "https://github.com/Eli-the-creator/NextJS-E-Commerce/tree/main",
    caseURL: "https://ez-store-eight.vercel.app/",
  },
];

const mobileProject = [
  {
    id: 1,
    title: "Podify - podcast app",
    subTitle: "Jak shopify, tylko lepiej",
    img: "/podify/1.png",
    description:
      "Full-stack aplikacja, do słuchnia i uplodowania swoich podkastów",
    feature: [
      "MongoDB ",
      "Express API",
      "React Native (bare-flow)",
      "OTP Auth (Express API) - Email verification",
      "Mailtrap - for email",
      "React Track Player",
      "Plalist, Favorit-Audio, History... and many more ",
    ],
    modalImg: [{ src: "/podify/1.png" }],
    modalDescription:
      "Zduduj forme w przyjaznym UI, przeciagajac bloki. Nastepnie zapisz zmiany i opublikuj. Dostaniesz URL-swojej strony ktorę moesz wysyłać i zbierać danne dotyczące twojej ankiety ",

    gitHubURL: "https://github.com/Eli-the-creator/podify-podcast-app-",
  },
  {
    id: 2,
    title: "WhatsApp - Clone (FireBase)",
    subTitle: "Praktuka integracji z Google Firebase, EXPO",
    img: "/whathapp/2.png",
    description: "Full-stack aplikacja, Clone WhatsApp",
    feature: [
      "Firebase ",
      "EXPO",
      "Camera API",
      "Auth (Firebase)",
      "Push notification",
      "Real time chat",
      "Groupe Chat, Profile customization, Message replies ",
    ],
    modalImg: [
      { src: "/whathapp/1.png" },
      { src: "/whathapp/2.png" },
      { src: "/whathapp/3.png" },
    ],
    modalDescription:
      "Zduduj forme w przyjaznym UI, przeciagajac bloki. Nastepnie zapisz zmiany i opublikuj. Dostaniesz URL-swojej strony ktorę moesz wysyłać i zbierać danne dotyczące twojej ankiety ",

    gitHubURL: "https://github.com/Eli-the-creator/WhatsApp-Clone-RN-FireBase",
  },
];

const developNow = [
  {
    id: 1,
    title: "Sanity/Shopify Storefront",
    subTitle: "Practyka z integracji CMS-systemów",
    img: "/public/podify/1.png",
    description: "E-commerce",
    feature: ["Sanity ", "Shopify", "Stripe"],
    modalImg: [
      { src: "/whathapp/1.png" },
      { src: "/whathapp/2.png" },
      { src: "/whathapp/3.png" },
    ],
    modalDescription: "Modern e-commerce strore",

    gitHubURL:
      "https://github.com/Eli-the-creator/form-builder?tab=readme-ov-file",
    caseURL:
      "https://form-builder-blush.vercel.app/sign-in?redirect_url=https%3A%2F%2Fform-builder-blush.vercel.app%2F",
  },
  {
    id: 1,
    title: "HYGRAPH LMS",
    subTitle: "Practyka z integracji CMS-systemów",
    img: "/public/podify/1.png",
    description: "E-commerce",
    feature: ["Sanity ", "Shopify", "Stripe"],
    modalImg: [
      { src: "/whathapp/1.png" },
      { src: "/whathapp/2.png" },
      { src: "/whathapp/3.png" },
    ],
    modalDescription: "Modern e-commerce strore, ready to scale",

    gitHubURL:
      "https://github.com/Eli-the-creator/form-builder?tab=readme-ov-file",
    caseURL:
      "https://form-builder-blush.vercel.app/sign-in?redirect_url=https%3A%2F%2Fform-builder-blush.vercel.app%2F",
  },
  {
    id: 1,
    title: "Event Platform",
    subTitle: "Krok Bliżej",
    img: "/public/whathapp/1.png",
    description: "E-commerce",
    feature: ["Sanity ", "Shopify", "Stripe"],
    modalImg: [
      { src: "/whathapp/1.png" },
      { src: "/whathapp/2.png" },
      { src: "/whathapp/3.png" },
    ],
    modalDescription: "Modern e-commerce strore, ready to scale",

    gitHubURL:
      "https://github.com/Eli-the-creator/form-builder?tab=readme-ov-file",
    caseURL:
      "https://form-builder-blush.vercel.app/sign-in?redirect_url=https%3A%2F%2Fform-builder-blush.vercel.app%2F",
  },
];

export default function ShowTime() {
  return (
    <div>
      {/* Project Section */}
      <div className="flex flex-col col-span-2 p-4 xl:col-span-4 md:col-span-2 sm:col-span-2 justify-center items-center text-stone-100">
        {/* <h2 className="text-4xl font-extrabold italic mb-2 mt-4">Projects</h2> */}
        <h3 className="text-xl font-light mb-4 sm:text-center">
          <span className="font-semibold">Wszystkie projecty są na GiHub</span>{" "}
          albo dostępne online.
        </h3>
        <span className="font-light text-slate-50/40 text-sm">
          Więcej moich projektów można znaleść na GitHub
        </span>{" "}
        <Tabs defaultValue="Web" className="w-full h-full">
          <TabsList className="w-full bg-transparent text-slate-100">
            <TabsTrigger className="bg-slate-100/40 rounded-l-full" value="Web">
              Web
            </TabsTrigger>

            <TabsTrigger className="bg-slate-100/40 rounded-none" value="Dev">
              Developing...
            </TabsTrigger>

            <TabsTrigger
              className="bg-slate-100/40 rounded-r-full"
              value="Cross-Platform"
            >
              Cross-Platform
            </TabsTrigger>
          </TabsList>

          {/* WEB */}
          <TabsContent className="pt-4 mb-6" value="Web">
            <CaseCart showCases={webProjects} />
          </TabsContent>

          <TabsContent className="pt-4 mb-6" value="Dev">
            <CaseCartDevelopNow showCases={developNow} />
          </TabsContent>

          {/* Cross-Platform */}
          <TabsContent value="Cross-Platform" className="pt-4 mb-6">
            <div className="mb-8 text-center font-semibold bg-slate-100/40 border-2 border-red-600/40 rounded-full py-2">
              <h3 className="text-red-700/90 sm:text-sm mb-2">
                🚨 Przez nowe regulaminy App Storów są niedostępne 🚨
              </h3>
              <p className="font-light">
                Ale zawsze mona zobaczyć kod na moin GitHub
              </p>
            </div>
            <div className="w-full h-full gap-8 flex flex-row flex-wrap items-center justify-center">
              <CaseCart showCases={mobileProject} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
