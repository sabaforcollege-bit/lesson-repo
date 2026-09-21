import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div className="text-center py-16 px-4">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                მოგესალმებით ჩვენს აპლიკაციაში
            </h1>
            <p className="text-gray-600 max-w-lg mx-auto mb-6">
                იპოვეთ GitHub-ის მომხმარებლები, დაათვალიერეთ მათი პროფილები და რეპოზიტორიები მარტივად.
            </p>
            <Link
                to="/search"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
                მომხმარებლების ძებნა
            </Link>
        </div>
    );
}