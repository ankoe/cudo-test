import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutSidebar from "./components/layout/Sidebar";
import LayoutTopbar from "./components/layout/Topbar";
import PrelineScript from "./components/prelineScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cudo Test",
  description: "-",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full h-screen">
          <div>
            <LayoutSidebar />
          </div>
          <div className="grow overflow-y-auto">
            <LayoutTopbar />
            {children}
          </div>
        </div>
      </body>

      <PrelineScript />
    </html>
  );
}
