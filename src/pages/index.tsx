import MainLayout from "@/components/MainLayout/index";
import HeroSection from "@/components/HeroSection/index";
import About from "@/components/AboutSection/index";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <About />
    </MainLayout>
  );
}
