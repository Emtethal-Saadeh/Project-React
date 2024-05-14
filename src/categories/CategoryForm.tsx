/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import {  Button } from 'primereact/button';
import { type Category } from './category-api';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

interface Props {
  category: Category | null;
  onSaveButtonClicked: (category: Category) => void;
  onHideDialog: () => void;
}

const CategoryForm: React.FC<Props> = ({ category, onSaveButtonClicked, onHideDialog }) => {
  const [categoryName, setCategoryName] = useState((category != null) ? category.name : '');

  const handleSave = () => {
    const newCategory: Category = { id: (category != null) ? category.id : -1, name: categoryName };
    onSaveButtonClicked(newCategory);
    onHideDialog();
  };

  return (
    <Dialog header={(category != null) ? 'Edit Category' : 'Add Category'} visible={true} onHide={onHideDialog}>
      <div className="p-field m-2">
        <label htmlFor="categoryName" className="m-2 ">Category Name : </label>
        <InputText id="categoryName" value={categoryName} onChange={(e) => { setCategoryName(e.target.value); }} />
      </div>
      <div className="p-dialog-footer">
        <Button className="btn btn-primary m-2 " label="Add" onClick={handleSave} />
        <Button label="Cancel" className="btn btn-light " onClick={onHideDialog}  />
      </div>
    </Dialog>
  );
};

export default CategoryForm;
