
import type { Metadata } from "next";

import "./globals.css";
import Providers from "../context/Providers";






export const metadata: Metadata = {
  title: "FitLog",
  description: "FitLog fitness app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      
    >
      <body>
         <Providers>
        {/* <Navbar/> */}
        {children}
         {/* <ToastContainer /> */}
         </Providers>
        </body>
    </html>
  );
}
