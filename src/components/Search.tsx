import SearchLogo from '@/components/icons/SearchLogo';

interface Props {
   countriesFound: number;
   onSearch: (value: string) => void;
}

const Search = ({ onSearch, countriesFound }: Props) => {
   return (
      <div className="flex mb-6 flex-col lg:flex-row justify-between items-center py-6">
         <span className="text-primary font-bold mb-6 lg:mb-0">
            Found {countriesFound} countries
         </span>
         <div className="relative">
            <SearchLogo className="absolute top-[7px] left-2" />
            <input
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onSearch(e.target.value);
               }}
               placeholder="Search by Name, Region, Subregion"
               className="bg-fondo-claro py-2 px-10 rounded-lg text-primary
               outline-none w-96
               "
               type="search"
            />
         </div>
      </div>
   );
};

export default Search;
