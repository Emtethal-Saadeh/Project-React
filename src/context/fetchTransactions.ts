const FETCH_TRANSACTIONS_URL = 'https://mocki.io/v1/8b489a5a-617e-45d5-8ec8-284cee710485';

const fetchTransactions = async (setTransactions: (arg0: any) => void, setLoading: (arg0: boolean) => void, setError: (arg0: boolean) => void) => {
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

export default fetchTransactions;
