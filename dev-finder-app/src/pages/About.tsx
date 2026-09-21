export function About() {
    return (
        <div className="max-w-2xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">ჩვენ შესახებ</h1>
            <p className="text-gray-600 leading-relaxed">
                ეს არის პროექტი სადაც ხდება Github მომხმარებლების მოძიება სადა ყველა ამ საიტის მომხმარებელი არის მოცემული, პროექტი იყენებს GitHub REST API-ს მომხმარებელთა მონაცემების წამოსაღებად.
            </p>
            <p className="text-gray-600 leading-relaxed mt-5">
                საიტის ასაწყობად გამოყენებული იქნა: React და TypeScript
                ასევე გამოყენებული იქნა პროგრამული პაკეტები: React Router და Tailwind
            </p>
        </div>
    );
}