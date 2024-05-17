/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { type Transaction } from "../context/type";
import { transactionsAPI } from "../dashboard/transactions-api";

const transactionsApi = new transactionsAPI();

export interface Category {
    id: number;
    name: string;
    icon: { name: string; path: string }; // Define icon as an object with name and path properties
}


export const getAllCategories = (): Category[] => {
    const categoryJSON = localStorage.getItem('category');
    if (categoryJSON != null) {
        return JSON.parse(categoryJSON);
    } else {
        return [];
    }
};

export const addCategory = async (newCategory: Category): Promise<void> => {
    const categories = getAllCategories();
    newCategory.id = Math.floor(Math.random() * 10000) + 1;
    categories.push(newCategory);
    localStorage.setItem('category', JSON.stringify(categories));
};

export const updateCategory = async (updatedCategory: Category): Promise<void> => {
    const categories = getAllCategories();
    const index = categories.findIndex(category => category.id === updatedCategory.id);
    if (index !== -1) {
        categories[index] = updatedCategory;
        localStorage.setItem('category', JSON.stringify(categories));
    } else {
        throw new Error('Category not found');
    }
};

export const deleteCategory = async (categoryId: number): Promise<void> => {
    let categories = getAllCategories();
    categories = categories.filter(category => category.id !== categoryId);
    localStorage.setItem('category', JSON.stringify(categories));
};

export const getTotalTransactionAmountByCategory = (categoryId: number): number => {
    const categories = getAllCategories();
    const category = categories.find(cat => cat.id === categoryId);
    if (category == null) {
        console.error(`Category with ID ${categoryId} not found.`);
        return 0;
    }
    const allTransactions = transactionsApi.getAllTransactions();
    return allTransactions
        .filter(transaction => transaction.category === category.name)
        .reduce((total, transaction) => total + transaction.amount, 0);
};



export const getMostRecentTransactions = (count: number = 5): Transaction[] => {
    const allTransactions = transactionsApi.getAllTransactions();
    return allTransactions
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, count);
};

export const getTopTransactionsByAmount = (count: number = 5): Transaction[] => {
    const allTransactions = transactionsApi.getAllTransactions();
    return allTransactions
        .sort((a, b) => b.amount - a.amount)
        .slice(0, count);
};
