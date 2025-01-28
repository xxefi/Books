"use client";

import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "../redux/store/store";

interface ClientProviderProps {
  children: ReactNode;
}

const ClientProvider = ({ children }: ClientProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
