export interface Pokemon {
   id: number;
   name: string;
   height: number;
   weight: number;
   abilities: string[];
   description: string;
   types: string[];
   stats: {
      label: string;
      value: number;
   }[];
}
