export interface Country {
   flags: Flags;
   name: Name;
   ccn3: string;
   independent?: boolean;
   status: string;
   currencies: { [key: string]: Currency };
   capital: string[];
   region: string;
   subregion: string;
   languages: { [key: string]: string };
   borders: string[];
   area: number;
   population: number;
   continents: string[];
}

export interface Currency {
   name: string;
   symbol: string;
}

export interface Flags {
   png: string;
   svg: string;
   alt: string;
}

export interface Name {
   common: string;
   official: string;
   nativeName: { [key: string]: NativeName };
}

export interface NativeName {
   official: string;
   common: string;
}
