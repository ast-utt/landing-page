import NextLink from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { getClassNames } from '@/utils/getClassNames';

type Props = {
  href: string;
  children: ReactNode;
};

export const Link = ({ children, href }: Props) => {
  const pathname = usePathname();

  return (
    <NextLink
      href={href}
      className={getClassNames(pathname === href ? 'text-primary-orange font-bold' : '')}
    >
      {children}
    </NextLink>
  );
};
