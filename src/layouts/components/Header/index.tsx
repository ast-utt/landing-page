import { Link, MenuButton } from '@/components/Buttons';
import { routes } from '@/constants/navigation';
import useTrans from '@/hooks/useTrans';
import { getClassNames } from '@/utils/getClassNames';
import { Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useMemo, useState } from 'react';

export const Header = () => {
  const trans = useTrans();
  const pathname = usePathname();
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);

  const toggleNavbar = () => {
    setOpenNavbar((prev) => !prev);
  };

  const navigation = useMemo(
    () =>
      routes.map((route) => ({
        ...route,
        // @ts-ignore
        title: trans.menu[route.id],
      })),
    [trans]
  );

  return (
    <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sm:py-3 py-1 bg-orange-extra-light">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <NextLink href={'/'} className="flex flex-shrink-0 items-center cursor-pointer" passHref>
            <Image role="a" src={'/logos/logo_bg_white.png'} alt="logo" width={70} height={70} />
          </NextLink>

          <div className="hidden sm:ml-6 sm:block w-full">
            <div className="flex space-x-4 items-center h-full justify-center gap-x-8">
              {navigation.map((item) => (
                <Link key={item.id} href={item.href}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <MenuButton onClick={toggleNavbar}>
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        </MenuButton>
      </div>

      <Transition
        show={openNavbar}
        as={Fragment}
        enter="transition ease-in-out duration-500 transform"
        enterFrom="translate-x-screen opacity-0 scale-95"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-500 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-screen opacity-0 scale-95"
      >
        <div className="absolute z-10 h-screen top-0 left-0 w-screen p-2 bg-orange-light">
          <div className="w-full flex justify-end">
            <MenuButton onClick={toggleNavbar}>
              <XMarkIcon className="block h-8 w-8 text-white" aria-hidden="true" />
            </MenuButton>
          </div>

          <div className="space-y-1 px-2 pb-3 pt-2 right-0 w-full h-[calc(100vh-72px)]">
            {navigation.map((item) => (
              <NextLink key={item.title} href={item.href}>
                <button
                  onClick={toggleNavbar}
                  className={getClassNames(
                    pathname === item.href
                      ? 'bg-orange font-bold bg-orange-primary'
                      : 'hover:text-white hover:bg-orange-300',
                    'block rounded-md px-3 py-4 text-base font-medium w-full'
                  )}
                >
                  {item.title}
                </button>
              </NextLink>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
};
