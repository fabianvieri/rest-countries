export interface Country {
	name: {
		common: string;
		official: string;
		nativeName: {
			[T: string]: {
				official: string;
				common: string;
			};
		};
	};
	cca3: string;
	tld: string;
	status: string;
	currencies: {
		[T: string]: {
			name: string;
			symbol: string;
		};
	};
	capital: string[];
	region: string;
	subregion: string;
	languages: {
		[T: string]: string;
	};
	area: number;
	population: number;
	continents: string[];
	flags: { png: string; svg: string };
	borders: string[];
}
