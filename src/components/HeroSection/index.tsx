import React from "react";
import {imageInBase64, spiralImage} from "../../../db/constants";
import appStore from "../../../public/svgs/app_store.svg";
import googleStore from "../../../public/svgs/google_store.svg";
import Img1 from "../../../public/images/heroImg1.png";
import Img2 from "../../../public/images/heroImg2.png";
import Img3 from "../../../public/images/heroImg3.png";
import Card from "../../../public/images/card.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className='relative flex h-screen w-full flex-col items-center overflow-hidden mb-8 md:h-[1016px]'>
      <div
        className='absolute top-0 left-0 w-full h-full'
        style={{
          backgroundImage: `url(${imageInBase64})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.4,
        }}
      />
      <div className='relative text-[#04764E] text-3xl md:text-6xl font-black font-stapel track-[80px] mt-12 text-center z-10'>
        <div className='max-w-[900px] px-10 md:leading-[60px]'>
          Your Free Lunch <span className='text-secondary'>Awaits</span> in Our
          App
        </div>
      </div>
      <p className='mt-6 text-darkNeutral font-medium z-10 text-center'>
        Lunch, On the House: Unleash Flavorful Freedom with Our Free App.
      </p>

      <div className='flex mt-10 z-10'>
        <Image src={appStore} alt='app_store' className='mr-4 w-28 md:w-44' />
        <Image src={googleStore} alt='app_store' className=' w-28 md:w-44' />
      </div>

      <div className='flex w-full -mt-20  max-w-6xl z-[200]'>
        <Image src={Card} alt='card' />
      </div>

      <div>
        <Image
          src={spiralImage}
          alt='spiral_image'
          width={200}
          height={200}
          className='spiral-image'
        />
        <Image src={Img1} alt='hero-img-1' className='hero-img-1' />
        <Image src={Img2} alt='hero-img-2' className='hero-img-2' />
        <Image src={Img3} alt='hero-img-3' className='hero-img-3' />
      </div>
    </div>
  );
};

export default HeroSection;
