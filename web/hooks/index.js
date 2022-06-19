import { useRouter } from 'next/router';

export const useNavigateToHome = () => {
  const router = useRouter();

  const handleNavigationToHome = () => {
    router.push('/');
  };

  return { handleNavigationToHome };
};
