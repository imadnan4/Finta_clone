import Container from "./Components/Container";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Image from "next/image";
import heroimg from "../public/hero_image.webp";
export default function Home() {
  const pageClassName =
    "flex flex-col items-center h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]";

  return (
    <div className={pageClassName}>
      <div className="pointer-events-none absolute inset-0 mx-auto h-full w-full max-w-6xl" aria-hidden="true">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent z-0 pointer-events-none"/>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent z-0 pointer-events-none"/>
      </div>
      <Container>
        <Navbar />
        <Hero/>
      </Container>
      <div className="relative w-full">
      <div className="h-px pointer-events-none w-full absolute inset-x-0 bg-linear-to-r from-neutral-300/50 via-neutral-200 to-neutral-300/50 z-0"/>
        <div className="max-w-285 mx-auto p-4">
        <Image src={heroimg}
        alt="Hero Image" 
        width={1000} 
        height={1000}
        className="rounded-2xl w-full object-cover object-top-left border border-neutral-200 shadow-md mask-b-from-20% to-40%"
        />
        </div>
      </div>
    </div>
  );
}
