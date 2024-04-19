import { useEffect, useState } from 'react';
import { type Transaction } from './Type';


const useData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const FETCH_TRANSACTIONS_URL = 'https://mocki.io/v1/8b489a5a-617e-45d5-8ec8-284cee710485';

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(FETCH_TRANSACTIONS_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setTransactions(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true);
        setLoading(false);
      }
    };

    void fetchTransactions();
  }, []);

  return { loading, error, transactions };
};

export default useData;
