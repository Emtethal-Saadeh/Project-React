/* eslint-disable prettier/prettier */
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
import { getAllCategories, type Category, addCategory, updateCategory, deleteCategory } from './category-api';
import CategoryForm from './CategoryForm';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import Authenticate from '../Authenticate/Authenticate';

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

  useEffect(() => {
    const fetchTransactionCategories = async () => {
      try {
        const categoryList = getAllCategories();
        console.log(categoryList);
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
            c.id === category.id ? { ...c, name: category.name } : c
          );
        }
      });
      setIsAddMode(false);
      setDisplayDialog(false);
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  const accept =(category: Category)=> {
      if (toast.current != null  ) {
        console.log(selectedCategory?.id)
        if(selectedCategory!=null)
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
    if(selectedCategory != null){
        console.log(selectedCategory.id)
    }
    
    setVisible(true);
  };

  return (
    <div className="p-2 pt-3">
      <header className="mb-3 d-flex justify-content-between align-items-center ">
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
      
      <DataTable
  value={categories}
  scrollable
  tableClassName="table table-hover rounded-3"
  scrollHeight="400px"
  virtualScrollerOptions={{ itemSize: 46 }}
  rowClassName={(data, index) => 'border-bottom'}
>
  {columns.map((col, index) => (
    
    <Column headerClassName="" key={index} field={col.value} header={col.heading} />
  ))}
  
    <Column
      headerClassName="back"
      body={(rowData) => (
        <Authenticate allowedRoles={['Admin']}>
        <div>
          <button
            className="btn btn-icon me-1 "
            onClick={() => {
              setSelectedCategory(rowData);
                setIsAddMode(false);
                setDisplayDialog(true);
            }}
          >
            <i className="fa fa-pencil  text-warning"></i>
          </button>
<Toast ref={toast} />
            <ConfirmDialog
                visible={visible}
                onHide={() => { setVisible(false); }}
                message={`Are you sure you want to delete "${selectedCategory?.name}"?`}
                header="Confirmation"
                icon="pi pi-exclamation-triangle"
                accept={() => accept(rowData)} 
                reject={reject}
                style={{ width: '50vw' }}
                breakpoints={{ '1100px': '75vw', '960px': '100vw' }}
            />
          <button
            className="btn btn-icon me-1"
            onClick={() => {
              acceptToDelete(rowData);
            }}
          >
            <i className="fa fa-trash  text-danger"></i>
          </button>
        </div>
        </Authenticate>
      )}
    />
    
  
</DataTable>
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
      <Toast ref={toast} />
      </div>
    </div>
  );
};

export default Categories;

