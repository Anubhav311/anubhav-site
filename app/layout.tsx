import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anubhav Bhambri",
  description: "Full-Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="any"
        />
        {/* <link rel="icon" href="/favicon.png" sizes="any" /> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
