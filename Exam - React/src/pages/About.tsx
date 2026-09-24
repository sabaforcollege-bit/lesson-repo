export function About() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl text-center">
            <h1 className="text-3xl font-bold mb-4 text-slate-800">ჩვენ შესახებ</h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                ეს არის ელექტრონული კომერციის ვებ-აპლიკაცია, მაღაზია სადაც შეგიძლიათ დაათვალიეროთ და ფავორიტებში შეინახოთ ყველა ის პროდუქტი რომელიც თქვენს გემოვნებას მოერგება.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                ეს აპლლიკაცია აგებულია React, TypeScript, React Router DOM-ისა და Tailwind CSS-ის გამოყენებით.
                პროექტში ინტეგრირებულია პროდუქტების კატალოგი FakeStore API-დან,
                დინამიური დეტალური გვერდები და ფავორიტი ნივთების შენახვის ფუნქციონალი LocalStorage-ში.
            </p>
        </div>
    );
}