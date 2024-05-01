import * as React from 'react';

import '@/styles/globals.css';
import { DropdownMenu, NavigationMenu } from './Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex p-4 justify-between items-center w-full ">
        <NavigationMenu />
        <DropdownMenu />
      </div>
      <div className="py-4 px-8">{children}</div>
    </>
  );
}
