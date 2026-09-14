import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Country } from '../types/country';
import BorderBadge from '../elements/BorderBadge';

export default function Detail() {
    const { code } = useParams<{ code: string }>();
    const navigate = useNavigate();
    const [country, setCountry] = useState<Country | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data: Country[]) => {
                const found = data.find(
                    (item) => (item.alpha3Code || item.cca3) === code
                );
                setCountry(found || null);
            })
            .catch((err) => console.error('Error loading detail data:', err))
            .finally(() => setLoading(false));
    }, [code]);

    if (loading) return <div className="max-w-7xl mx-auto px-4 py-10 font-bold">იტვირთება...</div>;
    if (!country) return <div className="max-w-7xl mx-auto px-4 py-10">ქვეყანა ვერ მოიძებნა</div>;

    const countryName = typeof country.name === 'string' ? country.name : country.name?.common || '';
    const flagUrl = country.flags?.svg || country.flags?.png || country.flag || '';

    let nativeName = country.nativeName;
    if (!nativeName && typeof country.name !== 'string' && country.name?.nativeName) {
        const firstNative = Object.values(country.name.nativeName)[0];
        nativeName = firstNative?.common;
    }

    const capital = Array.isArray(country.capital) ? country.capital[0] : country.capital;
    const topLevelDomain = Array.isArray(country.topLevelDomain) ? country.topLevelDomain[0] : country.tld?.[0];

    let currencies = 'N/A';
    if (Array.isArray(country.currencies)) {
        currencies = country.currencies.map((c) => c.name).join(', ');
    } else if (country.currencies) {
        currencies = Object.values(country.currencies).map((c) => c.name).join(', ');
    }

    let languages = 'N/A';
    if (Array.isArray(country.languages)) {
        languages = country.languages.map((l: { name: string }) => l.name).join(', ');
    } else if (country.languages) {
        languages = Object.values(country.languages).map((l) => (typeof l === 'string' ? l : (l as { name: string }).name)).join(', ');
    }

    return (
        <main className="max-w-7xl mx-auto px-4 py-10">
            <button
                onClick={() => navigate(-1)}
                className="px-6 py-2 bg-white dark:bg-gray-800 rounded shadow-md mb-10 cursor-pointer"
            >
                ← უკან დაბრუნება
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <img src={flagUrl} alt={countryName} className="w-full rounded shadow-md" />

                <div>
                    <h1 className="text-3xl font-bold mb-6">{countryName}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <p><strong>მშობლიური სახელწოდება:</strong> {nativeName || countryName}</p>
                        <p><strong>მოსახლეობა:</strong> {country.population?.toLocaleString() ?? 'N/A'}</p>
                        <p><strong>რეგიონი:</strong> {country.region || 'N/A'}</p>
                        <p><strong>ქვერეგიონი:</strong> {country.subregion || 'N/A'}</p>
                        <p><strong>დედაქალაქი:</strong> {capital || 'N/A'}</p>
                        <p><strong>უმაღლესი დონის დომენი:</strong> {topLevelDomain || 'N/A'}</p>
                        <p><strong>ვალუტა:</strong> {currencies}</p>
                        <p><strong>ენები:</strong> {languages}</p>
                    </div>

                    {country.borders && country.borders.length > 0 && (
                        <div className="flex gap-2 items-center flex-wrap">
                            <strong className="mr-2">მოსაზღვრე ქვეყნები:</strong>
                            {country.borders.map((borderCode) => (
                                <BorderBadge key={borderCode} borderCode={borderCode} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}