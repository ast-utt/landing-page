import { routes } from '@/constants/navigation';
import useTrans from '@/hooks/useTrans';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';

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
    <></>
    // <Disclosure as="nav" className="bg-orange-extra-light">
    //   {({ open }) => (
    //     <>
    //       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sm:py-3 py-1">
    //         <div className="relative flex h-16 items-center justify-between">
    //           <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
    //             {/* Mobile menu button*/}
    //             <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-orange-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //               {open ? (
    //                 <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    //               ) : (
    //                 <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
    //               )}
    //             </Disclosure.Button>
    //           </div>

    //           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //             <NextLink
    //               href={'/'}
    //               className="flex flex-shrink-0 items-center cursor-pointer"
    //               passHref
    //             >
    //               <Image
    //                 role="a"
    //                 src={'/logos/logo_bg_white.png'}
    //                 alt="logo"
    //                 width={70}
    //                 height={70}
    //               />
    //             </NextLink>

    //             <div className="hidden sm:ml-6 sm:block w-full">
    //               <div className="flex space-x-4 items-center h-full justify-center gap-x-8">
    //                 {navigation.map((item) => (
    //                   <Link key={item.id} href={item.href}>
    //                     {item.title}
    //                   </Link>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <Transition
    //         as={Fragment}
    //         enter="transition ease-in-out duration-1000 transform"
    //         enterFrom="translate-x-full opacity-0 scale-95"
    //         enterTo="translate-x-0"
    //         leave="transition ease-in-out duration-1000 transform"
    //         leaveFrom="translate-x-0"
    //         leaveTo="translate-x-full opacity-0 scale-95"
    //       >
    //         <Disclosure.Panel className="sm:hidden">
    //           <div className="space-y-1 px-2 pb-3 pt-2 bg-orange-extra-light right-0 w-full h-[calc(100vh-72px)]">
    //             {navigation.map((item) => (
    //               <NextLink key={item.title} href={item.href}>
    //                 <Disclosure.Button
    //                   className={getClassNames(
    //                     pathname === item.href
    //                       ? 'bg-orange font-bold bg-orange-primary'
    //                       : 'hover:text-white hover:bg-orange-300',
    //                     'block rounded-md px-3 py-4 text-base font-medium w-full'
    //                   )}
    //                 >
    //                   {item.title}
    //                 </Disclosure.Button>
    //               </NextLink>
    //             ))}
    //           </div>
    //         </Disclosure.Panel>
    //       </Transition>
    //     </>
    //   )}
    // </Disclosure>
  );
};
