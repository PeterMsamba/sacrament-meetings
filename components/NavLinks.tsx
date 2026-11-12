'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/meetings', label: 'Meetings' },
  { href: '/contact', label: 'Contact' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      {links.map((link) => {
        const isActive = pathname === link.href || pathname.startsWith('/meetings');
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? 'page' : undefined}
            className={`transition-colors ${
              isActive
                ? 'text-yellow-300 font-bold underline'
                : 'text-white hover:text-gray-200'
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}