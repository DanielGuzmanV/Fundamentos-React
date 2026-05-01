import { useAssets } from "../../../features/demo-crypto/crypto-app/hooks/useAssets";

export const CryptoMarketsPage = () => {
  const { coins, isLoading, error } = useAssets();

  if (isLoading) return <div>Cargando mercado...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {coins.map(coin => (
        <li key={coin.id}>
          {coin.rank} = {coin.name}: ${Number(coin.priceUsd).toFixed(2)}
        </li>
      ))}
    </ul>
  );
};