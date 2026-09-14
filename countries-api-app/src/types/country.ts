export interface CountryLanguage {
    name: string;
    nativeName?: string;
}

export interface CountryCurrency {
    code?: string;
    name: string;
    symbol?: string;
}

export interface Country {
    name: string | { common: string; nativeName?: Record<string, { common: string }> };
    nativeName?: string;
    population: number;
    region: string;
    subregion?: string;
    capital?: string | string[];
    flags: {
        png: string;
        svg: string;
    };
    flag?: string;
    alpha3Code?: string;
    cca3?: string;
    topLevelDomain?: string[];
    tld?: string[];
    currencies?: CountryCurrency[] | Record<string, { name: string }>;
    languages?: CountryLanguage[] | Record<string, string>;
    borders?: string[];
}