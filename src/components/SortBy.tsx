import React from 'react';

interface Props {
   onChangeSort: (value: string) => void;
}

const SortBy = ({ onChangeSort }: Props) => {
   return (
      <div className="mb-4">
         <span className="block  mb-1 text-sm font-bold text-primary">
            Sort by
         </span>

         <select
            onChange={(e) => {
               onChangeSort(e.target.value);
            }}
            className="outline-none mt-1.5 w-full bg-fondo py-2.5 px-2.5  rounded-lg  text-secondary sm:text-sm border border-fondo-claro"
         >
            <option value="population">Population</option>
            <option value="alphabetic">Alphabetic</option>
            <option value="area">Area km2</option>
         </select>
      </div>
   );
};

export default SortBy;
