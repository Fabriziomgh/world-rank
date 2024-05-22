'use client';

import { regionsFilter } from '@/config/config';

interface Props {
   regionSelected: string;
   onChangeSelect: (value: string) => void;
}

const Regions = ({ regionSelected, onChangeSelect }: Props) => {
   return (
      <div className="mb-4">
         <span className="block  mb-3 text-sm font-bold text-primary">
            Region
         </span>

         <ol className="flex flex-wrap gap-2">
            {regionsFilter.map(({ region }, index) => (
               <li
                  key={index}
                  onClick={() => {
                     region === regionSelected
                        ? onChangeSelect('')
                        : onChangeSelect(region);
                  }}
                  className={`
                    py-2 px-4 font-bold cursor-pointer  capitalize rounded-xl
                    ${
                       region === regionSelected
                          ? 'text-secondary bg-fondo-claro'
                          : 'text-primary '
                    }
                    `}
               >
                  {region}
               </li>
            ))}
         </ol>
      </div>
   );
};

export default Regions;
