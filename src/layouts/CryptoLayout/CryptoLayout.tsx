import { Outlet } from "react-router-dom";
import { CryptoHeader } from "../../components/layout/crypto-layout/CryptoHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const cryptoQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
    }
  }
});

export const CryptoLayout = () => {
  return (
    <QueryClientProvider client={cryptoQueryClient}>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* El Header */}
        <CryptoHeader />
        
        {/* Contenidos principal */}
        <main className="flex-1 container mx-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </QueryClientProvider>
  );
};