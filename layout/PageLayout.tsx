import * as React from 'react';

import Link from 'next/link';

import '@/styles/globals.css';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavigationMenu className="p-4">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              href="/"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <p className="text-xl">Özer Gökalpsezer</p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/about"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/posts"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Posts</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className={navigationMenuTriggerStyle()}
            >
              Resume
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {children}
    </>
  );
}
