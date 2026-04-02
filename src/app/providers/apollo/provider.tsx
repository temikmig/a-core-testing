import { ApolloProvider } from "@apollo/client/react";
import { apolloClient } from "./client";

export const ApolloAppProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
