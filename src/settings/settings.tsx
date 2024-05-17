/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useAppStore } from '../context/app-store';

const Settings: React.FC = () => {
  const { currency, setCurrency, language, setLanguage } = useAppStore();

  const currencies = [
    { name: 'Shekel', sign: '₪' },
    { name: 'Jordan Dinar', sign: 'د' },
    { name: 'US Dollar', sign: '$' },
  ];

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = e.target.value;
    setCurrency(selectedCurrency);
    
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <>
    <div className="p-2 pt-3">
        <header className="mb-3 d-flex justify-content-between align-items-center ">
          <div className="fs-1 fw-bold">Transactions</div>
        </header>

        <div className="panel w-100">
        <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="currencySelect">Currency:</label>
            <select id="currencySelect" className="form-control" value={currency} onChange={handleCurrencyChange}>
              {currencies.map((cur) => (
                <option key={cur.name} value={cur.name}>
                  {cur.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="languageSelect">Language:</label>
            <select id="languageSelect" className="form-control" value={language} onChange={handleLanguageChange}>
              <option value="Arabic">Arabic</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>
      </div>
      
      </div>
    </div>
    </>
  );
};

export default Settings;
