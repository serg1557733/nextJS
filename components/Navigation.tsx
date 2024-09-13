import React from 'react';
import { NavItemsType } from './NavLInks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation({ navItems }: { navItems: NavItemsType[] }) {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((link: NavItemsType) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? 'bg-green-900' : 'bg-slate-700'}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
