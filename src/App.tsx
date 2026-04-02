import { ApolloAppProvider } from "@/app/providers/apollo";
import { AppRouter } from "@/app/router";

export default function App() {
  return (
    <ApolloAppProvider>
      <AppRouter />
    </ApolloAppProvider>
  );
}
