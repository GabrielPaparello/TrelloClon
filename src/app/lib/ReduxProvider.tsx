// providers/ReduxProvider.tsx
'use client';

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from "@/app/lib/store";


interface Props {
  children: ReactNode;
}

const ReduxProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
