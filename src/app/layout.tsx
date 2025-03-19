import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Dataseed Africa | Transforming agriculture across Africa",
  description: "Transforming agriculture through data and financial inclusion across Africa",
  icons: {
    // Specify the favicon for different sizes
    icon: "favicon.ico", // Link to your favicon PNG image
    apple: "favicon.ico", // Apple devices
    favicon: "favicon.ico", // General favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
