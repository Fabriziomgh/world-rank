import { Country } from '@/interfaces/country-interface';

export const sortCountries = (countries: Country[], sortBy: string) => {
   if (sortBy === 'population') {
      return [...countries].sort((a, b) => b.population - a.population);
   } else if (sortBy === 'alphabetic') {
      return [...countries].sort((a, b) =>
         a.name.common.localeCompare(b.name.common)
      );
   } else if (sortBy === 'area') {
      return [...countries].sort((a, b) => b.area - a.area);
   }
};
