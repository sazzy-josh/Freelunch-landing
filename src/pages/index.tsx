import MainLayout from "@/components/MainLayout/index";

export default function Home() {
  return (
    <MainLayout>
      <div className='h-screen flex items-center justify-center'>
        <p className='text-[#04764E] text-5xl font-black font-stapel track-[80px]'>
          Your Free Lunch Awaits in Our App
        </p>
      </div>
    </MainLayout>
  );
}
