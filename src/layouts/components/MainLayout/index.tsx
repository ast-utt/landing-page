import useTrans from '@/hooks/useTrans';
import { CommonLayout } from '@/types/layouts';
import { Header } from '../Header';

export const MainLayout = ({ children }: CommonLayout) => {
  const trans = useTrans();

  return (
    // w-full max-w-screen-xl relative mx-auto
    <>
      <Header />
      <main className="font-sans min-h-[calc(100vh-72px)] bg-orange-extra-light">
        {children}
        {/* <div className="font-volkhov">{trans.club.name}</div> */}
      </main>
    </>
  );
};
