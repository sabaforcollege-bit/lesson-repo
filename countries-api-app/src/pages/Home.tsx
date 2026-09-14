import { useEffect, useState } from 'react';
import type { Country } from '../types/country';
import CountryCard from '../elements/CountryCard';
import SearchInput from '../components/SearchInput';
import RegionFilter from '../components/RegionFilter';

interface HomeProps {
    activeSearch: string;
    setActiveSearch: (val: string) => void;
    selectedRegion: string;
    setSelectedRegion: (val: string) => void;
}

export default function Home({
    activeSearch,
    setActiveSearch,
    selectedRegion,
    setSelectedRegion
}: HomeProps) {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data.json')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch data');
                return res.json();
            })
            .then((data: Country[]) => setCountries(data))
            .catch((err) => console.error('Error loading data:', err))
            .finally(() => setLoading(false));
    }, []);

    const filteredCountries = countries.filter((country) => {
        const nameStr = typeof country.name === 'string' ? country.name : country.name?.common || '';
        const matchesSearch = nameStr.toLowerCase().includes(activeSearch.toLowerCase());
        const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
        return matchesSearch && matchesRegion;
    });

    if (loading) {
        return <div className="text-center py-10 font-bold">იტვირთება...</div>;
    }

    return (
        <main className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 items-start md:items-center">
                <SearchInput onSearch={setActiveSearch} />
                <RegionFilter selectedRegion={selectedRegion} onSelect={setSelectedRegion} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                {filteredCountries.map((country) => (
                    <CountryCard key={country.alpha3Code || country.cca3} country={country} />
                ))}
            </div>
        </main>
    );
}