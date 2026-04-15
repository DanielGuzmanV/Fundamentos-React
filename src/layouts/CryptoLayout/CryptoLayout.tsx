import { Outlet } from "react-router-dom";
import { CryptoHeader } from "../../components/layout/crypto-layout/CryptoHeader";

export const CryptoLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* El Header */}
      <CryptoHeader />
      
      {/* Contenidos principal */}
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  );
};