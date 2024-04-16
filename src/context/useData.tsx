import { useEffect, useState } from 'react';
import dayjs from 'dayjs'; // Import Day.js

interface Transaction {
  id: number;
  name: string;
  category: string;
  date: string; // Change the type to string
  amount: number;
}

const useData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('https://mocki.io/v1/8b489a5a-617e-45d5-8ec8-284cee710485');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        // Format the date using Day.js
        const formattedData = data.map((transaction: Transaction) => ({
          ...transaction,
          date: dayjs(transaction.date).format('YYYY-MM-DD'),
        }));

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setTransactions(formattedData);
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
