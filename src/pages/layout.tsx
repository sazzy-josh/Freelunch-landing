import {Poppins} from "next/font/google";
import localFont from "@next/font/local";

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const stapel = localFont({
  src: [
    {
      path: "../../public/fonts/Stapel-ExpandedBlack.ttf",
      weight: "900",
    },
    {
      path: "../../public/fonts/Stapel-SemiExpandedExtraBold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-stapel",
});

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className={`${poppins.variable}  ${stapel.variable}`}>
      {children}
    </main>
  );
};

export default RootLayout;
