import { useEffect, useState } from 'react';

const useRoutingAnimation = () => {
  const [isAnimation, setIsAnimation] = useState(true);

  useEffect(() => {
    window.addEventListener(
      'popstate',
      () => {
        setIsAnimation(false);
      },
      false
    );
  }, []);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });

    const timer = setTimeout(() => {
      setIsAnimation(true);
    }, 600);

    return () => clearTimeout(timer);
  });

  return isAnimation;
};

export default useRoutingAnimation;
