/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { type Transaction } from "../context/type";


export interface Category {
  id: number;
  name: string;
}

const categories: Category[] = [];

export const getAllCategories = (): Category[]  => {
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
  