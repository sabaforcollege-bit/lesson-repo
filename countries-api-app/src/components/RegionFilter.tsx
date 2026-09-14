import { useTheme } from '../context/ThemeContext';

interface RegionFilterProps {
    selectedRegion: string;
    onSelect: (region: string) => void;
}

const regions = [
    { value: 'Africa', label: 'აფრიკა' },
    { value: 'Americas', label: 'ამერიკა' },
    { value: 'Asia', label: 'აზია' },
    { value: 'Europe', label: 'ევროპა' },
    { value: 'Oceania', label: 'ოკეანეთი' },
];

export default function RegionFilter({ selectedRegion, onSelect }: RegionFilterProps) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <select
            value={selectedRegion}
            onChange={(e) => onSelect(e.target.value)}
            className={
                isDark
                    ? 'px-4 py-3 bg-[#2b3642] text-white rounded shadow-md text-sm outline-none cursor-pointer transition-colors duration-300'
                    : 'px-4 py-3 bg-white text-[#111517] rounded shadow-md text-sm outline-none cursor-pointer transition-colors duration-300'
            }
        >
            <option value="">რეგიონის მიხედვით გაფილტვრა</option>
            {regions.map((reg) => (
                <option key={reg.value} value={reg.value}>
                    {reg.label}
                </option>
            ))}
        </select>
    );
}