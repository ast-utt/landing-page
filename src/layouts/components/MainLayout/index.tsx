import { CommonLayout } from '@/types/layouts';
import { Header } from '../Header';
import useTrans from '@/hooks/useTrans';

export const MainLayout = ({ children }: CommonLayout) => {
  const trans = useTrans();

  return (
    // w-full max-w-screen-xl relative mx-auto
    <>
      <Header />
      <main className="font-sans min-h-[calc(100vh-72px)] bg-light-orange">
        {children}
        {/* <div className="font-volkhov">{trans.club.name}</div> */}
      </main>
    </>
  );
};
