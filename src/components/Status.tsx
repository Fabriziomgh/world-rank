'use client';

import { useState } from 'react';

interface Props {
   status: boolean;
   onChangeStatus: (value: boolean) => void;
}

const Status = ({ status, onChangeStatus }: Props) => {
   return (
      <div className="mb-10 lg:mb-4">
         <span className="block  mb-1 text-sm font-bold text-primary">
            Status
         </span>

         <div className="flex flex-col gap-1">
            <div className="flex items-center space-x-2">
               <input
                  onChange={(e) => {
                     onChangeStatus(e.target.checked);
                  }}
                  checked={status}
                  className="h-5 w-5"
                  value="independent"
                  type="checkbox"
               />
               <span className="text-secondary">Independent</span>
            </div>
         </div>
      </div>
   );
};

export default Status;
