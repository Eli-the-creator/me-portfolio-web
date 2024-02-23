import Image from "next/image";
import NameSection from "./_components/home";
import { LayoutGridDemo } from "./_components/show-time";

export default function Home() {
  return (
    <main>
      <main className="relative w-screen h-screen">
        <div className="fixed w-full h-[calc(100dvh)] z-10">
          <Image
            priority={true}
            fill
            className="w-full h-full"
            src="/asset_bg.png"
            alt="bg"
          />
        </div>

        <div className="relative  md:px-24 z-50">
          <NameSection />
          <p className="text-center text-slate-50">Click to see more</p>
          <div className="h-[40vh]">
            <LayoutGridDemo />
          </div>
        </div>
      </main>
    </main>
  );
}
