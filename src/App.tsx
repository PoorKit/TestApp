import { FC } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
};
