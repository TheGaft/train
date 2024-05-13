import { useCountdown, useLockBodyScroll } from 'rooks';
import { FC, useMemo, useRef, useState } from 'react';
import { Cleaner } from './Cleaner';

import './style.css';
import { Multiply } from './Multiply';

export const App: FC<{ name: string }> = ({ name }) => {
  const [isLocked, setIsLocked] = useState(false);
  useLockBodyScroll(isLocked);

  return (
    <>
      <Multiply />
    </>
  );
};
