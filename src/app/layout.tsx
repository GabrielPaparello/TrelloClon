import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import ReduxProvider from "./lib/ReduxProvider";
import { Roboto, Raleway, Fira_Sans_Extra_Condensed } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });
const fira = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body
          className={`${roboto.className} ${fira.className} ${raleway.className} bg-[#191552]`}
        >
          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </UserProvider>
    </html>
  );
}
