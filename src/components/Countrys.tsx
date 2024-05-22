'use client';

import CountrysTable from '@/components/CountrysTable';
import Regions from '@/components/Regions';
import SortBy from '@/components/SortBy';
import Status from '@/components/Status';
import Search from '@/components/Search';
import { useDebounce } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';
import { Country } from '@/interfaces/country-interface';
import { useSortCountries } from '@/hooks/useSortCountries';
import {
   getCountriesByRegion,
   getIndependentCountries,
} from '@/actions/country-actions';

interface Props {
   allCountries: Country[];
}

const Countrys = ({ allCountries }: Props) => {
   const [countries, setCountries] = useState<Country[]>(() =>
      [...allCountries].sort((a, b) => b.population - a.population)
   );
   const [search, setSearch] = useState('');
   const [sortBy, setSortBy] = useState('population');
   const [loading, setLoading] = useState(false);
   const [regionSelected, setRegionSelected] = useState<string>('');
   const [countriesIndependent, setCountriesIndependent] = useState(false);

   const debounceSearch = useDebounce(search, 400).toLowerCase();

   useEffect(() => {
      setLoading(true);
   }, []);

   useEffect(() => {
      if (debounceSearch === '') {
         const sortInitial = useSortCountries(allCountries, 'population');
         if (!sortInitial) return;
         return setCountries(sortInitial);
      }

      const searchCountrie = countries.filter(
         (country) =>
            country.region.toLowerCase() === debounceSearch ||
            country.name.common.toLowerCase() === debounceSearch ||
            country.subregion.toLowerCase() === debounceSearch
      );
      if (searchCountrie.length === 0) {
         return;
      } else {
         const sortedSearch = useSortCountries(searchCountrie, sortBy);
         setCountries(sortedSearch!);
      }
   }, [debounceSearch, sortBy]);

   useEffect(() => {
      const sortC = useSortCountries(countries, sortBy);
      if (!sortC) return;
      setCountries(sortC);
   }, [sortBy]);

   useEffect(() => {
      async function regionCuntries() {
         if (regionSelected === '') return;
         setLoading(false);
         const countriesByAPI = await getCountriesByRegion(regionSelected);

         const filteredCountries = countriesByAPI.filter(
            (country) => country.region.toLowerCase() === regionSelected
         );
         setCountries(filteredCountries);
         setLoading(true);
      }
      regionCuntries();
   }, [regionSelected]);

   useEffect(() => {
      async function independentCountries() {
         if (countriesIndependent === false) {
            const sortInitial = useSortCountries(allCountries, 'population');
            if (!sortInitial) return;
            return setCountries(sortInitial);
         }
         setLoading(false);
         const fetchCountries = await getIndependentCountries(
            countriesIndependent
         );
         setCountries(fetchCountries);
         setLoading(true);
      }
      independentCountries();
   }, [countriesIndependent]);

   return (
      <div className=" lg:mt-0 mt-10">
         <Search onSearch={setSearch} countriesFound={countries.length} />
         <section className="lg:flex">
            <div className="lg:w-1/4">
               <SortBy onChangeSort={setSortBy} />
               <Regions
                  regionSelected={regionSelected}
                  onChangeSelect={setRegionSelected}
               />
               <Status
                  status={countriesIndependent}
                  onChangeStatus={setCountriesIndependent}
               />
            </div>

            <div className="lg:w-3/4 lg:flex-grow lg:px-4">
               <CountrysTable countrys={countries} loading={loading} />
            </div>
         </section>
      </div>
   );
};

export default Countrys;
