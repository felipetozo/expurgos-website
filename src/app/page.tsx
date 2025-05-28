import Image from "next/image";
import Navigator from "@/app/views/components/Navigator";
import Hero from "@/app/views/components/Hero";
import Fosfina from "@/app/views/components/Fosfina";
import InsetoZero from "@/app/views/components/InsetoZero";
import Footer from "@/app/views/components/Footer";

function Home() {
  return (
    <>
      <Navigator />
      <Hero />
      <Fosfina />
      <InsetoZero />
      <Footer />
    </>
  );
};

export default Home;
