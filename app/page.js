import Image from "next/image";
import Hero from "./components/Hero";
import TailoredExpertise from "./components/TailoredExpertise";

export default function Home() {
  return (
    <>
      <Hero />
      <TailoredExpertise />
      {/* We’ll add your chosen sections below later */}
      <section className="section border-b">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Next section placeholder</h2>
          <p className="mt-2 text-gray-600">More sections here.</p>
        </div>
      </section>
    </>
  );
}
