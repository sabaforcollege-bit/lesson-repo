import { useNavigate } from 'react-router-dom';

interface HeaderNavigationProps {
    title: string;
    step: string;
}

export function HeaderNavigation({ title, step }: HeaderNavigationProps) {
    const navigate = useNavigate();

    return (
        <div className="relative flex justify-between items-center border-b border-gray-300 pb-4 mb-8">
            <button
                onClick={() => navigate(-1)}
                className="absolute -left-12 top-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition-colors"
                type="button"
            >
                &#10094;
            </button>
            <h1 className="text-2xl font-bold tracking-wider text-gray-800 uppercase">{title}</h1>
            <span className="text-sm font-medium text-gray-600">{step}</span>
        </div>
    );
}