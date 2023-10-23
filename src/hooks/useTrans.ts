import { useRouter } from 'next/router';
import en from '../../public/langs/en';
import vi from '../../public/langs/vi';

const useTrans = () => {
  const { locale } = useRouter();

  const trans = locale === 'vi' ? vi : en;

  return trans;
};

export default useTrans;
