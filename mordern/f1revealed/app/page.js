import Image from "next/image";
import HeroScrollSequence from "../components/HeroScrollSequence";

export default function Home() {
  return (
    <>
      <div className="heroSection w-full">
        <HeroScrollSequence />
      </div>
    </>
  );
}
