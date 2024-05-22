'use server';

import { API_URL } from '@/config/config';
import { Country, Flags, Name } from '@/interfaces/country-interface';

export const getAllCountries = async (): Promise<Country[]> => {
   try {
      const fetchCountries = await fetch(API_URL);
      const countries: Country[] = await fetchCountries.json();
      const shortCountries = countries.slice(0, 20);
      return shortCountries;
   } catch (error) {
      throw new Error(`${error}`);
   }
};

export const getCountriesByRegion = async (region: string) => {
   try {
      const fetchCountries = await fetch(
         `https://restcountries.com/v3.1/region/${region}?fields=name,population,ccn3,flags,area,region,independent,status,currencies,borders,capital,subregion,languages,continents`
      );
      const countries: Country[] = await fetchCountries.json();
      const shortCountries = countries.slice(0, 20);
      return shortCountries;
   } catch (error) {
      throw new Error(`${error}`);
   }
};

export const getIndependentCountries = async (independent: boolean) => {
   try {
      const fetchCountries = await fetch(
         `https://restcountries.com/v3.1/all?independent?status=${independent}&fields=name,ccn3,population,flags,area,region,independent,status,currencies,borders,capital,subregion,languages,continents`
      );
      const countries: Country[] = await fetchCountries.json();
      const shortCountries = countries.slice(0, 20);
      return shortCountries;
   } catch (error) {
      throw new Error(`${error}`);
   }
};

export const getCountrie = async (code: string): Promise<Country> => {
   try {
      const response = await fetch(
         `https://restcountries.com/v3.1/alpha/${code}?fields=name,population,ccn3,flags,area,region,independent,status,currencies,borders,capital,subregion,languages,continents`
      );

      const data = await response.json();
      return data;
   } catch (error) {
      throw new Error(`${error}`);
   }
};

interface Borders {
   flags: Flags;
   name: Name;
   ccn3: string;
}

export const getBorders = async (value: string): Promise<Borders[] | []> => {
   if (value === '') [];
   try {
      const response = await fetch(
         `https://restcountries.com/v3.1/alpha?codes=${value}&fields=flags,name,ccn3`
      );

      const data = await response.json();
      return data;
   } catch (error) {
      throw new Error(`${error}`);
   }
};
