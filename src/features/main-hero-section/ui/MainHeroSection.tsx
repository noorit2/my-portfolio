import GlassIcons from "./GlassCard";
import MainHeroSectionText from "./MainHeroSectionText";
import Image from "next/image";



function MainHeroSection() {
  
  const items = [
  { icon: <Image src="/qr_code/My_PDF.png" fill alt="qr code for my resume"/>, color: 'blue', label: 'My Resume' },
];
  return (
    <>

    <main className="custom-container z-3 min-h-[calc(100vh-80px)] grid items-center grid-cols-1 grid-rows-[70%_30%] md:grid-rows-1 md:grid-cols-2">
      <MainHeroSectionText />

        <GlassIcons items={items}/>
    </main>
    </>
  );
}

export default MainHeroSection;
