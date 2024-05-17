/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { icons } from './icon';
import { type Category } from './category-api';

interface Props {
  category: Category | null;
  onSaveButtonClicked: (category: Category) => void;
  onHideDialog: () => void;
}

const CategoryForm: React.FC<Props> = ({ category, onSaveButtonClicked, onHideDialog }) => {
  const [categoryName, setCategoryName] = useState((category != null) ? category.name : '');
  const [selectedIcon, setSelectedIcon] = useState<{ name: string; path: string } | string>(
    (category != null) ? category.icon : ''
  );

  const handleSave = () => {
    const newCategory: Category = {
      id: (category != null) ? category.id : -1,
      name: categoryName,
      icon: typeof selectedIcon === 'string' ? { name: selectedIcon, path: '' } : selectedIcon
    };
  
    onSaveButtonClicked(newCategory);
    onHideDialog();
  };
  
  
  
  
  return (
    <Dialog header={(category != null) ? 'Edit Category' : 'Add Category'} visible={true} onHide={onHideDialog}>
      <div className="p-field m-2">
        <label htmlFor="categoryName" className="m-2">Category Name : </label>
        <InputText id="categoryName" value={categoryName} onChange={(e) => { setCategoryName(e.target.value); }} />
      </div>
      <div className="p-field m-2">
        <label htmlFor="icon" className="m-2">Icon : </label>
        <Dropdown id="icon" value={selectedIcon} options={icons} optionLabel="name" onChange={(e) => { setSelectedIcon(e.value); }} placeholder="Select an Icon" />
      </div>
      <div className="p-dialog-footer">
        <Button className="btn btn-primary m-2" label="Save" onClick={handleSave} />
        <Button label="Cancel" className="btn btn-light" onClick={onHideDialog} />
      </div>
    </Dialog>
  );
};

export default CategoryForm;
