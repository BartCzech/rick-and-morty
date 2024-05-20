// components/Layout.tsx
import React, { ReactNode } from "react";
import SideNav from "@/app/ui/dashboard/sidenav";
import "@/app/ui/global.css";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Rick and Morty fandom',
    default: 'Rick and Morty fandom',
  },
  description: 'The official Rick and Morty fandom, built with Next.js.',
  icons: {
    icon: '/favicon.ico',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
              <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};
