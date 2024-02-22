import Image from "next/image";
import NameSection from "./_components/home";
import { LayoutGridDemo } from "./_components/show-time";

export default function Home() {
  return (
    <main>
      <main className="relative w-screen h-screen">
        <div className="fixed w-full h-full z-10">
          <Image fill className="w-full h-full" src="/asset_bg.png" alt="bg" />
        </div>

        <div className="relative px-4 md:px-24 z-50">
          <NameSection />
          <div className="h-[40vh]">
            <LayoutGridDemo />
          </div>
        </div>
      </main>
    </main>
  );
}
