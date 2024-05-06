import { type Transaction } from "../context/type";



export class transactionsAPI {
  getAllTransactions(): Transaction[] {
    const transactionsJSON = localStorage.getItem('transactions');
    if (transactionsJSON != null) {
      return JSON.parse(transactionsJSON);
    } else {
      return [];
    }
  }

  getTransaction(id: number): Transaction | null {
    const transactions = this.getAllTransactions();
    const foundTransaction = transactions.find(transaction => transaction.id === id);
    return foundTransaction ?? null;
  }

  addTransaction(transaction: Transaction): void {
    const transactions = this.getAllTransactions();
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }

  removeTransaction(id: number): void {
    let transactions = this.getAllTransactions();
    transactions = transactions.filter(transaction => transaction.id !== id);
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }

  editTransaction(updatedTransaction: Transaction): void {
    const transactions = this.getAllTransactions();
    const index = transactions.findIndex(transaction => transaction.id === updatedTransaction.id);
    if (index !== -1) {
      transactions[index] = updatedTransaction;
      localStorage.setItem('transactions', JSON.stringify(transactions));
    } else {
      throw new Error('Transaction not found');
    }
  }


  getTransactionsForLast24Hours(): Transaction[] {
    const currentTime = new Date().getTime();
    const transactions = this.getAllTransactions();
    return transactions.filter(transaction => currentTime - new Date(transaction.date).getTime() <= 24 * 60 * 60 * 1000);
  }

  getTransactionsForLastMonth(): Transaction[] {
    const currentDate = new Date();
    const transactions = this.getAllTransactions();
    return transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      return transactionDate.getFullYear() === currentDate.getFullYear() && transactionDate.getMonth() === currentDate.getMonth();
    });
  }

  getTransactionsForLastYear(): Transaction[] {
    const currentDate = new Date();
    const transactions = this.getAllTransactions();
    return transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      return transactionDate.getFullYear() === currentDate.getFullYear();
    });
  }
}



  