import { type Transaction } from "../context/Type";


export class TransactionsAPI {
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
}


export function addTransaction(newTransaction: Transaction) {
    const transactionsAPI = new TransactionsAPI();
    transactionsAPI.addTransaction(newTransaction);
  }
  
  export function getAllTransactions(): Transaction[] {
    const transactionsAPI = new TransactionsAPI();
    return transactionsAPI.getAllTransactions();
  }

  export function getTransaction(id: number): Transaction | null {
    const transactionsAPI = new TransactionsAPI();
    return transactionsAPI.getTransaction(id);
  }
  
  export function removeTransaction(id: number): void {
    const transactionsAPI = new TransactionsAPI();
    transactionsAPI.removeTransaction(id);
  }

  export function editTransaction(updatedTransaction: Transaction): void {
    const transactionsAPI = new TransactionsAPI();
    transactionsAPI.editTransaction(updatedTransaction);
  }
  