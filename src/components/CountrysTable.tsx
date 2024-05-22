import type { Country } from '@/interfaces/country-interface';
import { formaterNumber } from '@/lib/numberFormater';
import Image from 'next/image';
import Skeleton from '@/components/Skeleton';
import Link from 'next/link';

interface Props {
   countrys: Country[];
   loading: boolean;
}

const CountrysTable = ({ countrys, loading }: Props) => {
   if (!loading) {
      return <Skeleton />;
   }

   return (
      <div className="overflow-x-auto">
         <table className="min-w-full divide-y-2 divide-fondo-claro  ">
            <thead className="text-left fond-bold text-sm text-primary">
               <tr>
                  <th className="whitespace-nowrap lg:px-4 py-2">Flag</th>
                  <th className="whitespace-nowrap lg:px-4 py-2">Name</th>
                  <th className="whitespace-nowrap lg:px-4 py-2">Population</th>
                  <th className="whitespace-nowrap lg:px-4 py-2">Area (km2)</th>
                  <th className="whitespace-nowrap px-4 py-2 hidden lg:block">
                     Region
                  </th>
               </tr>
            </thead>

            <tbody className="text-secondary text-sm lg:text-base">
               {countrys.map((country) => (
                  <tr key={country.name.official}>
                     <td className="whitespace-nowrap py-2">
                        <Image
                           className="rounded-md w-20 h-12 aspect-square object-cover"
                           height={60}
                           width={60}
                           src={country.flags.svg}
                           alt={country.flags.alt}
                        />
                     </td>
                     <td className="whitespace-nowrap lg:px-4 w-[80px] py-2 hover:underline">
                        <Link href={`/${country.ccn3}`}>
                           {country.name.common}
                        </Link>
                     </td>

                     <td className="whitespace-nowrap lg:px-4 py-2 ">
                        {formaterNumber(country.population)}
                     </td>
                     <td className="whitespace-nowrap lg:px-4 py-2 ">
                        {formaterNumber(country.area)}
                     </td>
                     <td className="whitespace-nowrap lg:px-4 py-2 hidden lg:block ">
                        {country.region}
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default CountrysTable;
