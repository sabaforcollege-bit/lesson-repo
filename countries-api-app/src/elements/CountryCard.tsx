import { Link } from 'react-router-dom';
import type { Country } from '../types/country';
import { useTheme } from '../context/ThemeContext';

interface CountryCardProps {
    country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const countryCode = country.alpha3Code || country.cca3 || '';
    const countryName = typeof country.name === 'string' ? country.name : country.name?.common || 'N/A';
    const flagUrl = country.flags?.svg || country.flags?.png || country.flag || '';
    const capitalDisplay = Array.isArray(country.capital) ? country.capital[0] : country.capital || 'N/A';
    const regionDisplay = country.region || 'N/A';

    return (
        <Link
            to={`/country/${countryCode}`}
            className={
                isDark
                    ? 'bg-[#2b3642] text-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform block'
                    : 'bg-white text-[#111517] rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform block'
            }
        >
            <img src={flagUrl} alt={countryName} className="w-full h-40 object-cover" />
            <div className="p-6">
                <h2 className="font-bold text-lg mb-4">{countryName}</h2>
                <p className="text-sm"><strong>მოსახლეობა:</strong> {country.population?.toLocaleString() ?? 'N/A'}</p>
                <p className="text-sm"><strong>რეგიონი:</strong> {regionDisplay}</p>
                <p className="text-sm"><strong>დედაქალაქი:</strong> {capitalDisplay}</p>
            </div>
        </Link>
    );
}