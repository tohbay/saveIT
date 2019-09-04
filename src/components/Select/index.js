import React from 'react';

const accounts = [
  'Savings',
  'Current',
];

const SelectAccountType = ({ handleChange, type, selectedAccountType }) => (
  <select
    name={type}
    value={selectedAccountType}
    onChange={handleChange}
  >
    {accounts.map(account => {
      return (
        <option key={account} value={account}>
          {account}
        </option>
      );
    })}
  </select>
);

export default SelectAccountType;
