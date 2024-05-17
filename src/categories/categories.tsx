/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { getAllCategories, getTotalTransactionAmountByCategory, type Category, addCategory, updateCategory, deleteCategory } from './category-api';
import CategoryForm from './CategoryForm';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Card } from 'primereact/card';
import Authenticate from '../Authenticate/Authenticate'; 
import { useAppStore } from '../context/app-store';

interface Columns {
    heading: string;
    value: string;
}

const columns: Columns[] = [
    { heading: 'Name', value: 'name' },
];

const Categories: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [displayDialog, setDisplayDialog] = useState<boolean>(false);
    const [isAddMode, setIsAddMode] = useState<boolean>(false);
    const [visible, setVisible] = useState(false);
    const toast = useRef<Toast>(null);
    const { currencySign } = useAppStore();


    useEffect(() => {
        const fetchTransactionCategories = async () => {
            try {
                const categoryList =  getAllCategories();
                setCategories(categoryList);
            } catch (error) {
                console.error('Error fetching transaction categories:', error);
            }
        };

        void fetchTransactionCategories();
    }, []);

    const handleSaveCategory = async (category: Category) => {
        try {
            if (isAddMode) {
                await addCategory(category);
            } else {
                await updateCategory(category);
            }
            setCategories((prevCategories) => {
                if (isAddMode) {
                    return [...prevCategories, category];
                } else {
                    return prevCategories.map((c) =>
                        c.id === category.id ? { ...c, name: category.name, icon: category.icon } : c
                    );
                }
            });
            setIsAddMode(false);
            setDisplayDialog(false);
        } catch (error) {
            console.error('Error saving category:', error);
        }
    };

    const accept = (category: Category) => {
        if (toast.current != null) {
            if (selectedCategory != null)
                void deleteCategory(selectedCategory.id);
            setCategories((prevCategories) =>
                prevCategories.filter((c) => c.id !== selectedCategory?.id)
            );
            toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        }
    }

    const reject = () => {
        if (toast.current != null) {
            toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    }

    const acceptToDelete = (categoryToDelete: React.SetStateAction<Category | null>) => {
        setSelectedCategory(categoryToDelete);
        setVisible(true);
    };

    return (
        <div className="p-2 pt-3">
            <header className="mb-3 d-flex justify-content-between align-items-center">
                <div className="fs-1 fw-bold">Transaction Categories</div>
                <Button
                    label="Add Category"
                    className="btn btn-primary"
                    onClick={() => {
                        setIsAddMode(true);
                        setSelectedCategory(null);
                        setDisplayDialog(true);
                    }}
                />
            </header>

            <div className="panel w-100">
                <div className="row">
                    {categories.map((category) => (
                        <div key={category.id} className="col-12 col-md-6 col-lg-4 mb-3">
                            <Card >
                                <div className="d-flex flex-column align-items-center mb-3">
                                    {category.icon && (
                                        <div className="category-icon mt-2">
                                            <img src={require(`./icons/${category.icon.path}`)} alt={category.icon.name} width={200} />
                                        </div>
                                    )}
                                </div>
                                <h4 style={{ fontWeight: 'bold' }}>{category.name} </h4>
                                <div>Total Transactions Amount: {currencySign}{getTotalTransactionAmountByCategory(category.id).toFixed(2)}</div>
                                
                              
                              <Authenticate allowedRoles={['Admin']}>
                                  <div className="d-flex justify-content-end">
                                      <button
                                          className="btn btn-icon me-1"
                                          onClick={() => {
                                              setSelectedCategory(category);
                                              setIsAddMode(false);
                                              setDisplayDialog(true);
                                          }}
                                      >
                                          <i className="fa fa-pencil text-warning"></i>
                                      </button>
                                      <button
                                          className="btn btn-icon me-1"
                                          onClick={() => {
                                              acceptToDelete(category);
                                          }}
                                      >
                                          <i className="fa fa-trash text-danger"></i>
                                      </button>
                                  </div>
                              </Authenticate>
                          </Card>


                        </div>
                    ))}
                </div>

                <Dialog
                    header={isAddMode ? 'Add Category' : ((selectedCategory != null) ? 'Edit Category' : '')}
                    visible={displayDialog}
                    onHide={() => {
                        setSelectedCategory(null);
                        setDisplayDialog(false);
                        setIsAddMode(false);
                    }}
                >
                    <CategoryForm
                        category={selectedCategory}
                        onSaveButtonClicked={(category) => {
                            void handleSaveCategory(category);
                        }}
                        onHideDialog={() => {
                            setSelectedCategory(null);
                            setDisplayDialog(false);
                            setIsAddMode(false);
                        }}
                    />
                </Dialog>

                <ConfirmDialog
                    visible={visible}
                    onHide={() => { setVisible(false); }}
                    message={`Are you sure you want to delete "${selectedCategory?.name}"?`}
                    header="Confirmation"
                    icon="pi pi-exclamation-triangle"
                    accept={() => accept(selectedCategory!)}
                    reject={reject}
                    style={{ width: '50vw' }}
                    breakpoints={{ '1100px': '75vw', '960px': '100vw' }}
                />

                <Toast ref={toast} />
            </div>
        </div>
    );
};

export default Categories;
