import "@/styles/globals.css";
import { Inter } from "next/font/google";

import Header from "@/components/Header";

export const metadata = {
  title: "Spacema",
  description: "Observe nearest asteroids in space",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
