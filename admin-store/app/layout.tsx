import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import TopBar from "@/components/TopBar";

export const metadata: Metadata = {
  title: "Rozzette Store Dashboard",
  description: "Dealers in wide range of products including Fashon items like clothes, shoes and Household items.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='flex'>
        <SidebarProvider>
          <AppSidebar />
          <main className='flex-grow min-h-screen md:px-4 py-2'>
            <TopBar />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
