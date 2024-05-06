import { useEffect, useState } from 'react';
import { type Transaction } from './type';
import fetchTransactions from './fetchTransactions';


const useData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    void fetchTransactions(setTransactions, setLoading, setError);
  }, []);

  return { loading, error, transactions };
};

export default useData;
