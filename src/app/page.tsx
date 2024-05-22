import { getAllCountries } from '@/actions/country-actions';
import Countrys from '@/components/Countrys';

export default async function Home() {
   const countries = await getAllCountries();

   return (
      <main className="pb-20">
         <Countrys allCountries={countries} />
      </main>
   );
}
