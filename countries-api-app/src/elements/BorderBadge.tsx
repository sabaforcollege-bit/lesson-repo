import { Link } from 'react-router-dom';

interface BorderBadgeProps {
    borderCode: string;
}

export default function BorderBadge({ borderCode }: BorderBadgeProps) {
    return (
        <Link
            to={`/country/${borderCode}`}
            className="px-4 py-1 bg-white dark:bg-gray-800 rounded-sm shadow-md text-xs md:text-sm hover:opacity-80 transition-opacity"
        >
            {borderCode}
        </Link>
    );
}