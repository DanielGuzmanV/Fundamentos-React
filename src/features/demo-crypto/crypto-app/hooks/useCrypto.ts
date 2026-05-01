import { useEffect, useState } from "react"
import type { Coin } from "../types/crypto"
import { getCoins } from "../services/cryptoApi";

export const useCrypto = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setIsLoading(true);
        const data = await getCoins();
        setCoins(data);

      } catch (err) {
        setError("No se han podido cargar las monedas");
        console.error("Error:", err)
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoins();
  }, []);

  return {coins, isLoading, error}
}