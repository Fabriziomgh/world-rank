import { getBorders, getCountrie } from '@/actions/country-actions';
import { formaterNumber } from '@/lib/numberFormater';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
   params: {
      code: string;
   };
}

export default async function CountryPage({ params }: Props) {
   const { code } = params;
   const countrie = await getCountrie(code);
   const borders = countrie.borders.join(',');
   const countrieBorders = await getBorders(borders);
   console.log(countrieBorders);

   return (
      <div className="pb-20">
         <div className="w-full flex justify-center -mt-14">
            <Image
               className="w-72 h-auto rounded-lg shadow-md"
               src={countrie.flags.svg}
               height={150}
               width={150}
               alt={countrie.flags.alt}
            />
         </div>

         <div className="w-full text-center py-10">
            <h2 className="text-4xl text-secondary font-bold py-2">
               {countrie.name.common}
            </h2>
            <h4 className="text-xl font-light text-secondary">
               {countrie.name.official}
            </h4>
         </div>

         <div className="w-full flex flex-col gap-y-4 lg:flex-row justify-evenly mb-10">
            <div className="flex divide-x-2 divide-primary text-secondary p-6 bg-fondo-claro  rounded-lg shadow">
               <h5 className="px-2">Population</h5>
               <span className="px-2">
                  {formaterNumber(countrie.population)}
               </span>
            </div>
            <div className="flex divide-x-2 divide-primary text-secondary p-6 bg-fondo-claro  rounded-lg shadow">
               <h5 className="px-2">Area (km2)</h5>
               <span className="px-2">{formaterNumber(countrie.area)}</span>
            </div>
         </div>

         <div className="max-w-xl mx-auto border border-fondo-claro p-4 rounded-sm">
            <div className=" flex flex-col text-center gap-y-4 lg:flex-row lg:justify-between  py-6 px-4 border-b border-fondo-claro">
               <h6 className="text-primary font-bold">Capital</h6>
               <span className="text-secondary">{countrie.capital}</span>
            </div>
            <div className=" flex flex-col text-center gap-y-4 lg:flex-row lg:justify-between py-6 px-4 border-b border-fondo-claro">
               <h6 className="text-primary font-bold">Subregión</h6>
               <span className="text-secondary">{countrie.subregion}</span>
            </div>
            <div className=" flex flex-col text-center gap-y-4 lg:flex-row lg:justify-between py-6 px-4 border-b border-fondo-claro">
               <h6 className="text-primary font-bold">Language</h6>
               <span className="text-secondary">
                  {Object.values(countrie.languages).join(', ')}
               </span>
            </div>
            <div className=" flex flex-col text-center gap-y-4 lg:flex-row lg:justify-between py-6 px-4 border-b border-fondo-claro">
               <h6 className="text-primary font-bold">Currencies</h6>
               <span className="text-secondary">
                  {Object.values(countrie.currencies).map(
                     (currenci) => currenci.name
                  )}
               </span>
            </div>
            <div className=" flex flex-col text-center gap-y-4 lg:flex-row lg:justify-between py-6 px-4 border-b border-fondo-claro">
               <h6 className="text-primary font-bold">Continents</h6>
               <span className="text-secondary">{countrie.continents}</span>
            </div>
            {countrieBorders.length > 0 ? (
               <div className=" py-6 px-4 ">
                  <h6 className="text-primary font-bold mb-8">
                     Neighbouring Countries
                  </h6>
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
                     {countrieBorders.map(({ flags, name, ccn3 }) => (
                        <div key={name.official} className="">
                           <Image
                              className="aspect-square w-20 h-16  rounded shadow"
                              src={flags.png}
                              alt={flags.alt}
                              width={30}
                              height={30}
                           />
                           <Link
                              href={`/${ccn3}`}
                              className="text-secondary font-semibold text-sm hover:underline"
                           >
                              {name.common}
                           </Link>
                        </div>
                     ))}
                  </div>
               </div>
            ) : (
               <h6 className="text-primary font-bold mb-8 text-center mt-8">
                  Not Neighbouring Countries
               </h6>
            )}
         </div>
      </div>
   );
}
