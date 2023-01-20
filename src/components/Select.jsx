import React from 'react';

const Select = ({ value, onChange, moreClass }) => (
  <select
    value={value}
    onChange={onChange}
    className={`outline-none cursor-pointer focus:border-btnGreen focus:border focus:ring-btnGreen h-full 
                    rounded-md bg-transparent py-0 sm:pl-2 sm:pr-1 text-gray-500 text-sm ${moreClass}`}>
    <option value={0.142857143}>Daily</option>
    <option value="1">Weekly</option>
    <option value="2">Fortnightly</option>
    <option value="4">Monthly</option>
    <option value="12">Quarterly</option>
    <option value="24">Half-Yearly</option>
    <option value="48">Annually</option>
  </select>
);

export default Select;
